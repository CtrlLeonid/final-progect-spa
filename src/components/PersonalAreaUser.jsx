import React from "react";
import {} from "../style.css"

export class UserArea extends React.Component {

    render() {
        return(
            <section className="userbacground" >
                <div className="container userarea">
                    {/*<div className="sidenav container">
                        <a href="#">Сведения</a>
                        <p></p>
                        <a href="#">Оставить <p></p> комментарий</a>
                        <p></p>
                        <a href="#">Заметки</a>
                        <p></p>
                        <a href="#">Контакты</a>
                    </div>*/}
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="textcolor"><h4>Имя: </h4></p>
                                <p className="textcolor"><h4>Фамилия: </h4></p>
                            </div>
                            <div className="col-sm-4">
                                <p className="textcolor"><h4>Изменить пароль</h4></p>
                                <p className="textcolor"><h4>Изменить пароль тут input</h4></p>
                                <a href="#" className="get-started-btn">Подтвердить</a>
                            </div>
                            <div className="col-sm-4">
                                <div className="ava">
                                    <img className="ava" src="assets/img/ava.jpg" alt="Аватарка"/>
                                </div>
                            </div>

                        </div>

                        <div className="container userblog">
                            <h2>Оставить отзыв</h2>
                            <p></p>
                            <div className="row">
                                <div className="col-sm">
                                    <p className="get-started-btn"><input type="file" name="f"/>
                                        </p>
                                    <p className="get-started-btn"><input type="file" name="f"/>
                                        </p>
                                    <p className="get-started-btn"><input type="file" name="f"/>
                                        </p>
                                </div>
                                <div className="col-sm">
                                    <div className="col-75">
                                        <textarea className="review" name="subject" placeholder="Написать нечто.."/>
                                    </div>
                                </div>
                                <div className="col-sm my-auto">
                                    <input className="get-started-btn" type="submit" value="Отправить"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )

    }
}