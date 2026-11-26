import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

const work = [
  {
    name: 'ConfirmX',
    category: 'Commerce operations',
    question: 'What happens after a cash-on-delivery order lands?',
    description: 'An operations platform designed for Bangladeshi merchants. It brings order confirmation, delivery-risk review, and courier workflows into one place.',
    focus: 'Order ingestion, confirmation workflows, and courier integration',
    tech: ['Next.js', 'Node.js', 'Shopify', 'WooCommerce'],
    flow: ['Shopify / WooCommerce', 'Confirm & review', 'Courier workflow'],
    color: 'confirm',
  },
  {
    name: 'Rio District',
    category: 'Localized storefront',
    question: 'One storefront for French and Spanish shoppers.',
    description: 'A fashion storefront with localized product pages, variant and bundle selection, and cart and checkout interfaces.',
    focus: 'Storefront UI, localization, and release checks',
    tech: ['Next.js', 'TypeScript', 'MongoDB'],
    flow: ['Browse in ES / FR', 'Select an offer', 'Cart & checkout UI'],
    color: 'rio',
    links: [
      { label: 'Spanish product page', href: 'https://rio-district.store/producto/veste-bresil-vert' },
      { label: 'French product page', href: 'https://rio-district.store/produit/veste-bresil-vert' },
    ],
  },
];

function WorkCard({ project, index }) {
  const { name, category, question, description, focus, tech, flow, color, links } = project;
  const heading = 'project-' + color;
  return (
    <article className={'work-card ' + color} aria-labelledby={heading}>
      <div className="work-content">
        <p className="work-meta"><span>0{index + 1}</span> {category}</p>
        <h3 id={heading}>{name}</h3>
        <p className="work-question">{question}</p>
        <p className="work-description">{description}</p>
        <p className="work-focus"><strong>Project focus</strong>{focus}</p>
        <ul className="tech-list" aria-label={name + ' technologies'}>{tech.map((item) => <li key={item}>{item}</li>)}</ul>
        {links && <ul className="project-links">{links.map(({ label, href }) => <li key={label}><a href={href}>{label} <span aria-hidden="true">↗</span></a></li>)}</ul>}
      </div>
      <div className="work-visual">
        <p className="visual-title">Workflow overview</p>
        <ol>
          {flow.map((item, i) => <li key={item}><span aria-hidden="true">0{i + 1}</span>{item}</li>)}
        </ol>
      </div>
    </article>
  );
}

function Portfolio() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="/"><span className="monogram" aria-hidden="true">MR</span>Masud Reza</a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
      <main className="wrap" id="main" tabIndex="-1">
        <section className="hero" aria-labelledby="intro">
          <p className="eyebrow"><span aria-hidden="true"></span> Full-stack developer · Bangladesh</p>
          <h1 id="intro">I build ecommerce <em>from storefront to fulfillment.</em></h1>
          <p className="hero-description">I work on storefronts, checkout, and the systems that get orders from the cart to the courier.</p>
          <div className="hero-actions">
            <a href="#work" className="button primary">See selected work <span aria-hidden="true">↓</span></a>
            <a href="https://github.com/rezainiet" className="button secondary">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>
        <section className="section" id="work" aria-labelledby="work-heading">
          <header className="section-heading">
            <p className="eyebrow">01 / Projects</p>
            <h2 id="work-heading">Selected work</h2>
            <p>Two projects covering different stages of an ecommerce order.</p>
          </header>
          <div className="work-list">{work.map((project, index) => <WorkCard project={project} index={index} key={project.name} />)}</div>
        </section>
        <section className="section" id="services" aria-labelledby="services-heading">
          <header className="section-heading">
            <p className="eyebrow">02 / Services</p>
            <h2 id="services-heading">What I can help with</h2>
          </header>
          <div className="services-grid">
            <article><h3>Storefronts &amp; checkout</h3><p>Build or improve product pages, carts, and mobile checkout flows.</p></article>
            <article><h3>Order &amp; courier integrations</h3><p>Connect Shopify or WooCommerce to confirmation and fulfillment workflows.</p></article>
            <article><h3>Custom dashboards</h3><p>Give your team one place to review orders, follow exceptions, and see what needs action.</p></article>
          </div>
        </section>
        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div>
            <p className="eyebrow">03 / Contact</p>
            <h2 id="contact-heading">What are you building?</h2>
            <p>Tell me what you want to fix or build, and where you are getting stuck.</p>
          </div>
          <a className="button primary" href="mailto:masudreza.dev@gmail.com">Email Masud <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner"><p>Masud Reza · Bangladesh</p><a href="https://github.com/rezainiet">GitHub <span aria-hidden="true">↗</span></a></div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/contactMe" element={<Navigate to="/#contact" replace />} />
      <Route path="/aboutMe" element={<Navigate to="/#main" replace />} />
      <Route path="/project/:projectID" element={<Navigate to="/#work" replace />} />
      <Route path="/portoflio" element={<Navigate to="/#work" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
