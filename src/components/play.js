import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Iframe from 'react-iframe'

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
                    var items = [];
                    var names = [];
                    var count = 1;
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[5]) && value.node.Key.includes(props.uid)){
                          items.push(
                            <li key={index}> part {count} - {urlArr[5]}
                                <div className="video">
                                    <Iframe url={value.node.url}
                                        width="100%"
                                        height="450px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen="true"/>
                                </div>
                            </li>
                           )
                           count++;
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