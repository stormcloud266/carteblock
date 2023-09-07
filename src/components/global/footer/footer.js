import React from "react";
import { Link } from "gatsby";
import { Container } from "@UI";
import { Fade } from "@animations";
import { Logo } from "@images/icons";
import { footerLinks } from "@data";
import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Fade>
        <Container wrapper className={styles.container}>
          <div className={styles.row}>
            <Link
              to="/"
              aria-label="return to top of the page"
              className={styles.logo}
            >
              <Logo />
            </Link>

            <nav className={styles.nav}>
              {footerLinks.map(({ text, link }) => (
                <a href={link} key={text} target="_blank" rel="noreferrer">
                  {text}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.row}>
            <div className={styles.smallText}>
              <a href="mailto:info@carteblock.com">info@carteblock.com</a>
            </div>
            <p className={styles.smallText}>
              &copy; Carteblock {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </Fade>
    </footer>
  );
};

export default Footer;
