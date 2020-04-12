import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Home from './Components/Home';
import About from './Components/About';
import Loging from './Components/Loging';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile';
import WishList from './Components/WishList';

class App extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
  return (
    <Router>
    <div className="App">
    //side nav bar
      <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5" style={{backgroundImage: "url(Images/user.png);"}}></a>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
                  <Link to={'/Home'} className="nav-link">Home</Link>
	           
	          </li>
	          <li>
	              <Link to={'/About'} className="nav-link">About</Link>
	          </li>
	          <li>
                  <Link to={'/UserProfile'} className="nav-link">Profile</Link>
	          </li>
	          <li>
                  <Link to={'/WishList'} className="nav-link">WishList</Link>
	          </li>
	          <li>
              <a href="#">Contact Us</a>
	          </li>
	        </ul>

	        <div class="footer">
	        	<p>
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made <i class="icon-heart" aria-hidden="true"></i> by team <a href="#" target="_blank">Bravo</a>
				</p>
	        </div>

	      </div>
    	</nav>
       
        
      <div id="content" class="p-4 p-md-3">
      <div class="text-right p-1 p-md-2">
      <a href={'/Loging'} class="btn btn-primary btn-sm">
                Login
      </a>{'  '}
      <a href={'/SignUp'} class="btn btn-info btn-sm">
                SignUp
      </a>
    </div>
    
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

          <div class="container-fluid">
            
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link to={'/Home'} className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/About'} className="nav-link">About</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/UserProfile'} className="nav-link">Profile</Link>
                </li>
                <li class="nav-item">
                <Link to={'/WishList'} className="nav-link">WishList</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>

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
