import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default (props) => {

    //return <div>Hi from SubPage with id: {props.id}</div>
    return (
        <StaticQuery
            query={graphql`
                query HeadingQuery {
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
                    //console.log('bleh',data.allS3Asset.edges)
                    var items = []
                    var names = []
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[4]) && value.node.Key.includes(props.uid)){
                          //items.push(<li key={index}><a href={value.node.url}>{urlArr[3]}</a></li>)
                          items.push(
                            <div>
                              <Link
                              key={index}
                              to={`/user/${urlArr[3]}/video/${urlArr[4]}`}
                              >
                              {urlArr[4]}
                              </Link>
                              <br></br>
                            </div>
                          )
                        }
                        names.push(urlArr[4]);
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

