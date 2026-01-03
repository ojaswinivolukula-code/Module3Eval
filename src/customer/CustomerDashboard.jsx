import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
function CustomerDashboard() {
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
