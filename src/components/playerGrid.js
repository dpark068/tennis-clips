import React from "react"
import playerGridStyles from "./playerGrid.module.css"

export default ({ children }) => (
  <div className={playerGridStyles.component}>
    <h1 align="center">GoPro Tennis Sessions</h1>
    <br></br>
  <div className={playerGridStyles.playerGrid}>
    <div className={playerGridStyles.profileGateLabel}>
      Player Pick:
    </div>
    <div class="container" align="center" id="divCenterAlign">
      <div class="row">
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <a href="/user/andrew">
            <img src={'/images/profile/andrew.png'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Andrew</span>
          </a>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <a href="/user/danpark">
            <img src={'/images/profile/danpark.jpeg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Dan</span>
          </a>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <a href="/user/dan">
            <img src={'/images/profile/dheeraj.jpeg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Dheeraj</span>
          </a>
        </div>
      </div>
      <div class="row">
      <div class="col-sm"></div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <a href="/user/highlights">
            <img src={'/images/profile/tennis_highlights.jpg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Highlights</span>
          </a>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <a href="/user/misc">
            <img src={'/images/profile/misc.jpg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Misc</span>
          </a>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>

    {children}
  </div>
  </div>
)