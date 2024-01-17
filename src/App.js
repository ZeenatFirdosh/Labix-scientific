import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import FeaturesProducts from "./components/featuresProducts/FeaturesProducts";
import PopularProducts from "./components/popularProducts/PopularProducts";
import ProductManual from "./components/productManual/ProductManual";
import NewProducts from "./components/NewProducts/NewProducts";
import OurBlogs from "./components/OurBlogs/OurBlogs";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero/>
      <Category/>
      <FeaturesProducts/>
      <PopularProducts/>
      <ProductManual/>
      <NewProducts/>
      <OurBlogs/>
      <CustomerReview/>
      <Subscribe/>
      <Footer />
    </>
  );
}

export default App;
