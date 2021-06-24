/* eslint-disable no-undef */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import routes from './routes';
import {Switch} from 'react-router-dom';
import apiCaller from "./utils/apiCaller";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }
  componentDidMount(){
    var id = localStorage.getItem('user')
    if(id){
      apiCaller(`users/${id}`,'GET',null).then(res=>{
        this.setState({
           users: res.data
        })
    })
    }
}
  onLogOut = ()=>{
    localStorage.clear();
    this.setState({
      users: [],
      words: []
    })
    window.location.reload();
  }
  
  
  render() {
    var {users} = this.state;
    var id_user = users.id;
    var user_name = users.name;
    return (
      <div className="container">
        <Router>
          <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink activeClassName="bg-secondary color-white" exact className="mx-2 p-4" to="/">Quản lý công việc</NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                </div>
                <div className={id_user?'d-flex align-items-center': 'd-none'}>
                  <p>Xin chào {user_name}</p>
                  <button onClick={() =>this.onLogOut()} type="button" className="btn mx-2 btn-outline-primary">Đăng xuất</button>
                </div>

                <div className={id_user?'d-none': 'login d-flex'}>
                  <NavLink to="/login" className="btn btn-outline-primary mx-2">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-outline-danger mx-2">
                    SignUp
                  </NavLink>
                </div>
              </div>
            </nav>
            
            <div className="container">
              {this.showContent(routes)}
            </div>
          </div>
        </Router>
      </div>
    );
  }
  showContent = (routes)=>{
    var result = null;
    if(routes.length>0){
      result = routes.map((route,index)=>{
        return (<Route 
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />)
      })
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
