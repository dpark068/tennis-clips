import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default (props) => {
    return (
        <StaticQuery
            query={graphql`
                query playQuery {
                    allS3Asset {
                        edges {
                            node {
                                Key
                                url
                            }
                        }
                    }
                }
            `}
            render={
                data => {
                    var items = []
                    var names = []
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[5]) && value.node.Key.includes(props.uid)){
                          items.push(<li key={index}><a href={value.node.url}>{urlArr[5]}</a></li>)
                        }
                        names.push(urlArr[5]);
                    }
                    return (
                        <div>
                            {items}
                        </div>
                    )
                }
            }
      />
    );
}