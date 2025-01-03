// pages/index.js
import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Chatbot from "../components/Chatbot"; // Import the Chatbot component

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  const chatbotSteps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop. Please enter your name!",
      trigger: "EnterName",
    },
    {
      id: "EnterName",
      user: true,
      trigger: "SelectIssue",
    },
    {
      id: "SelectIssue",
      message: "Hi {previousValue},\nMenu:\n- Fish and Chips\n- Sandwiches\n- Pitas\n- Hamburgers\n- Fried Chicken\n- French Fries\n- Onion Rings\n- Chicken Nuggets\n- Tacos\n- Pizza\n- Hot Dogs\n- Ice Cream\n\nOffers/Discounts:\n- Happy Hour: 50% off on all drinks from 4 PM to 6 PM\n- Weekend Combo: Special combo meal for two on weekends\n- Student Discount: 10% off for students with valid ID",
      end: true,
    },
  ];
  
  

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BESTO FOODS</title>
        <meta name="description" content="Best restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <AddButton setClose={setClose} />
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
      <Chatbot steps={chatbotSteps} />
      <button className={styles.chatbotButton} onClick={toggleChatbot}>
        Chat
      </button>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
