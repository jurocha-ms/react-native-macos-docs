import type {ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const Section = ({ children, className, background = "light" }) => (
  <section className={`Section ${className} ${background}`}>
    {children}
  </section>
);

const TwoColumns = ({ columnOne, columnTwo, reverse }) => (
  <div className={`TwoColumns ${reverse ? "reverse" : ""}`}>
    <div className={`column first ${reverse ? "right" : "left"}`}>
      {columnOne}
    </div>
    <div className={`column last ${reverse ? "left" : "right"}`}>
      {columnTwo}
    </div>
  </div>
);

function HeaderHero() {
  const {siteConfig} = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  <Section background="light">
    <TwoColumns
      reverse
      columnOne={
        <React.Fragment>
          <div width={400}>
            <img alt="TODO: ALT" src={baseUrl + "img/platform.png"} />
          </div>
        </React.Fragment>
      }
      columnTwo={
        <React.Fragment>
          <h1>React Native for</h1>
          <p>macOS</p>
        </React.Fragment>
      }
    />
  </Section>
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.headerLink
            )}
            to="/docs/getting-started"
          >
            Get Started
          </Link>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.headerLink
            )}
            to="/docs/intro"
          >
            Learn the Basics
          </Link>
        </div>
        <React.Fragment>
          <div width={400}>
            <img alt="" src={baseUrl + "img/platform.png"} />
          </div>
        </React.Fragment>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
