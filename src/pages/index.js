import React from "react"
import {graphql} from "gatsby"
export default ({data}) => {
    console.log(data.allS3Asset.edges);
    var items = []
    for (const [index, value] of data.allS3Asset.edges.entries()) {
        if (value.node.url.toLowerCase().includes("mp4")){
            items.push(<li key={index}><a href={value.node.url}>{value.node.url}</a></li>)
        }
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