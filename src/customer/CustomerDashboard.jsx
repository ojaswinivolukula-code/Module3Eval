import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import { useContext } from "react";
function CustomerDashboard() {
    const {restaurants}=useContext(RestaurantContext)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,24",
        gap: "20",
      }}
    >
      {restaurants.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </div>
  );
}
export default CustomerDashboard;
