import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '探索无尽可能',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        无论是纯净生存、极限挑战，还是特色小游戏，OurCraft
        为你提供了多种多样的游戏体验。加入我们，开启你的方块冒险之旅！
      </>
    ),
  },
  {
    title: '友善玩家社区',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们致力于打造一个和谐、互助的社区环境。在这里，你可以结交新朋友，
        组队探索，共同建造属于你们的家园。
      </>
    ),
  },
  {
    title: '完善维基指南',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        从服务器连接到进阶玩法，我们的维基提供了详尽的指南和教程。
        遇到问题？答案就在这里。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
