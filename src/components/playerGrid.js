import React from "react"
import { Link} from "gatsby"
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
          <Link
            key='1'
            to={`/user/andrew`}
            >
            <img src={'/images/profile/andrew.png'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Andrew</span>
          </Link>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <Link
            key='2'
            to={`/user/danpark`}
            >
            <img src={'/images/profile/danpark.jpeg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Dan</span>
          </Link>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <Link
            key='3'
            to={`/user/dan`}
            >
            <img src={'/images/profile/dheeraj.jpeg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Dheeraj</span>
          </Link>
        </div>
      </div>
      <div class="row">
      <div class="col-sm"></div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <Link
            key='4'
            to={`/user/highlights`}
            >
            <img src={'/images/profile/tennis_highlights.jpg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Highlights</span>
          </Link>
        </div>
        <div class="col-sm" className={playerGridStyles.colBorder}>
          <Link
            key='5'
            to={`/user/misc`}
            >
            <img src={'/images/profile/misc.jpg'} height="100%" width="100%"></img>
            <span className={playerGridStyles.profileName}>Misc</span>
          </Link>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>

    {children}
  </div>
  </div>
)