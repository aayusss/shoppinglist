import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" component={ProductListing}/>
      <Route path="/product/:productId" component={ProductDetails}/>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
