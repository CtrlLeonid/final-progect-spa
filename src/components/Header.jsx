import React from "react";
import {Link} from "react-router-dom";

export class HomePage extends React.Component{
    render() {
        return(
            <header id="header" className="fixed-top header-inner-pages">
                <div className="container-sm d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0"><a href="index.html">Gp<span>.</span></a></h1>

                    {/*<a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>*/}
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto " href="/">Главная</a></li>
                            <li><a className="nav-link scrollto" href="#services">Фото</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Отзывы</a></li>
                            {/*<li><a className="nav-link scrollto" href="#team">Team</a></li>*/}
                            <li className="dropdown"><a href="#"><span>Виды работ</span> <i
                                className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Установка сигнализаций</a></li>
                                    <li><a href="#">Установка имобилайзеров</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li className="dropdown"><a href="#"><span>Drop Down</span> <i
                                        className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#about">О нас</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Контакты</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>


                    <a href="/RegPage" className="get-started-btn ">ВХОД</a>

                </div>
                <main id="main"/>
            </header>


        )
    }
}