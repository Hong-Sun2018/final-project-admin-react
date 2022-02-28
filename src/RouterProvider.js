import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';


const RouterProvider = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-product' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default RouterProvider;