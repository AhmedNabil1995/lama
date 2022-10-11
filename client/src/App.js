import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import  ProductsList  from "./pages/ProductsList";
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {

  let user = useSelector(state=>state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={!user?<Login />:<Home />} />
          <Route path="/register" element={!user?<Register />:<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
