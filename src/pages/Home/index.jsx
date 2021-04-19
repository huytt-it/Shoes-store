import React, { useEffect } from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import Banner from '../../components/Banner';
import Service from '../../components/Service';
import Shopify from '../../components/Shopify';
import ProductGallery from '../../components/ProductGallery';
import Testimonial from '../../components/Testimonial';
import Blog from '../../components/Blog';
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/action/productAction";
import Footer from "../../components/Footer";
export default function Home() {
  const dispatch = useDispatch();

  return (
   <div>
     <Header />
     <Carousel />
     <Service/>
     <Banner/>
     <Shopify/>
     <ProductGallery/>
     <Testimonial/>
     <Blog/>
     <Footer/>
   </div>
  );
}
