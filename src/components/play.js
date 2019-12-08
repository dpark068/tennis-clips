import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import './play.css'

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
                        if (!names.includes(urlArr[5]) && value.node.Key.includes(props.uid) && value.node.Key.toLowerCase().includes("mp4")){
                          items.push(
                            <li key={index} class="center-inner"> Part {count} - {urlArr[5]}
                                <div className="video" class="center-inner">
                                    <video height="455" width="650" controls>
                                        <source src={value.node.url} type="video/mp4"/>
                                    </video>
                                </div>
                            </li>
                           )
                           count++;
                        }

                        names.push(urlArr[5]);
                    }
                    return (
                        <div class="center">
                            {items}
                        </div>
                    )
                }
            }
      />
    );
}