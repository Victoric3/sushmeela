import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { useMediaQuery } from "react-responsive";
import sushmeelaImage from '../../img/logo.png'

const contentTypes = [
  "SEO content writing",
  "YouTube scripts", 
  "Ads Marketing",
  "Blog posts",
  "Social media content",
  "Financial advice",
  "Educational content",
];

const AboutSushmeela = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 1030 });

    const styles = {
        container: {
          padding: "20px",
          width: isSmallScreen ? "95%" : "80%",
          margin: "0 auto",
          transition: "width 0.3s ease-in-out",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        },
        subHeader: {
          fontSize: "1.8em",
          marginBottom: "0.5em",
        },
        paragraph: {
          fontSize: "1.2em",
          lineHeight: "1.5em",
          maxWidth: "1000px",
          textAlign: "justify",
        },
        typedText: {
          color: 'green',
          fontWeight: 'bold',
        },
        image: {
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '20px',
        }
    };

  return (
    <div style={styles.container} id='about'>
      <img 
        src={sushmeelaImage} 
        alt="Sushmeela" 
        style={styles.image}
      />
      <h2 style={styles.subHeader}>
        Specializing In{" "}        
        <Typed
          strings={contentTypes}
          typeSpeed={50}
          backSpeed={40}
          loop
          style={styles.typedText}
        />
      </h2>
      <p style={styles.paragraph}>
        Hi, I’m Sushmeela, A Highly Skilled Content Writer 
        With over 10 years of experience in the field of content writing, I have
        honed my skills to deliver high-quality content that engages and converts.
        My expertise ranges from SEO content writing and YouTube scripts to ads
        marketing and educational content. I am dedicated to helping businesses
        and individuals communicate their message effectively and reach their target
        audience. Let's work together to create content that not only informs but
        also inspires.
      </p>
    </div>
  );
};

export default AboutSushmeela;
