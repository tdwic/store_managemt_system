import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Loging from './Components/Authenticaton/Loging';
import SignUp from './Components/Authenticaton/SignUp';
import UserProfile from './Components/Authenticaton/UserProfile';
import WishList from './Components/WishList/WishList';

class App extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
  return (
    <Router>
    <div className="App">
        <div className="wrapper d-flex align-items-stretch">
            <nav id="sidebar" className="active">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <h1><a href="index.html" className="logo">E-Shop</a></h1>
                    <ul className="list-unstyled components mb-5">
                        <li className="active">
                            <a href={'/Home'}><span className="fa fa-home mr-3"></span> Home</a>
                        </li>
                        <li>
                            <a href={'/About'}><span className="fa fa-user mr-3"></span> About</a>
                        </li>
                        <li>
                            <a href={'/UserProfile'}><span className="fa fa-briefcase mr-3"></span> Portfolio</a>
                        </li>
                        <li>
                            <a href={'WishList'}><span className="fa fa-sticky-note mr-3"></span> WishList</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa fa-paper-plane mr-3"></span> Contact</a>
                        </li>
                    </ul>

                    <div className="mb-5">
                        <h3 className="h6 mb-3">Subscribe for newsletter</h3>
                        <form action="#" className="subscribe-form">
                            <div className="form-group d-flex">
                                <div className="icon"><span className="icon-paper-plane"></span></div>
                                <input type="text" className="form-control" placeholder="Enter Email Address" />
                            </div>
                        </form>
                    </div>

                    <div className="footer">
                        <p>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | Made <i className="icon-heart"
                                                                                aria-hidden="true"></i> by <a
                                href="https://teamBravo.com" target="_blank">Colorlib.com</a>
                            </p>
                    </div>

                </div>
            </nav>


            <div id="content" className="p-4 p-md-5 pt-5">

                <Switch>

                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/UserProfile' component={UserProfile} />
                    <Route exact path='/WishList' component={WishList} />
                    <Route exact path='/Loging' component={Loging} />
                    <Route exact path='/SignUp' component={SignUp} />

                </Switch>
            {/*    <h2 className="mb-4">Sidebar #03</h2>*/}
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
            {/*    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
            {/*    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
            {/*    culpa qui officia deserunt mollit anim id est laborum.</p>*/}
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
            {/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
            {/*    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
            {/*    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
            {/*    culpa qui officia deserunt mollit anim id est laborum.</p>*/}
        </div>
        </div>
    </div>
    </Router>
  );
}
}
export default App;
