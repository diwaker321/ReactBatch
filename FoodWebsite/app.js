import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/Component/Heading";
import Body from "./src/Component/Body";
// import Footer from "./src/Component/Footer";



const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      {/* <Footer /> */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);