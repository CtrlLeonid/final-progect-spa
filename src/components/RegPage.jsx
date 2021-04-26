import React from 'react';

export class RegPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                lastname: '',
                email: '',
                pass: ''
            },
            info: ''
        };
    }

    componentDidMount() {
        const signupButton = document.getElementById('signup-button'),
            loginButton = document.getElementById('login-button'),
            userForms = document.getElementById('user_options-forms');

        signupButton.addEventListener(
            'click',
            () => {
                userForms.classList.remove('bounceRight');
                userForms.classList.add('bounceLeft');
            },
            false
        );

        loginButton.addEventListener(
            'click',
            () => {
                userForms.classList.remove('bounceLeft');
                userForms.classList.add('bounceRight');
            },
            false
        );
    }

    inputChangeHandler = (event) => {
        this.setState({
            info: ''
        });

        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
    };

    resetForms() {
        this.setState({
            form: {
                name: '',
                lastname: '',
                email: '',
                pass: ''
            }
        });
    }

    sendFormRegister = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.form.name);
        formData.append('email', this.state.form.email);
        formData.append('lastname', this.state.form.lastname);
        formData.append('pass', this.state.form.pass);
        fetch('php/handlerReg.php',{
            method: 'POST',
            /*headers: {                            //Заголовки для ощения с сервером
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },*/
            body: formData
        })
            .then(response=>response.json())
            .then(({ result }) => {
            if (result === 'success') {
                this.resetForms();
                this.setState({
                    info: 'Вы успешно зарегались'
                });
            } else {
                this.setState({
                    info: 'Такой чел уже найден'
                });
            }
        });
    };

    sendFormSignIn = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', this.state.form.email);
        formData.append('pass', this.state.form.pass);

        fetch('php/handlerAuth.php',{
            method: 'POST',
            /*headers: {                            //Заголовки для общения с сервером
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },*/
            body: formData
        })
            .then(response=>response.json())
            .then((response) => {
                if (response.result === 'success') {
                    console.log(response)
                    this.props.saveUser(response)
                    this.resetForms();
                    this.setState({
                        info: 'Вы успешно зашли'
                    });
                } else {
                    this.setState({
                        info: 'УПС 404'
                    });
                }
            });
        
    };

    render() {
        return (
            <section className='user'>
                <div className='user_options-container container'>
                    <div className='user_options-text'>
                        <div className='user_options-unregistered'>
                            <h2 className='user_unregistered-title'>У вас еще не аккаунта?</h2>
                            <p className='user_unregistered-text'>
                                Заполните форму регистрации для входа в личный кабинет.
                            </p>
                            <button className='user_unregistered-signup' id='signup-button'>
                                Зарегистрироваться
                            </button>
                        </div>

                        <div className='user_options-registered'>
                            <h2 className='user_registered-title'>У вас есть аккаунт?</h2>
                            <p className='user_registered-text'>
                                Если вы уже зарегистрированны введите данные тут.
                            </p>
                            <button className='user_registered-login' id='login-button'>
                                Вход
                            </button>
                        </div>
                    </div>

                    <div className='user_options-forms' id='user_options-forms'>
                        <div className='user_forms-login'>
                            <h2 className='forms_title'>{this.state.info ? this.state.info : 'окно входа'}</h2>
                            <form className='forms_form' onSubmit={this.sendFormSignIn}>
                                <fieldset className='forms_fieldset'>
                                    <div className='forms_field'>
                                        <input
                                            name='email'
                                            type='email'
                                            placeholder='Email'
                                            className='forms_field-input'
                                            value={this.state.form.email}
                                            onChange={this.inputChangeHandler}
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className='forms_field'>
                                        <input
                                            name='pass'
                                            type='password'
                                            placeholder='Password'
                                            className='forms_field-input'
                                            value={this.state.form.pass}
                                            onChange={this.inputChangeHandler}
                                            required
                                        />
                                    </div>
                                </fieldset>
                                <div className='forms_buttons'>
                                    <button type='button' className='forms_buttons-forgot'>
                                        Забыли пароль?
                                    </button>
                                    <input
                                        type='submit'
                                        value='ВХОД'
                                        className='forms_buttons-action'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='user_forms-signup'>
                            <h2 className='forms_title'>
                                {this.state.info ? this.state.info : 'окно реристрации'}
                            </h2>
                            <form className='forms_form' onSubmit={this.sendFormRegister} id='test'>
                                <fieldset className='forms_fieldset'>
                                    <div className='forms_field'>
                                        <input
                                            name='name'
                                            type='text'
                                            placeholder='Name'
                                            className='forms_field-input'
                                            value={this.state.form.name}
                                            onInput={this.inputChangeHandler}
                                            required
                                        />
                                    </div>
                                    <div className='forms_field'>
                                        <input
                                            name='lastname'
                                            type='text'
                                            placeholder='Last name'
                                            className='forms_field-input'
                                            value={this.state.form.lastname}
                                            onChange={this.inputChangeHandler}
                                            required
                                        />
                                    </div>
                                    <div className='forms_field'>
                                        <input
                                            name='email'
                                            type='email'
                                            placeholder='Email'
                                            className='forms_field-input'
                                            required
                                            value={this.state.form.email}
                                            onChange={this.inputChangeHandler}
                                        />
                                    </div>
                                    <div className='forms_field'>
                                        <input
                                            name='pass'
                                            type='password'
                                            placeholder='Password'
                                            className='forms_field-input'
                                            value={this.state.form.pass}
                                            onChange={this.inputChangeHandler}
                                            required
                                        />
                                    </div>
                                </fieldset>
                                <div className='forms_buttons'>
                                    <input
                                        type='submit'
                                        value='Регистрация'
                                        className='forms_buttons-action'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
