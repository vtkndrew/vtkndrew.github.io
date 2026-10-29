import { projects } from '@/entities/project';

import styles from './CatalogPage.module.css';

export function CatalogPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="/" aria-label="Проекты vtkndrew — главная">
          <img src="/favicon.svg" alt="" width="28" height="28" />
          vtkndrew<span>/ проекты</span>
        </a>
        <a className={styles.github} href="https://github.com/vtkndrew">
          GitHub ↗
        </a>
      </header>
      <main>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>Маленькие приложения. Каждый день.</p>
          <h1>Проекты vtkndrew</h1>
          <p>
            Место для полезных идей, которые стали приложениями.
            <br />
            Открывайте в браузере — на телефоне или компьютере.
          </p>
        </section>
        <div className={styles.sectionTitle}>
          <h2>Коллекция</h2>
          <span>{String(projects.length).padStart(2, '0')} / проектов</span>
        </div>
        <section aria-label="Проекты" className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardTop}>
                <img src={project.icon} alt="" width="76" height="76" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a className={styles.open} href={project.url}>
                  Открыть приложение <span aria-hidden="true">↗</span>
                </a>
                <a
                  className={styles.source}
                  href={project.repository}
                  aria-label={`Исходники: ${project.title}`}
                >
                  Исходники ↗
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer>
        <span>Сделано с интересом к простым вещам.</span>
        <span>vtkndrew · web projects</span>
      </footer>
    </div>
  );
}
