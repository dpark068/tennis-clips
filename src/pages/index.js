import React from "react"
import {graphql, Link} from "gatsby"
import PlayerGrid from "../components/playerGrid"

export default ({data}) => {
    console.log(data.allS3Asset.edges);
    var items = []
    var names = []
    for (const [index, value] of data.allS3Asset.edges.entries()) {

      //break up string by /
      var urlArr = value.node.url.split('/');
      
      //show the value
      if (!names.includes(urlArr[3])){
        items.push(
          <div>
            <Link
            to={`/date/${urlArr[3]}`}
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
        <PlayerGrid></PlayerGrid>
    )
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