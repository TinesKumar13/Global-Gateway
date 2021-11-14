import React from 'react';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Detail from './pages/Detail';
import ScrollTop from './components/ScrollTop';
import Nav from './components/Nav';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
       <AboutUs/>
       </Route>
       <Route path="/work/:id" exact>
         <Detail/>
       </Route>
       </Switch>
       </AnimatePresence>
     
    </div>
  );
}

export default App;
