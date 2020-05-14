import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./Components/Admin/Admin";


//Used for Dewsara's Purposes.
// ReactDOM.render(
//     <Router>
//         <div>
//             <Switch>
//             <Route exact path='/' component={App} />
//             <Route exact path='/Admin' component={Admin}/>
//             </Switch>
//         </div>
//     </Router>,document.getElementById('root')
// );

//Correct Usage.
ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
