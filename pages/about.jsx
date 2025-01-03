import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.description}>Welcome to our Besto foods! We are a team of food lovers who are passionate about delivering delicious meals and exceptional service.</p>
            <p className={styles.description}>Our journey began with a simple idea: to create a place where people can come together to enjoy great food in a warm and inviting atmosphere. Over the years, we've grown and evolved, but our commitment to quality and customer satisfaction has remained unchanged.</p>
            <p className={styles.description}>At our restaurant, we take pride in using the freshest ingredients sourced from local suppliers. From farm-fresh produce to premium cuts of meat, every dish is carefully crafted to delight your taste buds.</p>
            <p className={styles.description}>But it's not just about the food. We believe that dining out should be an experience to remember. That's why we strive to provide impeccable service and create a welcoming environment where you can relax and enjoy yourself.</p>
            <p className={styles.description}>Whether you're joining us for breakfast, lunch, or dinner, we promise to exceed your expectations and leave you craving for more. So come on in, take a seat, and let us treat you to a culinary adventure you won't forget!</p>
            <p className={styles.description}>Thank you for choosing us, and we look forward to serving you soon!</p>
        </div>
    );
};

export default About;
