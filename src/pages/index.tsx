import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Willkommen zu den
          <br />
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <div className={styles.paragraphsContainer}>
          <div className={styles.paragraph}>
            <h1>Was sind die Birklehof Docs?</h1>
            <p>
              Birklehof Docs ist eine{" "}
              <span className={styles.highlight}>Dokumentationsplattform</span>{" "}
              für Softwareprojekte, die von den Schüler:innen des Birklehofs
              entwickelt wurden. Sie dient der Pflege der bestehenden Software
              und hilft bei der Entwicklung neuer Projekte. Falls du Schüler bist und Hilfe
              brauchst, schreib mir gerne eine E-Mail an{" "}
              <a
                className={styles.highlight}
                href="mailto:birklehof@paulmaier.online"
              >
                birklehof@paulmaier.online
              </a>
            </p>
          </div>
          <div className={styles.paragraph}>
            <h1>Bisherige Projekte</h1>
            <p>
              Bisher wurden folgende Projekte entwickelt und auf dieser Seite
              dokumentiert:
            </p>
            <ul>
              <li>
                <Link to="/docs/stunden-lauf-app-v2">24-Stunden-Lauf-App</Link>{" "}
                (V2)
              </li>
              <li>
                <Link to="/docs/teams-name-generator">
                  Teams-Namens-Generator
                </Link>
              </li>
              <li>
                <Link to="/docs/docs">
                  Birklehof Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
