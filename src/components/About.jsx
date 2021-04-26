import React from "react";

export class About extends React.Component {
    render() {
        return(
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right"
                             data-aos-delay="100">
                            <h2>Тут нужно рассказать о деятельности и о том каие тут хорошие люди работают.</h2>
                            <p className="fst-italic"><h5>
                                О том что они трудятся на благо драгоценного средства передвижения клиента.
                            </h5></p>
                            <ul>
                                <li><i className="ri-check-double-line"></i><h6> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </h6></li>
                                <li><i className="ri-check-double-line"></i><h6> Duis aute irure dolor in reprehenderit in
                                    voluptate velit.
                                </h6></li>
                                <li><i className="ri-check-double-line"></i><h6> Ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </h6></li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}