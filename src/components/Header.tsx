import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-ring" />
            <span className="logo-dot" />
          </span>
          <span className="logo-text">
            Таргет <span className="logo-accent">від А до Я</span>
          </span>
        </Link>

        <nav className="header-nav">
          <Link to="/">Головна</Link>
          <Link to="/#glossary">Розділи</Link>
        </nav>
      </div>
    </header>
  );
}
