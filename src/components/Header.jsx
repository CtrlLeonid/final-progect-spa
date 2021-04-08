import React from "react";
import {Link} from "react-router-dom";

export class HomePage extends React.Component{
    render() {
        return(
            <header id="header" className="fixed-top header-inner-pages">
                <div className="container d-flex align-items-center justify-content-lg-between">
                    <h1 className="logo me-auto me-lg-0"><Link to="/">Gp<span>.</span></Link></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">

                        <ul>
                            <li><Link className="nav-link scrollto " to="#hero">Главная</Link></li>
                            <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto " to="#portfolio">Portfolio</Link></li>
                            <li><Link className="nav-link scrollto" to="#team">Team</Link></li>
                            <li className="dropdown"><Link to="#"><span>Акции</span> <i
                                className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i
                                        className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Drop Down 1</Link></li>
                                    <li><Link to="#">Drop Down 2</Link></li>
                                    <li><Link to="#">Drop Down 3</Link></li>
                                    <li><Link to="#">Drop Down 4</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto" to="#about">О нас</Link></li>
                            <li><Link className="nav-link scrollto" to="#contact">Контакты</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <Link to="#about" className="get-started-btn scrollto">Get Started</Link>

                </div>
            </header>
        )
    }
}