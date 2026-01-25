import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { GITHUB_CONTRIBUTORS_API } from '../../components/CreditsBar';
import styles from './index.module.css';

// Founders list with full info
const FOUNDERS = [
  {
    github: 'ovas04',
    name: 'Oscar Lobaton Salas',
    linkedin: 'https://www.linkedin.com/in/oscar-lobaton-salas/',
    image: '/img/founders/oscar-lobaton-salas.jpeg',
  },
  {
    github: 'RonaldoNolworthy',
    name: 'Ronaldo Nolasco Chavez',
    linkedin: 'https://www.linkedin.com/in/ronaldo-nolasco-chavez',
    image: '/img/founders/ronaldo-nolasco-chavez.jpeg',
  },
  {
    github: 'diegozh',
    name: 'Diego Zevallos Huaman',
    linkedin: 'https://www.linkedin.com/in/diego-zevallos',
    image: '/img/founders/diego-zevallos-huaman.jpeg',
  },
  {
    github: 'ademarfr',
    name: 'Ademar Fatama Ruiz',
    linkedin: 'https://www.linkedin.com/in/ademar-fatama-ruiz/',
    image: '/img/founders/ademar-fatama-ruiz.jpeg',
  },
];

// Get GitHub usernames for filtering
const FOUNDER_USERNAMES = FOUNDERS.map((f) => f.github.toLowerCase());

export default function ComunidadPage() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(GITHUB_CONTRIBUTORS_API)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('No fue posible cargar la lista de créditos.');
        }
        const data = await response.json();
        if (isMounted) {
          setContributors(data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout title="Comunidad" description="Reconoce a quienes hacen realidad GradUNI.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <h1>Comunidad GradUNI</h1>
          <p>
            GradUNI existe gracias al esfuerzo de estudiantes y egresados que documentan cada paso del
            proceso de egreso. Aquí encontrarás a quienes han aportado activamente al proyecto.
          </p>
        </section>

        {loading && (
          <div className={styles.status} aria-live="polite">
            Cargando créditos…
          </div>
        )}

        {error && !loading && (
          <div className={clsx(styles.status, styles.error)} role="status">
            {error}
          </div>
        )}

        {!loading && !error && contributors.length === 0 && (
          <div className={styles.status} role="status">
            Aún no hay créditos para mostrar. ¡Sé la primera persona en contribuir!
          </div>
        )}

        {/* Founders Section - Always show */}
        <section className={styles.foundersSection}>
          <div className={styles.sectionHeader}>
            <h2>Fundadores</h2>
            <p>Quienes iniciaron el proyecto GradUNI.</p>
          </div>
          <ul className={styles.foundersList}>
            {FOUNDERS.map((founder) => (
              <li key={founder.github} className={styles.founderCard}>
                <img
                  src={founder.image}
                  alt={`Avatar de ${founder.name}`}
                  className={styles.founderAvatar}
                  loading="lazy"
                />
                <div className={styles.founderBody}>
                  <span className={styles.founderName}>{founder.name}</span>
                  <span className={styles.founderRole}>Fundador</span>
                  <div className={styles.founderLinks}>
                    <a
                      href={`https://github.com/${founder.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Perfil de GitHub de ${founder.name}`}
                      className={styles.founderLink}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Perfil de LinkedIn de ${founder.name}`}
                      className={styles.founderLink}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contributors Section - Always show */}
        <section className={styles.contributorsSection} aria-live="polite">
          <div className={styles.sectionHeader}>
            <h2>Colaboradores</h2>
            <p>
              La lista se actualiza automáticamente desde GitHub para reconocer cada contribución al
              repositorio.
            </p>
          </div>
          {!loading && !error && contributors.length > 0 ? (
            <>
              <ul className={styles.contributorsGrid}>
                {contributors.map((person) => (
                  <li key={person.id} className={styles.contributorCard}>
                    <img
                      src={person.avatar_url}
                      alt={`Avatar de ${person.login}`}
                      className={styles.avatar}
                      loading="lazy"
                    />
                    <div className={styles.contributorBody}>
                      <a
                        href={person.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir perfil de GitHub de ${person.login}`}
                      >
                        {person.login}
                      </a>
                      <span className={styles.count}>{person.contributions} contribuciones</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                className={styles.allContributorsLink}
                href="https://github.com/ovas04/graduni/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver detalles en GitHub
              </a>
            </>
          ) : (
            <div className={styles.emptyContributors}>
              <p>Aún no hay colaboradores adicionales. ¡Sé el primero en contribuir!</p>
              <a className={styles.contributeButton} href="/docs/guias/aportar">
                Aprende cómo aportar
              </a>
            </div>
          )}
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2>¿Quieres ser parte de la comunidad?</h2>
            <p>
              Comparte tus apuntes, actualiza información o envía mejoras a las guías. Cada aporte ayuda a
              que más estudiantes egresen sin contratiempos.
            </p>
            <a className={styles.ctaButton} href="/docs/guias/aportar">
              Aprende cómo aportar
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
