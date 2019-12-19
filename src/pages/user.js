import { Router } from "@reach/router"
import React from "react"
import Videos from '../components/videos'
import NavBar from '../components/navBarr'

const Time = () => {
  return (
      <div>
          <NavBar></NavBar>
          <Router>
              <Videos path="/user/:uid" />
          </Router>
      </div>
  );
}

export default Time