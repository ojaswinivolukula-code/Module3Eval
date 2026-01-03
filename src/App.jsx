import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute"
import AddRestaurant from "./components/RestaurantCard"
function App(){

  return(
<BrowserRouter>
<Routes>

  <Route  path="/" element={<Login/>}/>
</Routes>

</BrowserRouter>

  )
}
export default App