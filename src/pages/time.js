import {Link} from "gatsby"
import { Router } from "@reach/router"
import React from "react"
import Videos from '../components/videos'
  
  const Time = () => (
    <div>
      <Link to="/time/1">First item</Link>{" "}
      <Link to="/time/2">Second item</Link>{" "}
  
      <Router>
        <Videos path="/time/:id" />
      </Router>
    </div>
  )
  
  export default Time