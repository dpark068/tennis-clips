import {graphql, Link} from "gatsby"
import { Router } from "@reach/router"
import React from "react"
import Videos from '../components/videos'
import Play from '../components/play'
import NavBar from '../components/navBarr'

const Time = ({data}) => {
    console.log(data.allS3Asset.edges);
    var items = []
    var names = []
    for (const [index, value] of data.allS3Asset.edges.entries()) {

      //break up string by /
      var urlArr = value.node.url.split('/');
      
      //show the value
      if (!names.includes(urlArr[3])){
        //items.push(<li key={index}><a href={value.node.url}>{urlArr[3]}</a></li>)
        items.push(
          <div>
            <Link
            key={index}
            to={`/user/${urlArr[3]}`}
            >
            {urlArr[3]}
            </Link>
            <br></br>
          </div>
        )
      }
      names.push(urlArr[3]);
    }
    
    return (
        <div>
            <NavBar></NavBar>
            <Router>
                <Videos path="/user/:uid" />
                <Play path="/user/:uid/video/:vid" />
            </Router>
        </div>
    );
  
}
  
export const query = graphql`
  query {
    allS3Asset {
      edges {
        node {
          id
          url
        }
      }
    }
  }
`
export default Time