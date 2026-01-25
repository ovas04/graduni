import React, { useEffect, useState } from 'react';

export const GITHUB_CONTRIBUTORS_API =
  'https://api.github.com/repos/ovas04/graduni/contributors?per_page=100';
const MAX_VISIBLE = 6;

export default function CreditsBar() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(GITHUB_CONTRIBUTORS_API)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('No fue posible cargar los créditos.');
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

  if (loading) {
    return (
      <div className="creditsBar" aria-live="polite">
        <span className="creditsStatus">Cargando créditos…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="creditsBar" role="status">
        <span className="creditsStatus">Créditos: {error}</span>
      </div>
    );
  }

  if (!contributors.length) {
    return null;
  }

  const visibleContributors = contributors.slice(0, MAX_VISIBLE);

  return (
    <div className="creditsBar" role="contentinfo">
      <div className="creditsContainer">
        <span className="creditsLabel">Créditos:</span>
        <ul className="creditsList">
          {visibleContributors.map((person) => (
            <li key={person.id} className="creditsItem">
              <img
                src={person.avatar_url}
                alt={`Avatar de ${person.login}`}
                className="creditsAvatar"
                loading="lazy"
              />
              <a
                href={person.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perfil de GitHub de ${person.login}`}
              >
                {person.login}
              </a>
              <span className="creditsCount">{person.contributions} contribuciones</span>
            </li>
          ))}
        </ul>
        {contributors.length > MAX_VISIBLE && (
          <a
            className="creditsMoreLink"
            href="https://github.com/ovas04/graduni/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todo el equipo
          </a>
        )}
      </div>
    </div>
  );
}
