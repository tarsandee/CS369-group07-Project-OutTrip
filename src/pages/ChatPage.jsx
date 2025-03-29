import React from "react";
import '../styles/chatstyles/ChatPage.css';
import Chatbody from "../components/chatcomponents/Chatbody";
import Detail from "../components/chatcomponents/Chatdetail";
import Chatlist from "../components/chatcomponents/Chatlist";

function ChatPage() {
    return (
        <div className="chat-page">
            <div className="list-container"><Chatlist /></div>
            <div className="chatbody-container"><Chatbody /></div>
            <div className="detail-container"><Detail /></div>
        </div>
    );
}

export default ChatPage;