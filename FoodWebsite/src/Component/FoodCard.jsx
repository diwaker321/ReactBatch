const FoodCard = (res) => {
  // console.log('res: ', res.fooddetails);
  const {strMealThumb , strMeal , strCountry} = res?.fooddetails

  return (
<div className="food-card">
  <img src={strMealThumb} className="food-image" alt="" />

  <p className="food-name">
    {strMeal}
  </p>

</div>
  );
};

export default FoodCard