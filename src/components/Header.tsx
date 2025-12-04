// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        
        {/* LEFT: LOGO */}
        <div className="header-left">
          <Image
            src="/logo.jpeg"
            alt="How Hard Could It Be? podcast logo"
            width={180}
            height={180}
            className="logo-image"
          />
        </div>

        {/* MIDDLE: PODCAST TITLE */}
        <div className="header-middle">
          <h1 className="podcast-title">How Hard Could It Be?</h1>
        </div>

        {/* RIGHT: SOCIETY TITLE + NAV */}
        <div className="header-right">
          <div className="title-block">
            <span className="title-line-small">SOCIETY FOR</span>
            <span className="title-line-large">NATURAL</span>
            <span className="title-line-large">SCIENCES</span>
          </div>

          <nav className="nav">
            <Link href="/" className="nav-link">ABOUT</Link>
            <Link href="/episodes" className="nav-link">EPISODES</Link>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>
        </div>

      </div>
    </header>
  );
}
