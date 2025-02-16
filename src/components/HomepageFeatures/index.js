import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Tracking Changes",
    description: (
      <>
        Version control maintains a comprehensive history of all code changes,
        allowing developers to: See what changed, when it changed, and who made
        the change. Understand the codebase's evolution over time. Identify when
        bugs were introduced. Revert to previous versions if necessary.
      </>
    ),
  },
  {
    title: "Collaboration",
    description: (
      <>
        Modern software development is rarely a solo effort. Version control
        enables teams to: Work simultaneously on the same codebase without
        overwriting each other's changes. Merge changes together. Review each
        other's code. Discuss changes. Track issues and bugs.
      </>
    ),
  },
  {
    title: "Branching and Experimentation",
    description: (
      <>
        Version control systems allow developers to: Create branches to work on
        new features or fixes without affecting the main codebase. Experiment
        with different approaches safely.
      </>
    ),
  },
  {
    title: "Backup and Recovery",
    description: (
      <>
        Version control serves as: An automatic backup system for your code. A
        disaster recovery mechanism. Protection against hardware failures or
        accidental deletions.
      </>
    ),
  },
  {
    title: "Accountability and Auditability",
    description: (
      <>
        In professional environments, version control provides: A record of who
        made what changes and why. Traceability for regulatory compliance.
        Documentation of decision-making processes.
      </>
    ),
  },
  {
    title: "Deployment and Release Management",
    description: (
      <>
        Version control aids in: Creating stable release versions. Rolling back
        problematic deployments. Maintaining multiple release versions.
        Automating deployment processes.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
