import React from "react"
import {graphql, Link} from "gatsby"
export default ({data}) => {
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
            to={`/videos/${urlArr[3]}`}
            >
            {urlArr[3]}
            </Link>
            <br></br>
          </div>
        )
      }
      names.push(urlArr[3]);
      //For clicked component send the parsed array for that user into next page

      // if (value.node.url.toLowerCase().includes("mp4")){
      //     items.push(<li key={index}><a href={value.node.url}>{value.node.url}</a></li>)
      // }
    }
    return (<div>{items}</div>)
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