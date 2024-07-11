import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Layout from "./Pages/Layout";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Components/Contactus";
import ProductDetail from "./Pages/ItemDetails";
import ItemDetailForRent from "./Pages/ItemDetails";
import CategoryItems from "./Pages/CategoryItems";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/item/id"
          element={
            <ItemDetailForRent
              item={{
                image: "sdsd",
                title: "zxc",
                description: "sdsd",
                price: 12,
              }}
            />
          }
        />
        <Route path="/category/items" element={<CategoryItems />} />
        <Route path="/dashboard" element={<UserDashboard />} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    )
  );

  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

  return (
    <>
      <router />
    </>
  );
}

export default App;
