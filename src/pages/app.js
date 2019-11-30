import {Link} from "gatsby"
import { Router } from "@reach/router"
import React from "react"

const SomeSubPage = props => {
    return <div>Hi from SubPage with id: {props.id}</div>
}

const SomeSubPages = props => {
    return <div>Hi from SubPage with id: {props.id} and {props.sec}</div>
}

const App = () => (
<div>
    <Link to="/app/1">First item</Link>{" "}
    <Link to="/app/2">Second item</Link>{" "}
    <Link to="/app/2/3">Second item</Link>{" "}
    <Router>
    <SomeSubPage path="/app/:id" />
    <SomeSubPages path="/app/:id/:sec" />
    </Router>
</div>
)
  
  export default App