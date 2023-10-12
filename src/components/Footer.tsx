import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socialmedia}>
        <a href="#!" className="me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#!" className="me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#!" className="me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="#!" className="me-4">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023. All rights reserved. 
      </div>
    </div>
  );
};

export default Footer;