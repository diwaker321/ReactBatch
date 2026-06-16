import { useEffect, useState } from "react";
import { resData, meals } from "../Utils/Constant";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
const Body = () => {
  let [data, setdata] = useState([]);
  // let [data, setdata] = useState([]);
  

  // if(data?.length==0){
  //   return <Shimmer/>
  // }




  const getdata = async()=>{
    try{
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      const data = await res.json()
      // console.log('data: ', data.meals);
      setdata(data.meals)
      console.log('data: ', data.meals);

    }catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    getdata()
  },[])

  console.log('data.length: ', data.length);

  if(data.length===0){
    return <Shimmer/>
  }
  

  return (
    <div className="body_section">
      <div className="searchbarsection">
        <input type="search" placeholder="enter your food" />
      </div>
      <div className="foodContainer">
        {data?.map((res) => {
          return (
            <div className="foodcard" key={res?.idMeal}>
              <FoodCard fooddetails={res} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
