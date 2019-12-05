import React from "react"
import horizontalCardStyles from "./horizontalCard.module.css"

export default ({ children }) => (
    <div>
        <div className={horizontalCardStyles.container}>    
            {children}
        </div>
    </div>
)