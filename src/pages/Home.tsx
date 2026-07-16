import TargetReticle from '../components/TargetReticle';
import SectionCard from '../components/SectionCard';
import { sections } from '../data/sections';
import './Home.css';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Довідник для української аудиторії</p>
            <h1>
              Таргетована реклама <span className="accent">від А до Я</span>
            </h1>
            <p className="hero-lead">
              Пояснюємо просту мову, як працює таргет: кого і як бачить ваша
              реклама, де вона показується та чому одна аудиторія відрізняється
              від іншої. Розділи додаються поступово — від базових понять до
              практичних інструментів.
            </p>
            <a href="#glossary" className="hero-cta">
              Почати з основ
            </a>
          </div>
          <TargetReticle />
        </div>
      </section>

      <section className="glossary" id="glossary">
        <div className="container">
          <h2>Розділи</h2>
          <p className="glossary-lead">
            Кожен розділ — окрема тема. Список поповнюється, тож повертайтеся
            за новими матеріалами.
          </p>
          <div className="glossary-grid">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
