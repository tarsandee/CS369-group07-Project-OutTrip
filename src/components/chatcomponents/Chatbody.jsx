import React from "react";
import '../../styles/chatstyles/Chatbody.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Chatbody = () => {
    return (
        <div className='chatbody'>
            <div className="top">
                <div className="user">
                    <AccountCircleIcon fontSize='large' />
                    <div className="texts">
                        <span>USERNAME</span>
                        <p>First name Last name</p>
                    </div>
                </div>
            </div>
        <div className="center-chat">
            <div className="message own">
                <AccountCircleIcon fontSize='large' />
                <div className="texts">
                    <p>Hi There</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="message">
                <AccountCircleIcon fontSize='large' />
                <div className="texts">
                    <p>Hi There</p>
                    <span>1 min ago</span>
                </div>
            </div>
        </div> 
        <div className="bottom-chat">
            <input type="text" placeholder="message here."></input>
            <button className="sendButton" >Send</button>
        </div>

        </div>
    )
}

export default Chatbody