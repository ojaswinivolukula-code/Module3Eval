import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import AddRestaurant from "./pages/admin/AddRestaurant";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UpdateRestaurant from "./pages/admin/UpdateRestaurant";
import CustomerDashboard from "./customer/CustomerDashboard";
import RestaurantCard from "./components/RestaurantCard";
import {
  RestaurantContext,
  RestaurantProvider,
} from "./context/RestaurantContext";
function App() {
  return (
    <RestaurantProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/addrestaurant"
            element={
              <ProtectedRoute role="admin">
                <AddRestaurant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/updaterestaurant"
            element={
              <ProtectedRoute role="admin">
                <UpdateRestaurant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer/dashboard"
            element={
              <ProtectedRoute role="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </RestaurantProvider>
  );
}
export default App;
