import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Product' component={Product}/>
            <Route path='/Contact' component={Contact}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

