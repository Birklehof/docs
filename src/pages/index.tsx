import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={styles.paragraphContainer}>
          <div className={styles.paragraph}>
            <h1>What is Birklehof Docs?</h1>
            <p>
              Birklehof Docs is a{" "}
              <span className={styles.highlight}>documentation platform</span>{" "}
              for software projects developed by the students of the Birklehof
              for the students of the Birklehof. It is used for maintaining the
              existing software and helping you develop you idea for making life
              easier. Now get to it and make something{" "}
              <span className={styles.highlight}>awesome!</span>
            </p>
          </div>
          <div className={styles.paragraph}>
            <h1>How can I contribute?</h1>
            <p>
              Use Birklehof Docs to familiarize yourself with existing software
              and possible endpoints for your new feature or project.{" "}
              <span className={styles.highlight}>Develop a prototype</span> and
              show it to someone in the Programmieren AG or school management.
              Once your software is useful and stable, write the documentation.{" "}
              <span className={styles.highlight}>
                Ask us for help if needed.
              </span>{" "}
              Contribute to the Birklehof software ecosystem and{" "}
              <span className={styles.highlight}>
                make life easier for everyone!
              </span>
            </p>
          </div>
          <div className={styles.paragraph}>
            <h1>What else is there left to say?</h1>
            <p>
              <span className={styles.highlight}>Thank you</span> for your time
              and effort in making the Birklehof a better place for everyone. We
              hope the Birklehof Docs will{" "}
              <span className={styles.highlight}>help you</span> in your journey
              and provide you with the information you need. If you have any
              questions or suggestions, please contact me at{" "}
              <span className={styles.highlight}>pauljustus279@gmail.com.</span>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
