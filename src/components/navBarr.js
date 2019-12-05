import React from "react"
import navBarStyles from './navBarr.module.css'

export default ({ children }) => (
  <div className={navBarStyles.backColor}>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">DanGoProWTennis</a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" className={navBarStyles.item} href="/">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" className={navBarStyles.item} href="/user/highlights">Highlights</a>
          <a class="nav-item nav-link" className={navBarStyles.item} href="/user/misc">Misc</a>
        </div>
      </div>
    </nav>
    {children}
  </div>
  
)