// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/Home/ProductDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PageEmpty from './Pages/PageEmpty/PageEmpty';
import RequierAuth from './Pages/RequierAuth/RequierAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dhashboard from './Pages/Dhashboard/Dhashboard';
import MyProfile from './Pages/Dhashboard/MyProfile';
import MyOrder from './Pages/Dhashboard/MyOrder';
import AddReview from './Pages/Dhashboard/AddReview';
import MyProtfolio from './Pages/MyProtfolio/MyProtfolio';
import Payment from './Pages/Payment/Payment';
import Review from './Pages/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio></MyProtfolio>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/*' element={<PageEmpty></PageEmpty>}></Route>
        <Route path='/product/:id' element={
          <RequierAuth>
            <ProductDetails></ProductDetails>
          </RequierAuth>
        }></Route>
        <Route path='/dhashboard' element={
          <RequierAuth>
            <Dhashboard></Dhashboard>
          </RequierAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
