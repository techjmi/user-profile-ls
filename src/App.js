import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/Home';
import Header from './component/Header';
import Login from './page/Login';
import Registration from './page/Registration';
import ProfileDetails from './page/ProfileDetails';
import Products from './assignment/Products';
function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Registration />} />
    <Route path='/details' element={<ProfileDetails />} />
   </Routes>
   {/* <Products /> */}

   </BrowserRouter>
  );
}

export default App;
