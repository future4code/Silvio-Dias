import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
  } from "react-share";


function SocialButtons() {

        const url = window.location.href
      
    return (
        <div>
            <FacebookShareButton
                children = "Facebook"
                url = {url}
            />

            <LinkedinShareButton
                children = "Linkedin"
                url = {url}
                
            />
            <RedditShareButton
                children = "Reddit"
                url = {url}
                
            />
            <TelegramShareButton
                children = "Telegram"
                url = {url}
            
            />
            <TwitterShareButton    
                children = "Twitter"
                url = {url}

            />

        </div>
    )
}

export default SocialButtons
