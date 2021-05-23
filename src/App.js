import React from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/components/pages/Home'
import Download from '../src/components/pages/Download'
import Avaiblity from '../src/components/pages/Avaiblity'

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
      </Container>
    </div>
  );
}
