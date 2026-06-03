import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return (
    <div>
      <div className="leftpart">
        <img
          src="https://png.pngtree.com/template/20190625/ourmid/pngtree-fresh-food-logo-image_219828.jpg"
          alt=""
        />
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us </li>
            <li>Cart items</li>
            <li>Login</li>
          </ul>
        </div>
      </div>

      <hr />
    </div>
  );
};

const FoodCard = ({fooddetails}) => {
  console.log('fooddetails: ', fooddetails);
  return (
    <div className="MainFoodCard">
      <div className="imagecard">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uj68ybtfwbydewraxzhm"
          alt=""
        />
      </div>
      <div className="foodDetails">
        <p>{fooddetails.name}</p>
        <p>{fooddetails.rating}</p>
      </div>
    </div>
  );
};

const resData = [
  {
    id:"1",
  name:"mahawar bakers",
  rating:"5.5",
  image:"",
  foodname:"aaloo partha",
  category:"veg"
},
  {
    id:"2",
  name:"mahawar bakers",
  rating:"6.5",
  image:"",
  foodname:"aaloo partha",
  category:"veg"
},  {
  id:'3',
  name:"mahawar diwaker",
  rating:"4.5",
  image:"",
  foodname:"aaloo partha",
  category:"veg"
},
]
console.log(resData);


// const FoodCard = ({image,rating,name}) => {
//   // console.log('props: ', props);
//   // const {image,rating,name} = props // object destructure
//   return (
//     <div className="MainFoodCard">
//       <div className="imagecard">
//         <img
//           src={image}
//           alt=""
//         />
//       </div>
//       <div className="foodDetails">
//         <p>{name}</p>
//         <p>{rating}</p>
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body_section">
//         <div className="searchbarSection">
//           <input type="search"  placeholder="Search Your Food" name="" id="" />
//         </div>
//         <div className="foodContainer">
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>
//           <FoodCard/>  

//         </div>
//     </div>
//   );
// };

const Body = () => {
  return (
    <div className="body_section">
    <div className="searchbarsection">
      <input type="search"  placeholder="enter your food"/>
    </div>
    <div className="foodcontainer">
    {resData?.map((res)=>{
      return (
        <div key={res?.id}>
        <FoodCard fooddetails={res}/>
        </div>
      )
    })}
      {/* <FoodCard rating={"4.4"} name={"aaloo paratha"} image = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/22/d9a9d43d-6b18-495b-ac0e-21849c0b1d25_99573a4a-9ab2-4699-bda7-0c6e6c386593.JPG"} /> */}
      {/* <FoodCard rating={"4.8"} name={"Tea"} image = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uj68ybtfwbydewraxzhm"}/> */}

    </div>
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
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

//food website

// -header
//-logo and -navdetails
//body
    //-Searchbar
    //-foodContainer
        //-food cards
//footer
