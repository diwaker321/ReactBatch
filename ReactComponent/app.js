import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const Title = () => {
//   return <p>this is title</p>;
// };

// const Heading = () => {
//   return(

//   <div>
//     <h1>hello world</h1>
//     <Title/>
//   </div>
//   )
// };

const head = <h1>hello world</h1> //single line jsx

const multihead = (
  <div>
  <h1>hello</h1>
  {100+200}
  {head}
  {console.log("hello world")}
  <h2>world</h2>
  </div>
  
); // multi jsx code 

const Sum = ()=>{
  const a =10;
  const b =20;

  return (
    <>
    <h1 className="head">{a+b}</h1>
    {/* {multihead} */}
    </>
  )

} // component functional

const Head = ()=>{
  return(
    <>
      {/* {Sum()} */}
      {/* {<Sum/>} */}
      {/* {<Sum></Sum>} */}

    </>
  )
}

// root.render(multihead)
// root.render(<Sum/>)
root.render(<Head/>)







// const title = ( 
//     <>
//    <p>this is title</p>
//    <h1>this is heading</h1>
//    </>
// )

// let score = 100;

// const Heading = () => {
//   return(

//   <div>
//   <h1>{score}</h1>
//     <h1>hello world</h1>
//     {title}
//   </div>
//   )
// };

// root.render(<Heading />);
