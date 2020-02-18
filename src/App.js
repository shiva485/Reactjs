import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'
import Student from './components/Student'
import Details from './components/Details'
import pagination1 from './components/Pagination1'
import Edit from './components/Edit'



import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-success navbar-dark">

            <ul className="navbar-nav">

              <li className="nav-item ">
                <NavLink to={'/about'} className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link">Contacts</Link>
              </li>
              
              <li className="nav-item">
                <Link to={'/Log'} className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/reg'} className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to={'/std'} className="nav-link">Student</Link>
              </li>
              <li className="nav-item">
                <Link to={'/details'} className="nav-link">GetData</Link>
              </li>

              <li className="nav-item">
                <Link to={'/pag'} className="nav-link">pagination</Link>
              </li>
            
              

            </ul>
          </nav>

         

          <Switch>
            <Route exact path='/Home' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/Log' component={Login} />
            <Route path='/Reg' component={Register} />
             <Route path='/std' component={Student}/>
             <Route path='/details' component={Details}/>
             <Route path='/pag' component={pagination1}/>
             <Route path='/edit/:id' component={ Edit } />
            
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;