import { Link } from 'react-router-dom';
import type { GuideSection } from '../data/sections';
import './SectionCard.css';

export default function SectionCard({ section }: { section: GuideSection }) {
  const number = String(section.order).padStart(2, '0');

  const content = (
    <>
      <div className="card-top">
        <span className="card-number">{number}</span>
        {!section.ready && <span className="card-tag">незабаром</span>}
      </div>
      <h3 className="card-title">{section.title}</h3>
      <p className="card-summary">{section.summary}</p>
    </>
  );

  if (!section.ready) {
    return <div className="section-card is-locked">{content}</div>;
  }

  return (
    <Link to={section.path} className="section-card">
      {content}
    </Link>
  );
}
