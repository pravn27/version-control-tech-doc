import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Versioning & Change Tracking",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Tracks changes made to documentation over time. Allows rollbacks to
        previous versions. Displays change history with timestamps and author
        details.
      </>
    ),
  },
  {
    title: "Branching & Merging",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Supports multiple versions of documentation via branches. Enables
        merging changes from different branches. Helps manage stable and
        development versions of docs.
      </>
    ),
  },
  {
    title: "Role-Based Access Control",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Admins can manage access for contributors and reviewers. Read-only or
        edit access based on user roles. Secure authentication and
        authorization.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
