import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  Gift,
  Leaf,
  MapPin,
  ScanLine,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import AboutVideo from '@/components/ui/AboutVideo';
import Hero from '@/components/sections/Hero';
import { mockStats } from '@/data/mock';
import styles from './Homepage.module.css';

const features: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  label: string;
}[] = [
  {
    title: 'Know your footprint',
    description: 'See the everyday habits that shape your carbon impact, all in one clear view.',
    href: '/carbon',
    icon: Leaf,
    label: 'Carbon tracking',
  },
  {
    title: 'Get guidance that fits',
    description: 'Ask the AI assistant for practical ideas you can put into action right away.',
    href: '/chat',
    icon: Sparkles,
    label: 'AI assistant',
  },
  {
    title: 'Sort with confidence',
    description: 'Scan an item to get quick help identifying materials and recycling options.',
    href: '/scan',
    icon: ScanLine,
    label: 'Waste scanner',
  },
  {
    title: 'Make progress rewarding',
    description: 'Explore challenges and rewards designed to encourage better daily choices.',
    href: '/rewards',
    icon: Gift,
    label: 'Rewards',
  },
  {
    title: 'Find a nearby machine',
    description: 'Locate smart collection points and check their latest reported status.',
    href: '/machines',
    icon: MapPin,
    label: 'Smart machines',
  },
  {
    title: 'See the bigger picture',
    description: 'Follow your progress with sustainability insights and impact analytics.',
    href: '/analytics',
    icon: BarChart3,
    label: 'Impact insights',
  },
];

const steps = [
  {
    number: '01',
    title: 'Measure your impact',
    description: 'Start with a carbon assessment to understand where your footprint comes from.',
    href: '/carbon',
    action: 'Explore carbon tracking',
  },
  {
    number: '02',
    title: 'Find your next step',
    description: 'Use personalized guidance and simple tools to turn insight into action.',
    href: '/chat',
    action: 'Talk to the AI assistant',
  },
  {
    number: '03',
    title: 'Build better habits',
    description: 'Track your progress, recycle thoughtfully, and celebrate the choices you make.',
    href: '/rewards',
    action: 'Discover rewards',
  },
];

const aboutPoints = [
  'Carbon footprint tracking',
  'AI-powered waste guidance',
  'Smart recycling locations',
  'Progress and rewards',
];

export default function Home() {
  const impactStats = [
    { value: mockStats.totalUsers.toLocaleString('en-IN'), label: 'Community members' },
    { value: `${mockStats.carbonSavedKg.toLocaleString('en-IN')} kg`, label: 'CO₂ saved' },
    { value: mockStats.smartMachines.toLocaleString('en-IN'), label: 'Smart machines' },
    { value: `${mockStats.wasteProcessedTons} t`, label: 'Waste processed' },
  ];

  return (
    <>
      <Hero />

      <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <AboutVideo />
          <div className={styles.aboutContent}>
            <p className={styles.eyebrow}>A clearer path to sustainability</p>
            <h2 id="about-title" className={styles.sectionTitle}>
              Small choices add up to meaningful change.
            </h2>
            <p className={styles.sectionDescription}>
              THADAM AI brings carbon tracking, practical AI guidance, and smarter recycling tools
              together so you can make informed choices and keep moving forward.
            </p>
            <ul className={styles.checklist}>
              {aboutPoints.map((point) => (
                <li key={point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/about" className={styles.textLink}>
              Get to know THADAM AI <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className={`${styles.section} ${styles.features}`} aria-labelledby="features-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Tools for everyday progress</p>
            <h2 id="features-title" className={styles.sectionTitle}>
              Make your next green choice easier.
            </h2>
            <p className={styles.sectionDescription}>
              Explore practical tools that help you understand your impact and take the next step.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {features.map(({ title, description, href, icon: Icon, label }) => (
              <Link key={title} href={href} className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className={styles.featureLabel}>{label}</span>
                <span className={styles.featureTitle}>{title}</span>
                <span className={styles.featureDescription}>{description}</span>
                <span className={styles.featureAction}>
                  Explore <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.journey}`} aria-labelledby="journey-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Your sustainability journey</p>
            <h2 id="journey-title" className={styles.sectionTitle}>
              Start where you are. Grow from there.
            </h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <Link href={step.href} className={styles.textLink}>
                  {step.action} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.impact}`} aria-labelledby="impact-title">
        <div className={styles.shell}>
          <div className={styles.impactHeading}>
            <div>
              <p className={styles.eyebrow}>Progress, together</p>
              <h2 id="impact-title" className={styles.sectionTitle}>Collective eco impact</h2>
            </div>
            <p className={styles.sectionDescription}>
              Every thoughtful action contributes to a more sustainable community.
            </p>
          </div>
          <dl className={styles.impactGrid}>
            {impactStats.map((stat) => (
              <div key={stat.label} className={styles.impactCard}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={`${styles.shell} ${styles.ctaCard}`}>
          <div>
            <p className={styles.eyebrow}>One step is a good start</p>
            <h2 id="cta-title">Ready to understand your impact?</h2>
            <p>Begin with a quick carbon assessment and find a next step that works for you.</p>
          </div>
          <Link href="/carbon" className={styles.ctaLink}>
            Start tracking <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
