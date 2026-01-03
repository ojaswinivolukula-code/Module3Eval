import { useNavigate, useParams } from "react-router-dom";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useEffect, useState } from "react";

function UpdateRestaurant() {
  const { id } = useParams();
  const { restaurant, updateRestaurant } = useContext(RestaurantContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(restaurants.find((r) => r.restaurantID == Number(id)));
  }, [id, restaurants]);
  if (!data) return null;
  return (
    <div style={{ width: "500px", margin: "40px" }}>
      <input
        value={data.restaurantName}
        onChange={(e) => setData({ ...data, restaurantName: e.target.value })}
      />
      <button
        onClick={() => {
          updateRestaurant(data);
          navigate("/admin/dashboard");
        }}
      >
        Update
      </button>
    </div>
  );
}
export default UpdateRestaurant;
