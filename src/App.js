import "./Components/Global-Css/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/HeaderBar/Header";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/FooterBar/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign-up/Sign_up";
import Aside from "./Components/AsideBar/Aside";
import About from "./Components/AboutBar/About";
import Section_one from "./Components/Section_one_main/Section_one";
import Categories from "./Components/Categories/Categories";
import SectionFour from "./Components/Section_four_main/SectionFour";
import NewArrival from "./Components/NewArrivalBar/NewArrival";
import BestProducts from "./Components/Best_product/BestProduct";
import ExploreProduct from "./Components/Explore_product/ExploreProduct";
import Contact from "./Components/Contact/Contact";
import Product_page from "./Components/Product_page/Product_page";
import UserHome from "./Components/UserHome/UserHome";                                                                
import "./i18n";

function AppContent() {
  const location = useLocation();
  const isUserHome = location.pathname === "/UserHome";
  
  return (
    <>
    
      {!isUserHome && <Header />}
      {!isUserHome && <Nav />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ViewAllProduct" element={<Product_page />} />
        <Route path="/UserHome" element={<UserHome />} /> 
      </Routes>

      {!isUserHome && location.pathname !== "/About" &&
        location.pathname !== "/Contact" &&
        location.pathname !== "/Login" &&
        location.pathname !== "/SignUp" &&
        location.pathname !== "/ViewAllProduct" && (
          <>
            <Aside />
            <Section_one />
            <Categories />
            <BestProducts />
            <SectionFour />
            <ExploreProduct />
            <NewArrival />
          </>
        )}
        
      {!isUserHome && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
