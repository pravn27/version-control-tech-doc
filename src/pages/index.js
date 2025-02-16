import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/category/github"
        >
          Github
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} tech docs`}
      description="Everything about version controls, its reference links & technical documentations"
    >
      <HomepageHeader />
      <main>
        <div style={{ marginTop: "20px" }}>
          <Heading as="h2" className="text--center">
            Why Version Control Systems are Essential in Software Development ?
          </Heading>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
