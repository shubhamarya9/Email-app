import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Archive from "./components/Archive";
import Compose from "./components/Compose";
import Loader from "./components/Loader";

import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Inbox} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/sent" component={Sent} />
            <Route path="/archive" component={Archive} />
            <Route path="/compose" component={Compose} />
            <Route path="/success" component={Loader} />
          </Switch>
          {/* <Inbox contacts={this.state.contacts} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
