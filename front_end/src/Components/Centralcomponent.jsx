
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Centralcomponent.css"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

export default function Centralcomponent() {
        return (
                <>
                        <Swiper
                                pagination={{
                                        type: "fraction",
                                }}
                                autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                        >
                                <SwiperSlide>

                                        <div id="cntrl_button">
                                                <div id="cntrl_button_hei2"></div>

                                                <p className="container" id="alighn_p_tag3">Hospital Token
                                                        <br />
                                                        <span className="container">
                                                                Booking Centre
                                                        </span>
                                                </p>

                                                <div id="cntrl_button_hei"></div>
                                                <a href="/login">
                                                        <button id="btn">Book Your Token</button>
                                                </a>

                                        </div>
                                </SwiperSlide>
                                <SwiperSlide>      <div id="cntrl_button2">
                                        <div id="cntrl_button_hei2"></div>

                                        <p className="container" id="alighn_p_tag1">Hospital Token
                                                <br />
                                                <span className="container">
                                                        Booking Centre
                                                </span>
                                        </p>

                                        <div id="cntrl_button_hei"></div>

                                        <a href="/login">
                                                <button id="btn">Book Your Token</button>
                                        </a>
                                </div></SwiperSlide>
                                <SwiperSlide>      <div id="cntrl_button3">
                                        <div id="cntrl_button_hei2"></div>

                                        <p className="container" id="alighn_p_tag">Hospital Token
                                                <br />
                                                <span className="container">
                                                        Booking Centre
                                                </span>
                                        </p>

                                        <div id="cntrl_button_hei"></div>

                                        <a href="/login">
                                                <button id="btn">Book Your Token</button>
                                        </a>
                                </div></SwiperSlide>
                                <SwiperSlide>


                                        <div id="cntrl_button4">
                                                <div id="cntrl_button_hei2"></div>

                                                <p className="container" id="alighn_p_tag">Hospital Token
                                                        <br />
                                                        <span className="container">
                                                                Booking Centre
                                                        </span>
                                                </p>

                                                <div id="cntrl_button_hei"></div>

                                                <a href="/login">
                                                        <button id="btn">Book Your Token</button>
                                                </a>
                                        </div></SwiperSlide>

                        </Swiper>




                </>


        )
}
