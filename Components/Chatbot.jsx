import React from "react";
import ChatBot from "react-simple-chatbot";
import styles from "../styles/chatbot.module.css";
const Chatbot = ({ steps }) => {
    return (
      <ChatBot
        floating={true}
        steps={steps}
        botAvatar={"/chatbot.jpg"}
        userAvatar={"/user-avatar.png"}
        contentStyle={{ backgroundColor: "white", color: "black" }} // Set background to black and text color to white
        botStyle={{ background: "white" }} // Set the Chatbot background color to black
        floatingStyle={{ backgroundColor: "black" }} // Set the floating button background color to black
      />
    );
  };
export default Chatbot;
  
  
  
