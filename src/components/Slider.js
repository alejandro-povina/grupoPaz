
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ItemLogo from "./ItemLogo";
import { Container } from "react-bootstrap";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import campo from "../img/campo.jpeg"
import transporteBB from "../img/transporteBB.JPG"
import estibaBigBag from "../img/estibaBigBag.JPG"
import grupoPaz from "../img/grupopaz.png"
import grupo from "../img/grupo.png"
import paz from "../img/paz.png"
import ItemBotones from "./ItemBotones";


const Slider = ()=>{
    // install Swiper modules
    SwiperCore.use([Autoplay,Pagination,Navigation]);
  return (
    <>
    <Swiper spaceBetween={0} centeredSlides={true}  speed={1500} autoplay={{
  "delay": 5000,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true}  className="mySwiper">
  <Container>
  <SwiperSlide><img src={campo} alt="" /></SwiperSlide>
  <SwiperSlide><img src={transporteBB} alt="" /></SwiperSlide>
  <SwiperSlide><img src={estibaBigBag} alt="" /></SwiperSlide>
  <SwiperSlide><img src={campo} alt="" /></SwiperSlide>
  <SwiperSlide><img src={transporteBB} alt="" /></SwiperSlide>
  <SwiperSlide><img src={campo} alt="" /></SwiperSlide>
  <SwiperSlide><img src={transporteBB} alt="" /></SwiperSlide>
  <SwiperSlide><img src={campo} alt="" /></SwiperSlide>
  <SwiperSlide><img src={transporteBB} alt="" /></SwiperSlide>
  </Container>
  </Swiper>
    </>
  )
}
export default Slider;