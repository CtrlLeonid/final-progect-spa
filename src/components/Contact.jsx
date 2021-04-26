import React from "react";

export class Contact extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="contactinfo">
                <div className="container">
                    <div>
                    <iframe data-aos="zoom-in" className="yamap"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A537d3c3af173aa8829acf3ee04d3dd2e131e7fa8aae66bd3a1b5c25a8c86f7c7&amp;source=constructor"
                        width="100%" height="400" frameBorder="0"></iframe>
                    </div>
                    <div className="row contactinfo2">
                        <div className="col-sm-6" data-aos="fade-up">
                            <img src="assets/img/ser.jpg" className="d-block w-100" alt="Тут должно быть фото"/>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up">
                            <h3 className="text-center mb-3 textlight">Форма обратной связи</h3>
                            <form onSubmit="sendMail(this); return false;">
                                <div className="my-3">
                                    <input name="name" type="text" placeholder="Имя" className="form-control"/>
                                </div>
                                <div className="my-3">
                                    <input name="email" type="email" placeholder="E-mail" className="form-control"/>
                                </div>
                                <div className="my-3">
                                    <textarea name="text" placeholder="Ваш текст" className="form-control"></textarea>
                                </div>
                                <input type="submit" className="form-control btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <h3 className="mb-3 text-center textlight">Контакты</h3>
                            <div className="col-sm-4">
                                <h5 className="textlight"><i className="fas fa-map-marker-alt "></i>Адрес:</h5>
                                <p className="textlight">г.Москва, Фармацевтический проезд, 3</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="textlight"><i className="fas fa-phone-volume"></i>Телефон:</h5>
                                <p className="textlight">Тут будет телефон</p>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="textlight"><i className="fas fa-at"></i>E-mail:</h5>
                                <p className="textlight">Тут будет email</p>
                            </div>
                            <div className="col-sm-12">
                                <h5 className="textlight"><i className="far fa-clock"></i>Время работы:</h5>
                                <p className="textlight">Понедельник - Воскресенье - с 9:00 до 21:00</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}