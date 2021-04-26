import React from 'react';
import {Link} from "react-router-dom";

export class Footer extends React.Component {
    render() {
        return(
            <footer id="footer" className="footerheight">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Gp<span>.</span></h3>
                                    <p>
                                        Москва <br />Фармацевтический проезд, 3<br /><strong>Phone:</strong>Тут будет телефон<br /><strong>Email:</strong> Тут будет Email.com
                                    </p>
                                    <div className="social-links mt-3">
                                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Наши партнеры</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Моторист</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Маляр</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Арматурщик</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Запю части</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Рассылка новостей</h4>
                                <p>Сдесь ВЫ можите подписаться на уведомление об акциях</p>
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder="Введите email" /><input type="submit" value="Отправить"/>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div>
            </footer>
            )
        }
    }



