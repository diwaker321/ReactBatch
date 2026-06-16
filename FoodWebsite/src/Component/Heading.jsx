import { IMG_URL } from "../Utils/Constant";
const Heading = () => {
  return (
    <div>
      <div className="leftpart">
        <img
          src={IMG_URL}
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
export default Heading