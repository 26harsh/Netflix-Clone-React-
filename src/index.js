import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
<App/>
</BrowserRouter>,
document.getElementById('root')
);






// **********************************************************************************
// PRACTISE
// *********************************************************************************
// ReactDOM.render(
//     <App />,document.getElementById('root')
// );

// function ncard(val){
//     return(
//         <Card
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//     />
//     );
// }

// ReactDOM.render(
//     <>
//     </>
//     ,document.getElementById('root')
// );

// ReactDom.render(
//   <>
//   <h1>Harsh Chotaliya Netflix Pick</h1>
//   <p>Here the list of 5 netflix series</p>
//   <ol>
//     <li>Dark</li>
//     <li>Extra curricular</li>
//     <li>My holo love</li>
//     <li>My first-2 love</li>
//     <li>Mr Robot</li>
//   </ol>
//   </>
//   ,document.getElementById('root')
// );

// ***************************
// Expression
// ***************************

// const fname = "Harsh Chotaliya";

// ReactDom.render(
//   <>
//   <h1>My Name is {fname}</h1>
//   <p>My Luck Number is {3 + 3 + 3}</p>
//   <p>My roll Number is {9000 + 999}</p>
//   </>
//   ,document.getElementById('root')
//   );

// ***************************
// Template Literals
// ***************************

// const fname="Harsh";
// const lname="Chotaliya";

// without using template literals
// ReactDom.render(
//   <>
//   <h1>My Name is {fname} {lname}</h1>
//   <h2>My Name is {fname + lname}</h2>
//   <h3>My Name is {fname +" " +lname}</h3>
//   </>
//   ,document.getElementById('root')
// );

// Using Template Literals ( `....`)
// ReactDom.render(
//   <>
//   <h1>{`My Name is ${fname} ${lname}`}</h1>
//   </>
//   ,document.getElementById('root')
// );

// ***************************
// Current date and time
// ***************************
// const name="Harsh";
// const currdate = new Date().toLocaleDateString();
// const currtime= new Date().toLocaleTimeString();

// ReactDom.render(
//   <>
//   <h1>Hello My Name is {name}</h1>
//   <p>Todays Date is {currdate} </p>
//   <p>Current Time is {currtime}</p>
//   </>
//   ,document.getElementById('root')
// );

// *************************************************
// Greeting with Current date and time
// *************************************************
// import React from 'react';
// import ReactDom from 'react-dom';

// let curDate = new Date();
// let greeting='Default';
// curDate = curDate.getHours();
// const cssStyle={};

// if(curDate>=1 && curDate<12)
// {
//     greeting="Good Morning";
//     cssStyle.color="Green";
// }
// else if(curDate>=12 && curDate<=18)
// {
//     greeting="Good Afternoon";
//     cssStyle.color="Yellow";
// }
// else
// {
//     greeting="Good Night";
//     cssStyle.color="Black";
// }
// const heading={
//     color:'#fa9191',
//     backgroundColor:'%ffw9c5',
//     // margin:"500px 200px",
//     width:'500px',
//     TextAlign:'center',
//     padding:'20px',
//     borderRadius:'20px'
// }

// const divColor={
//     backgroundColor:'#b4f2e1',
//     height:'100vh'
// }

// ReactDom.render(
//     <>
//         <div style={divColor}>
//             <h1 style={heading}>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
//         </div>
//     </>
    
//     ,document.getElementById('root')
// );
