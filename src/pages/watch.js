import {graphql} from "gatsby"
import React from "react"
import Play from '../components/play'
import NavBar from '../components/navBarr'

const Watch = () => {    
    return (
        <div>
            <NavBar></NavBar>
            <Play></Play>
        </div>
    );
  
}

export default Watch