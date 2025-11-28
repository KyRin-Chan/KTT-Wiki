import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">欢迎来到 K2Lin 的世界</h1>
        <p className="hero__subtitle">
          这里是 K2Lin Teams 的项目文档中心，目前主要为 OurCraft Minecraft 服务器提供指引。
          <br />
          无论是初来乍到还是资深玩家，你都可以在这里找到所需的信息。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ourcraft/getting-started">
            快速开始 →
          </Link>
          <Link
            className="button button--info button--lg"
            to="/docs/intro" style={{marginLeft: '10px'}}>
            了解更多
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="K2Lin Teams 项目文档中心，提供 OurCraft Minecraft 服务器等项目的详细指引和信息。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
