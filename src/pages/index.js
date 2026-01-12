import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useState, useEffect, useRef } from 'react';

import styles from './index.module.css';

// Animated Background with Particles
function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= dx * force * 0.015;
          p.y -= dy * force * 0.015;
        }
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 45, 54, ${p.opacity})`;
        ctx.fill();
        
        particles.slice(i + 1).forEach(p2 => {
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 45, 54, ${0.12 * (1 - dist2 / 100)})`;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => { resize(); createParticles(); });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.animatedBg} />;
}

// Feature Card Component
function FeatureCard({ icon, title, description, to, delay }) {
  return (
    <Link to={to} className={styles.featureCard} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.featureArrow}>→</span>
    </Link>
  );
}

// Step Card for Process Section
function StepCard({ number, title, duration, cost, icon, isActive, onClick }) {
  return (
    <div 
      className={clsx(styles.stepCard, isActive && styles.stepCardActive)} 
      onClick={onClick}
    >
      <div className={styles.stepCardHeader}>
        <div className={styles.stepIcon}>{icon}</div>
        <span className={styles.stepBadge}>{number}</span>
      </div>
      <h3>{title}</h3>
      <div className={styles.stepMeta}>
        <span className={styles.stepDuration}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {duration}
        </span>
        <span className={styles.stepCost}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          {cost}
        </span>
      </div>
    </div>
  );
}

// Stat Counter
function StatItem({ number, label, icon }) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'profesional titulado',
    'ingeniero colegiado',
    'bachiller UNI',
    'egresado exitoso'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <AnimatedBackground />
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>
      <div className={styles.heroContent}>
        <h1>
          De estudiante a<br/>
          <span className={styles.highlight} key={titleIndex}>{titles[titleIndex]}</span>
        </h1>
        <p className={styles.heroSubtitle}>
          La guía más completa para tu proceso de egreso, bachillerato y titulación en la Universidad Nacional de Ingeniería.
        </p>
        <div className={styles.heroActions}>
          <Link to="/docs/ruta-rapida" className={styles.btnPrimary}>
            <span>Explorar guía</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link to="/docs/category/guías-por-facultad" className={styles.btnSecondary}>
            <span>Ver facultades</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Process Section - Horizontal Timeline
function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      number: 1,
      title: 'Egreso',
      duration: '~35 días',
      cost: 'S/.50-100',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      details: ['Aprobar todos los cursos', 'Certificado de idioma', 'Prácticas pre-profesionales (480h)', 'Actividades extracurriculares']
    },
    {
      number: 2,
      title: 'Bachiller',
      duration: '~2-3 meses',
      cost: 'S/.400-570',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>,
      details: ['Constancia de egreso', 'Constancias de no adeudo', 'Certificado de estudios', 'Trámite automático (Ley 2014)']
    },
    {
      number: 3,
      title: 'Título',
      duration: '~12-18 meses',
      cost: 'S/.1,000-1,200',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
      details: ['Tesis, Proyecto o Experiencia', 'Revisión Turnitin (<25%)', 'Sustentación ante jurado', 'Registro en SUNEDU']
    }
  ];

  const activeStepData = steps.find(s => s.number === activeStep);

  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>El proceso</span>
          <h2>Tu camino al título en 3 etapas</h2>
        </div>
        
        {/* Modern Process Cards */}
        <div className={styles.processCards}>
          {steps.map((step, idx) => (
            <div 
              key={step.number} 
              className={clsx(styles.processCard, activeStep === step.number && styles.processCardActive)}
              onClick={() => setActiveStep(step.number)}
            >
              <div className={styles.processCardNumber}>
                <span>{step.number}</span>
              </div>
              <div className={styles.processCardIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <div className={styles.processCardMeta}>
                <span className={styles.processDuration}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {step.duration}
                </span>
                <span className={styles.processCost}>{step.cost}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className={styles.processArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Details Panel */}
        <div className={styles.processDetails}>
          <div className={styles.detailsCard}>
            <div className={styles.detailsHeader}>
              <div className={styles.detailsIcon}>{activeStepData.icon}</div>
              <div className={styles.detailsTitle}>
                <span className={styles.detailsTag}>Etapa {activeStepData.number}</span>
                <h3>{activeStepData.title}</h3>
              </div>
              <div className={styles.detailsCost}>{activeStepData.cost}</div>
            </div>
            <div className={styles.detailsContent}>
              <ul className={styles.detailsList}>
                {activeStepData.details.map((detail, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/docs/ruta-rapida" className={styles.detailsLink}>
              Ver guía completa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
      title: 'Ruta Rápida',
      description: 'Resumen visual de todo el proceso.',
      to: '/docs/ruta-rapida'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
      title: 'Plantillas',
      description: 'Formatos oficiales listos para usar.',
      to: '/docs/plantillas'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>,
      title: 'FAQ',
      description: 'Respuestas a preguntas frecuentes.',
      to: '/docs/faq'
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Comunidad',
      description: 'Contribuye y ayuda a otros.',
      to: '/docs/aportar'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Recursos</span>
          <h2>Todo lo que necesitas</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function Home() {
  return (
    <Layout
      title="Guía de Egreso UNI"
      description="Guía estudiantil para egreso, bachillerato y titulación en la Universidad Nacional de Ingeniería."
    >
      <HeroSection />
      <main className={styles.main}>
        <ProcessSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
