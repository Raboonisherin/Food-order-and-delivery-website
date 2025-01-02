import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.item}>
                {/* Background Image */}
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="Background" />
            </div>
            <div className={styles.item}>
                {/* Contact Information */}
                <div className={styles.column}>
                    <h1 className={styles.title}>CONTACT US</h1>
                    <p className={styles.detail}>
                        <strong>Address:</strong><p>50,West masi street,Madurai,TamilNadu</p>
                        <br></br>
                     <p>Suite 11, 1401 Botany Road,Botany,Pondicherry,TamilNadu</p>
        
                    </p>
                    <p className={styles.detail}>
                        <strong>Phone:</strong> 8610 9029 15
                    </p>
                    <p className={styles.detail}>
                        <strong>Email:</strong> <a href="bestofoods@gmail.com" className={styles.emailLink}>bestofoods@gmail.com</a>
                    </p>
                </div>
                {/* Working Hours */}
                <div className={styles.column}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.detail}>
                        <strong>Monday - Friday:</strong> 9:00 AM – 10:00 PM
                    </p>
                    <p className={styles.detail}>
                        <strong>Saturday - Sunday:</strong> 12:00 PM – 12:00 AM
                    </p>
                </div>
                {/* Social Media Links */}
                <div className={styles.column}>
                    <h1 className={styles.title}>CONNECT WITH US</h1>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/bestofood" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <span className="fab fa-facebook-f"></span> Facebook
                        </a>
                        <a href="https://twitter.com/bestofood" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <span className="fab fa-twitter"></span> Twitter
                        </a>
                        <a href="https://www.instagram.com/bestofood/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <span className="fab fa-instagram"></span> Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/bestofood" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <span className="fab fa-linkedin"></span> LinkedIn
                        </a>
                    </div>
                </div>
                {/* Copyright */}
                <div className={styles.copywright}>
                    &copy; 2024 Besto Food. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
