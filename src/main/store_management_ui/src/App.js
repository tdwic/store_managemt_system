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
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";

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
                            <Link to={'/Home'}><span className="fa fa-home mr-3"></span> Home</Link>
                        </li>
                        <li>
                            <Link to={'/About'}><span className="fa fa-user mr-3"></span> About</Link>
                        </li>
                        <li>
                            <Link to={'/UserProfile'}><span className="fa fa-briefcase mr-3"></span> Portfolio</Link>
                        </li>
                        <li>
                            <Link to={'WishList'}><span className="fa fa-sticky-note mr-3"></span> WishList</Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-paper-plane mr-3"></span> Contact</Link>
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
                                href="https://teamBravo.com" target="_blank">Team Bravo</a>
                            </p>
                    </div>

                </div>
            </nav>


            <div id="content" className="p-4 p-md-3 pt-5 ml-5" >

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home">E - S H O P</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>

                            <NavDropdown title="Item Categories" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">Wish List</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#memes">
                                <button type="button" className="btn btn-outline-success"><i
                                    className="fa fa-shopping-cart"></i>
                                    &nbsp; <Badge variant="light">2</Badge>
                                </button>

                            </Nav.Link>

                            <Nav.Link href="#memes">
                                <button type="button" className="btn btn-outline-primary">Login</button>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/UserProfile' component={UserProfile} />
                    <Route exact path='/WishList' component={WishList} />
                    <Route exact path='/Loging' component={Loging} />
                    <Route exact path='/SignUp' component={SignUp} />

                </Switch>

        </div>
        </div>
    </div>
    </Router>
  );
}
}
export default App;
