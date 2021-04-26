import './App.css';
import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {HomePage} from "./components/Header";
import {Footer} from "./components/Footer";
import {ContentOne} from "./components/Content";
import {About} from "./components/About";
import {RegPage} from "./components/RegPage";
import {} from "./style.sass"
import {} from "./style.sass"
import {UserArea} from "./components/PersonalAreaUser";
import {Review} from "./components/Review";
import {Contact} from "./components/Contact";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            lastname:"",
            email:"",
        }
    }

    saveUser=(data)=>{
        this.setState(
            {
                name: data.name,
                lastname:data.lastname,
                email:data.email,
            }
        )
        localStorage.setItem("user", JSON.stringify(data))
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState(
                user
            )
        }
    }

    render() {
      return (
          <div className="App">
              <BrowserRouter>
                  <HomePage/>
                  <Route exact path="/" render={(props)=><ContentOne {...props}/>}/>
                  <Route exact path="/" render={(props)=><About {...props}/>}/>
                  <Route  path="/reg-page" render={(props)=><RegPage {...props} saveUser={this.saveUser}/>}/>
                  <Route path="/user-area" render={(props)=><UserArea {...props} user={this.state.user}/>}/>
                  <Route path="/review" render={(props)=><Review {...props}/>}/>
                  <Route path="/contact" render={(props)=><Contact {...props}/>}/>
                  <Footer/>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
