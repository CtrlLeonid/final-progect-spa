import React from "react";
import {Link} from "react-router-dom";

export class ContentOne extends React.Component {
    render() {
        return(
        <div>
            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container" data-aos="fade-up">

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                        <div className="col-xl-6 col-lg-8">
                            <h1>Работы по авто-электрике любой сложности<span>.</span></h1>
                            <h2>We are team of talented digital marketers</h2>
                        </div>
                    </div>

                    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-store-line"></i>
                                <h3><Link to="">Lorem Ipsum</Link></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-bar-chart-box-line"></i>
                                <h3><Link to="">Dolor Sitema</Link></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-calendar-todo-line"></i>
                                <h3><Link to="">Sedare Perspiciatis</Link></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-paint-brush-line"></i>
                                <h3><Link to="">Magni Dolores</Link></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-database-2-line"></i>
                                <h3><Link to="">Nemos Enimade</Link></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

        )
    }
}