import React from "react"
import playerGridStyles from "./playerGrid.module.css"

export default ({ children }) => (
  <div className={playerGridStyles.playerGrid}>
    <div class="container" align="center" id="divCenterAlign">
      <div class="row">
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <img src={'/images/profile/andrew.png'} height="100%" width="100%"></img>
          <span className={playerGridStyles.profileName}>Andrew</span>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <img src={'/images/profile/danpark.jpeg'} height="100%" width="100%"></img>
          <span className={playerGridStyles.profileName}>Dan</span>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <img src={'/images/profile/dheeraj.jpeg'} height="100%" width="100%"></img>
          <span className={playerGridStyles.profileName}>Dheeraj</span>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <img src={'/images/profile/dheeraj.jpeg'} height="100%" width="100%"></img>
          <span className={playerGridStyles.profileName}>Highlights</span>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <img src={'/images/profile/dheeraj.jpeg'} height="100%" width="100%"></img>
          <span className={playerGridStyles.profileName}>Misc</span>
        </div>
      </div>
    </div>

    {children}
  </div>
)