import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  console.log(Layout)
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/definitions">
            Definitions
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/primitives">
            Primitives
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/protocols">
            Protocols
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  );
}
