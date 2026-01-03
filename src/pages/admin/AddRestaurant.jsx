import { useRef, useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

function AddRestaurant() {
  const { addRestaurant } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const name = useRef();
  const address = useRef();
  const type = useRef();
  const parking = useRef();
  const img = useRef();

  const submit = (e) => {
    e.preventDefault();
    addRestaurant({
      restaurantID: Date.now(),
      restaurantName: name.current.value,
      address: address.current.value,
      type: type.current.value,
    });
    navigate("/admin/dashboard");
  };

  return (
    <form
      onSubmit={submit}
      style={{ width: "400", margin: "40px", display: "flex", gap: "20" }}
    >
      <input ref={name} placeholder="Name" required />
      <input ref={address} placeholder="Address" required />
      <select ref={type} required>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <label>
        <input type="checkbox" ref={parking} />
        Parking
      </label>
      <input ref={image} placeholder="Image URL" />
      <button>Add</button>
    </form>
  );
}
export default AddRestaurant;
