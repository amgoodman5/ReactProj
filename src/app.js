console.log("hello")

let app = {
  title:'Indecision App',
  subtitle: 'some subtitle',
  options: []
};

const onFormSubmit =(event)=>{
   event.preventDefault()


 const option = event.target.elements.option.value;

  if(option) {
  app.options.push(option)
  event.target.elements.option.value = "";
render()
}
   console.log("form submited");
};

const onRemoveAll = () =>{
  app.options = [];
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template =(
   <div>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtile}</p>}
    <p> {app.options.length > 0 ?  "here are your options" : "no options"}</p>
    <p>{app.options.length}</p>
   <ol>
    <li>Item one</li>
    <li>Item two </li>
    <li>{app.options}</li>
   </ol>
   <button onClick={onRemoveAll}>Remove All </button>
   <form onSubmit={onFormSubmit}>

   <input type="text" name="option"/>
   <button>Add Option</button>
   </form>

   </div>
  );
ReactDOM.render(template, appRoot);
};

render()
