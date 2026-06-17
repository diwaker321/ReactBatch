import { useEffect, useState } from "react";
import { resData, meals } from "../Utils/Constant";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
const Body = () => {
  let [data, setdata] = useState([]);
  // let [searchvalue, setSearchValue] = useState("");
  let [ searchinput , setSearchInput] = useState("")
  let [filterdata , setfilterdata] = useState([])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log("searchvalue: ", searchvalue);
  };

  const handleSearch = ()=>{
    let val = data.filter((res)=> res.strMeal.toLowerCase().includes(searchvalue.toLowerCase()))
    console.log('val: ', val);
    setdata(val)

  }

  const getdata = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
      );
      const data = await res.json();
      // console.log('data: ', data.meals);
      setdata(data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  // const getSearchdata = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchvalue}`,
  //     );

  //     const data = await res.json();
  //     // console.log('data: ', data.meals);
  //     console.log("data: ", data);
  //     setdata(data.meals || []);
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   if (searchvalue.trim() === "") {
  //     getdata();
  //   }
  // }, [searchvalue]);

  useEffect(() => {
    getdata();
  }, []);

  const handleClick = ()=>{
    console.log('clicked');
    
    
  }
  const getSearchData = async()=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchinput}`)
      const data = await res.json()
      console.log('data: ', data?.meals);
      setdata(data?.meals)
    }catch(err){
      console.log('err: ', err);
    }

  }

  const handleSearchchange = (event)=>{
    setSearchInput(event.target.value)
    console.log('searchinput: ', searchinput);
    // getSearchData()
  }

  useEffect(()=>{
    console.log(searchinput.length);
    if(searchinput.length===0){
      getdata()
    }else{
      getSearchData()
    }
  },[searchinput])

  if (data?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body_section">
      <div className="searchbarsection">
        {/* <input
          type="search"
          placeholder="enter your food"
          value={searchvalue}
          onChange={handleSearchChange}
        /> */}

        {/* <button onClick={handleSearch}>Search</button> */}

        <input type="search" placeholder="Enter your dish" value={searchinput} onChange={handleSearchchange} />
        <button onClick={handleClick}>Search</button>
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
