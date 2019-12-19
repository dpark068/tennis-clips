import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import queryString from 'query-string';
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
                                id
                            }
                        }
                    }
                }
            `}
            render={
                data => {
                    var playUrl = {}

                    // three query param u,v,date
                    const queryParam = queryString.parse(window.location.search);
                    var items = [];
                    var names = [];
                    var regex = /mp4/gi;
                    var count = 1;
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //Check to see if queryParam matches with video id
                        if (queryParam['v'] == value.node.id){
                            playUrl = value.node;
                        }

                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[5]) && value.node.Key.includes(queryParam['u']) && value.node.Key.includes(queryParam['date']) && value.node.Key.toLowerCase().includes("mp4")){
                            items.push(
                                <li key={index} class="center-inner"> Part {count} - {urlArr[5]}
                                    <div className="video-thumbnail">
                                            <a href={window.location.pathname + `?v=${value.node.id}&u=${urlArr[3]}&date=${urlArr[4]}`}>
                                                <img src={value.node.url.replace(regex,'png')} height="100%" width="100%" alt="Doesn't exist"></img>
                                            </a>
                                    </div>
                                </li>
                            )
                            count++;
                        }

                        names.push(urlArr[5]);
                    }
                    console.log(queryString.parse(window.location.search));
                    return (                        
                        <div class="center">
                            
                                <div class="row">
                                <div class="col-8">
                                    <div className="video" class="center-inner">
                                        <video height="455" width="650" controls>
                                            <source src={playUrl.url} type="video/mp4"/>
                                        </video>
                                        <h2 class="vid-title">{playUrl.Key}</h2>
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