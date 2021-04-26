import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

export class Review extends React.Component{

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="zoom-in">

                    <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                        <h3>Saul Goodman</h3>
                                            <hr/>
                                        <h4>Тут должен лежать отзыв</h4>
                                        <h8>Дата создания</h8>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}