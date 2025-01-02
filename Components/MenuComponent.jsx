// MenuComponent.jsx
import React from "react";

const MenuComponent = ({ menuItems }) => {
  const defaultMenuItems = [
    { name: "Fish and Chips", description: "Crispy fish served with fries", price: "$10.99" },
    { name: "Sandwiches", description: "Variety of sandwiches with choice of filling", price: "$8.99" },
    { name: "Pitas", description: "Grilled pita bread with assorted toppings", price: "$9.99" },
    { name: "Hamburgers", description: "Classic beef burger with lettuce and tomato", price: "$11.99" },
    { name: "Fried Chicken", description: "Crispy fried chicken pieces", price: "$9.99" },
    { name: "French Fries", description: "Golden crispy fries", price: "$4.99" },
    { name: "Onion Rings", description: "Deep-fried crispy onion rings", price: "$5.99" },
    { name: "Chicken Nuggets", description: "Juicy chicken nuggets with dipping sauce", price: "$6.99" },
    { name: "Tacos", description: "Authentic Mexican tacos with choice of filling", price: "$7.99" },
    { name: "Pizza", description: "Variety of pizza options with assorted toppings", price: "$12.99" },
    { name: "Hot Dogs", description: "Classic hot dogs with mustard and ketchup", price: "$5.99" },
    { name: "Ice Cream", description: "Assorted flavors of creamy ice cream", price: "$3.99" }
  ];

  const defaultSpecials = [
    { name: "Happy Hour", description: "50% off on all drinks from 4 PM to 6 PM" },
    { name: "Weekend Combo", description: "Special combo meal for two on weekends" },
    { name: "Student Discount", description: "10% off for students with valid ID" }
  ];

  const allMenuItems = Array.isArray(menuItems) ? [...defaultMenuItems, ...menuItems] : defaultMenuItems;
  const allSpecials = [...defaultSpecials];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {allMenuItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <h2>Specials & Discounts</h2>
      <ul>
        {allSpecials.map((special, index) => (
          <li key={index}>
            <strong>{special.name}</strong>
            <p>{special.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;
