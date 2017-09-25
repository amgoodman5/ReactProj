'use strict';

console.log("hello");

var app = {
  title: 'Indecision App',
  subtitle: 'some subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
  console.log("form submited");
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtile
    ),
    React.createElement(
      'p',
      null,
      ' ',
      app.options.length > 0 ? "here are your options" : "no options"
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two '
      ),
      React.createElement(
        'li',
        null,
        app.options
      )
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All '
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
