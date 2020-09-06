import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Posts/Posts';
import Home from './Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path='/posts'>
            <Navbar />
            <Home />
          </Route>
          
          <Route path="/postDetails/:postId">
            <Navbar />
            <PostDetails />
          </Route>
          
          <Route path='/home'>
            <Navbar />
            <Home />
          </Route>

         <Route exact path='/'>
            <Navbar />
            <Home />
          </Route>
          
          <Route path="*">
            <h3>Error:404</h3>
          </Route>
        
        </Switch>
      
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
