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
                    var regex = /mp4/gi;
                    var count = 1;
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[5]) && value.node.Key.includes(props.uid) && value.node.Key.toLowerCase().includes("mp4")){
                        //   items.push(
                        //     <li key={index} class="center-inner"> Part {count} - {urlArr[5]}
                        //         <div className="video" class="center-inner">
                        //             <video height="455" width="650" controls>
                        //                 <source src={value.node.url} type="video/mp4"/>
                        //             </video>
                        //         </div>
                        //     </li>
                        //    )
                        items.push(
                            <li key={index} class="center-inner"> Part {count} - {urlArr[5]}
                                <div className="video-thumbnail">
                                        <a href={value.node.url}>
                                            <img src={value.node.url.replace(regex,'png')} height="100%" width="100%" alt="Doesn't exist"></img>
                                        </a>
                                </div>
                            </li>
                        )
                           count++;
                        }

                        names.push(urlArr[5]);
                    }
                    return (
                        <div class="center">
                            
                                <div class="row">
                                <div class="col-8">
                                    <div className="video" class="center-inner">
                                        <video height="455" width="650" controls>
                                            <source src="https://s3.amazonaws.com/godanpark.com/dan/9_6/9_6_g.MP4" type="video/mp4"/>
                                        </video>
                                        <h2 class="vid-title">dan/9_6/9_6_g.MP4</h2>
                                    </div>
                                </div>
                                <div class="col-4">
                                    {items}
                                </div>
                                </div>
                            
                        </div>
                    )
                }
            }
      />
    );
}