console.log("hello")
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

let count = 0;
const addOne = () => {
 count++;
  renderCounterApp()
 };
const minusOne = () => {
 count--
  renderCounterApp()
  };
const reset = () => {
count = 0
 renderCounterApp()
   };

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
   const templateTwo =(
     <div>
       <h1> Count: {count} </h1>
         <button onClick={addOne}> +1 </button>
         <button onClick={minusOne}> -1 </button>
         <button onClick={reset}> reset </button>
     </div>

   );
   ReactDOM.render(templateTwo, appRoot);
 }
 renderCounterApp()
