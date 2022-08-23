
import { Routes, Route } from "react-router-dom";
import Home from "./Page/client/home";
import AdminLayOut from "./Page/Admin/AdminLayout";
import ClientLayout from "./Page/layouts/client";
import ProductDetail from "./Page/client/product-detail";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Client */}
        <Route path="" element={<ClientLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/product-detail" element={<ProductDetail />} />
        </Route>
        {/* Admin */}
        <Route path="admin" element={<AdminLayOut />}></Route>

      </Routes>
    </div>
  );
}

export default App;
