import { Route, Routes } from "react-router-dom";
import NavBar from "../layout/NavBar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import { Blog } from "./Blog/Blog";
import Carousel from "./Home/Carousel";
import { Footer } from "../layout/Footer";
import { Login } from "./login/login";
import { Loginn } from "./login/loginn";
import { ProductDetail } from "./Product Page/ProductDetail";
function HomeBig() {
    return (
        <>
            <NavBar />
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Loginn" element={<Loginn />}/>
                <Route path="/ProductDetail" element={<ProductDetail />}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default HomeBig;
