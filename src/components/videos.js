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
                            }
                        }
                    }
                }
            `}
            render={
                data => {
                    var items = []
                    var itemmtest = []
                    var names = []
                    var randVideos = []
                    for (const [index, value] of data.allS3Asset.edges.entries()) {

                        //choose random videos - 10
                        if (randVideos.length < 11 && value.node.url.toLowerCase().includes('mp4') && Math.round(Math.random())){
                            randVideos.push(
                                <div className="video">
                                    <video height="175" width="250" controls>
                                        <source src={value.node.url} type="video/mp4"/>
                                    </video>
                                </div>
                            )
                        }
                        //break up string by /
                        var urlArr = value.node.url.split('/');
                        //show the value
                        if (!names.includes(urlArr[4]) && value.node.Key.includes(props.uid)){
                          //items.push(<li key={index}><a href={value.node.url}>{urlArr[3]}</a></li>)
                          //can delete items -- will use itemmtest
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

                          itemmtest.push(
                            <Link
                            class="link-style"
                            key={index}
                            to={`/user/${urlArr[3]}/video/${urlArr[4]}`}
                            >
                            {urlArr[4]}
                            </Link>
                          )
                        }
                        names.push(urlArr[4]);
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
                            <h3 class="title">Trending Videos</h3>
                            <HorizontalCard>
                                {randVideos}
                            </HorizontalCard>
                            <br/>
                            <br/>
                            <h3 class="title">Recently Uploaded</h3>
                            <HorizontalCard>
                                {randVideos}
                            </HorizontalCard>
                        </div>
                    )
                }
            }
      />
    );
  }

