import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return (
    <div>
    <div className="leftpart"></div>
    <div className="rightpart"></div>
      <h1>this is a header</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <h1>Body</h1>
    </div>
  );
};


const Footer = () => {
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body/>
      <Footer/>
      {/* {Footer()} */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);






























//food website 

// -header 
    //-logo and -navdetails
//-Searchbar
//-foodContainer
  //-food cards
//footer