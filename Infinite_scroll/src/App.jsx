import Body from "./Component/Body";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./Component/Orders";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
