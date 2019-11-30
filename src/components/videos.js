import React from "react"

export default (props) => {
    console.log("test",props.items)
    return <div>Hi from SubPage with id: {props.id}</div>
  }