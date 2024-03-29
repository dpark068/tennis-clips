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
                    const win = typeof window !== 'undefined' && window.location.search;
                    var queryParam = queryString.parse(win);
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
                                            
                                            <Link
                                                class="link-style"
                                                key={index}
                                                to={`/watch?u=${urlArr[3]}&date=${urlArr[4]}&v=${value.node.id}`}
                                                >
                                                <img src={value.node.url.replace(regex,'png')} height="100%" width="100%" alt="Doesn't exist"></img>
                                            </Link>
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
                                        <video height="455" width="650" controls key={playUrl.url}>
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