"use strict";

console.log("hello");
//
// let app = {
//   title:'Indecision App',
//   subtitle: 'some subtitle',
//   options: []
// }
//only render subtile and p tag if subtile exist
//render new p tag if oprtions.length > 0
// const template =(
//  <div>
//   <h2>{app.title}</h2>
//   {app.subtitle && <p>{app.subtile}</p>}
//   <p> {app.options.length > 0 ?  "here are your options" : "no options"}</p>
//  </div>
// );

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " Count: ",
      count,
      " "
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      " +1 "
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      " -1 "
    ),
    React.createElement(
      "button",
      { onClick: reset },
      " reset "
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
