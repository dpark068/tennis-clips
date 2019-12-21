import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import HorizontalCard from '../components/horizontalCard'
import './videos.css'
export default (props) => {

    //return <div>Hi from SubPage with id: {props.id}</div>
    return (
        <StaticQuery
            query={graphql`
                query videoQuery {
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
                    var itemmtest = []
                    var names = []
                    var randVideos = []
                    var imageArr = []
                    var regex = /mp4/gi;

                    for (const [index, value] of data.allS3Asset.edges.entries()) {
                        if (value.node.url.toLowerCase().includes('png')){
                            imageArr.push(value.node.url);
                            }
                    }

                    for (const [index, value] of data.allS3Asset.edges.entries()) {
                        //choose random videos - 10
                        if (randVideos.length < 11 && value.node.url.toLowerCase().includes('mp4') && Math.round(Math.random())){
                            //Check for thumbnail exist
                            if (imageArr.includes(value.node.url.replace(regex,'png'))){
                                randVideos.push(
                                    <div className="video-thumbnail">
                                        <Link
                                            class="link-style"
                                            key={index}
                                            to={`/watch?u=${urlArr[3]}&date=${urlArr[4]}&v=${value.node.id}`}
                                        >
                                            <img src={value.node.url.replace(regex,'png')} height="100%" width="100%" alt="Doesn't exist"></img>
                                        </Link>
                                    </div>
                                )
                            }
                        }

                        //break up string by /
                        var urlArr = value.node.url.split('/');

                        //push into dates drop down if date has video
                        if (!names.includes(urlArr[4]) && value.node.Key.includes(props.uid) && value.node.url.toLowerCase().includes("mp4")){
                            console.log(value.node.Key)
                            itemmtest.push(
                                <div>
                                    <Link
                                    class="link-style"
                                    key={index}
                                    to={`/watch?u=${urlArr[3]}&date=${urlArr[4]}&v=${value.node.id}`}
                                    >
                                    {urlArr[4]}
                                    </Link>
                                    <br/>
                                </div>
                            );
                            names.push(urlArr[4]);
                        }
                        
                    }

                    return (
                        <div class="head">
                            <br/>
                            <h3 class="title">Select The Date To View</h3>
                            <div class="btn-group button-sizing">
                                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dates
                                </button>
                                <div class="dropdown-menu drop-style">
                                    {itemmtest}
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <h3 class="title">Trending Videos</h3>
                            <HorizontalCard>
                                {randVideos}
                            </HorizontalCard>
                            <br/>
                        </div>
                    )
                }
            }
      />
    );
  }

