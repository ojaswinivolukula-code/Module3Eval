import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { restaurants, deleteRestaurant } = useContext(RestaurantContext);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("admin/add")}>Add Restaurant</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,250px)",
          gap: "20",
        }}
      >
        {restaurants.map((r) => (
          <RestaurantCard
            key={r.restaurantID}
            data={r}
            isAdmin
            onDelete={() => deleteRestaurant(r.restaurantID)}
            onUpdate={() => navigate(`/admin/update/${r.restaurantID}`)}
          />
        ))}
      </div>
    </div>
  );
}
export default AdminDashboard;
