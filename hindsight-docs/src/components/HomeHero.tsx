import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {LuArrowRight, LuArrowUpRight, LuStar} from 'react-icons/lu';
import ZoomableMedia from './ZoomableMedia';
import {useGitHubStars} from './useGitHubStars';
import styles from './HomeHero.module.css';

const SIGNUP = 'https://ui.hindsight.vectorize.io/signup';
const REPO = 'https://github.com/vectorize-io/hindsight';

/**
 * The first screen of hindsight.vectorize.io.
 *
 * The site root is the docs Overview page, so until this existed the highest
 * traffic page on the site opened on prose: no claim, no number, no call to
 * action.
 *
 * It says three things and nothing else: what Hindsight is, the two things you
 * can do now, and what it actually looks like. The benchmarks used to live here
 * too; they are a section of their own below, because a band carrying both
 * charts ran past 900px and stopped reading as a hero at all.
 *
 * Everything is deliberately container-less apart from the screenshot — the
 * navbar and sidebar already supply all the chrome this page can carry. An
 * earlier draft had glowing cards behind an aurora and a promo pill, which read
 * as a landing-page template rather than an infrastructure project.
 *
 * The two paths are visually unequal on purpose: Cloud is the commercial
 * conversion and stays the one filled button; GitHub is social proof and sits
 * beside it as a ghost. They are also named apart — "Start free on Cloud" next
 * to "Start free with GitHub" made "GitHub" mean two different things.
 *
 * It lives in src/components rather than in the page body because the page is
 * versioned: production serves versioned_docs/version-0.10/developer/index.mdx.
 * A component keeps each version's include to one line.
 */
export default function HomeHero(): ReactNode {
  const stars = useGitHubStars();

  return (
    <div className={clsx('hs-hero-band', styles.hero)}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Agent Memory <span className={styles.titleAccent}>That Learns</span>
        </h1>

        <p className={styles.subtitle}>
          State of the art long-term memory for your agents.
        </p>

        <div className={styles.ctas}>
          <Link className={styles.primary} to={SIGNUP}>
            Start free on Cloud
            <LuArrowRight size={16} />
          </Link>
          <Link className={styles.ghost} to={REPO}>
            <LuStar size={14} />
            {stars && <span className={styles.starCount}>{stars}</span>}
            on GitHub
            <LuArrowUpRight size={13} />
          </Link>
        </div>

        <p className={styles.credit}>$5 of free credit when you sign up with GitHub</p>



      </div>

      {/* The band shows the product, not a chart. Hindsight is a server most
          people meet through an API, so the one thing the hero can say that
          prose cannot is that there is a UI, and that a bank is a graph you can
          actually look at. The benchmarks are a section of their own below —
          two charts up here is what made this band 900px tall and unreadable. */}
      <div className={styles.shot}>
        <ZoomableMedia>
          <video
            src="/img/memory-graph.mp4"
            poster="/img/memory-graph.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
        </ZoomableMedia>
      </div>

      <div className={styles.inner}>
        <Link className={styles.paper} to="https://arxiv.org/abs/2512.12818">
          Read the paper
          <LuArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
