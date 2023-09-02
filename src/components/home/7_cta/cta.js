import React, { useContext, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import { Fade, Parallax } from "@animations";
import { Button, Container, Flex, Title } from "@UI";
import { HeaderOpacityContext } from "@context/HeaderOpacityContext";
import { ThemeContext } from "@context/ThemeContext";
import * as styles from "./cta.module.scss";

const Cta = () => {
  const { inView, ref } = useInView({ triggerOnce: false });
  const { setIsHeaderHidden } = useContext(HeaderOpacityContext);
  const { isLightTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (inView) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  }, [inView, setIsHeaderHidden]);

  return (
    <Container wrapperSmOnMd isSection>
      <Flex collapseOnMd>
        <div
          style={{ opacity: isLightTheme !== null ? 1 : 0 }}
          className={styles.imageContainer}
        >
          <Parallax offset={30}>
            <Fade duration={2} y={30}>
              {isLightTheme ? (
                <StaticImage
                  src="../../../assets/images/PIXEL/CB-ILLO-F_A_LIGHT.png"
                  alt=""
                  placeholder="blurred"
                />
              ) : (
                <StaticImage
                  src="../../../assets/images/PIXEL/CB-ILLO-F_A_DARK.png"
                  alt=""
                  placeholder="blurred"
                />
              )}
            </Fade>
          </Parallax>
        </div>

        <div className={styles.textContainer}>
          <Fade>
            <Title size={2} className={styles.title}>
              It is Carteblock’s mission to prepare businesses for the future
              and uncover value in every step of the way forward...
            </Title>
          </Fade>

          <div ref={ref}>
            <Button href="mailto:info@carteblock.com">Get In Touch</Button>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Cta;
