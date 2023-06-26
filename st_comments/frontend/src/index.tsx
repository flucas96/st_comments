
import React from "react"
import ReactDOM from "react-dom"
import CommentComponent from "./st_comments"

// Lots of import to define a Styletron engine and load the light theme of baseui


// Wrap your CustomSlider with the baseui them
ReactDOM.render(
  <React.StrictMode>
    <CommentComponent />
  </React.StrictMode>,
  document.getElementById("root")
)