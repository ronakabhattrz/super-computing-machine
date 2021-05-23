import React from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/components/pages/Home'
import Download from '../src/components/pages/Download'
import Avaiblity from '../src/components/pages/Avaiblity'
import Footer from '../src/components/pages/Footer'

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/check-avaiblity" component={Avaiblity} />
            <Route exact path="/download-certificate" component={Download} />
          </Switch>
        </BrowserRouter>
        <Footer children="Helpline Number : +91-11-23978046 | Toll Free Number: 1075" />
      </Container>
    </div>
  );
}
