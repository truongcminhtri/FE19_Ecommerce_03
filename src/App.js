import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/list/List";
import Grid from "./components/grid/Grid";
import Detail from "./components/detail/Detail";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/grid" component={Grid} />
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
