import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '',
    Svg: require('@site/static/img/xendcampus.svg').default,
    description: (
      <>
        XendCampus, the cutting-edge solution for streamlining all your campus operations. XendCampus revolutionizes the way you manage your campus, offering a comprehensive platform tailored specifically for educational institutions.
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/xendfleet.svg').default,
    description: (
      <>
       XendFleet is designed to empower businesses of all sizes to optimize their fleet operations. Whether you have a small fleet of vehicles or a large-scale operation.
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/xendpos.svg').default,
    description: (
      <>
        XendPOS, the versatile Point of Sale (POS) software as a service (SaaS) that goes beyond traditional POS systems.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
