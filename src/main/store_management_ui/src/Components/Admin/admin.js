import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Category from "./Category";
import StoreManager from "./StoreManager";
import AdminDashboard from "./AdminDashboard";

class Admin extends Component {

    render() {
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
                                    <li className='sidebarLi active'>
                                        <Link to = {'/AdminDashboard'} className="nav-link">Dashboard</Link>
                                    </li>
                                    <li className='sidebarLi'>
                                        <Link to={'/Category'} className="nav-link">Add Category</Link>
                                    </li>
                                    <li className='sidebarLi'>
                                        <Link to={'/StoreManager'} className="nav-link">Add Store Manager</Link>
                                    </li>
                                    <li className='sidebarLi'>
                                        <a href="#">Logout</a>
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
                                        All rights reserved | Made <i className="icon-heart" aria-hidden="true"></i> by <a href="https://teamBravo.com" target="_blank">Team Bravo</a>
                                    </p>
                                </div>

                            </div>
                        </nav>


                        <div id="content" className="p-4 p-md-3 pt-5 ml-5" >
                            <Switch>
                                <Route exact path='/AdminDashboard' component={AdminDashboard}/>
                                <Route exact path='/Category' component={Category}/>
                                <Route exact path='/StoreManager' component={StoreManager}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
            // <Router>
            //     <div className="App">
            //         {/*!*side nav bar**/}
            //         <div className="wrapper d-flex align-items-stretch">
            //             <nav id="sidebar">
            //                 <div className="p-4 pt-5">
            //                     <a href="#" className="img logo rounded-circle mb-5"
            //                        style={{backgroundImage: "url(Images/user.png);"}}></a>
            //                     <ul className="list-unstyled components mb-5">
            //                         <li className='sidebarLi active'>
            //                             <Link to = {'/AdminDashboard'} className="nav-link">Dashboard</Link>
            //                         </li>
            //                         <li className='sidebarLi'>
            //                             <Link to={'/Category'} className="nav-link">Add Category</Link>
            //                         </li>
            //                         <li className='sidebarLi'>
            //                             <Link to={'/StoreManager'} className="nav-link">Add Store Manager</Link>
            //                         </li>
            //                         <li className='sidebarLi'>
            //                             <a href="#">Logout</a>
            //                         </li>
            //                     </ul>
            //
            //                     <div className="footer">
            //                         <p>
            //                             Copyright &copy;
            //                             <script>document.write(new Date().getFullYear());</script>
            //                             All rights reserved | Made <i className="icon-heart" aria-hidden="true"></i> by team <a
            //                             href="#" target="_blank">Bravo</a>
            //                         </p>
            //                     </div>
            //
            //                 </div>
            //             </nav>
            //
            //
            //             <div id="content" className="p-4 p-md-3">
            //                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //                     <div className="container-fluid">
            //                         <button type="button" id="sidebarCollapse" className="btn btn-primary">
            //                             <i className="fa fa-bars"></i>
            //                             <span className="sr-only">Toggle Menu</span>
            //                         </button>
            //                     </div>
            //                 </nav>
            //
            //                 <Switch>
            //                     <Route exact path='/AdminDashboard' component={AdminDashboard}/>
            //                     <Route exact path='/Category' component={Category}/>
            //                     <Route exact path='/StoreManager' component={StoreManager}/>
            //                     {/*<Route exact path='/UserProfile' component={UserProfile}/>*/}
            //
            //
            //                 </Switch>
            //             </div>
            //         </div>
            //     </div>
            // </Router>
        );
    }
}

export default Admin;
