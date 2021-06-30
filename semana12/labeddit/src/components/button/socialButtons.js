import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
  } from "react-share";

import {SocialIcon} from "./style"

import Facebook from "../../img/Facebook.png"
import Linkedin from "../../img/Linkedin.png"
import Reddit from "../../img/Reddit.svg"
import Telegram from "../../img/Telegram.png"
import Twitter from "../../img/Twitter.png"

function SocialButtons() {

        const url = window.location.href
      
    return (
        <div>
            <FacebookShareButton
                children = {<SocialIcon src = {Facebook} />} 
                url = {url}
            />

            <LinkedinShareButton
                children = {<SocialIcon src = {Linkedin} />} 
                url = {url}
                
            />
            <RedditShareButton
                children = {<SocialIcon src = {Reddit} />} 
                url = {url}
                
            />
            <TelegramShareButton
                children = {<SocialIcon src = {Telegram} />} 
                url = {url}
            
            />
            <TwitterShareButton    
                children = {<SocialIcon src = {Twitter} />} 
                url = {url}

            />

        </div>
    )
}

export default SocialButtons
