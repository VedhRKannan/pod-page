// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
        <div className="logo-wrapper">
  <Image
    src="/logo.jpeg"
    alt="How Hard Could It Be? podcast logo"
    width={180}   // choose whatever width looks good
    height={180}  // height can match the original ratio or be omitted
    className="logo-image"
  />
</div>

        </div>

        <div className="header-right">
          <div className="title-block">
            <span className="title-line-small">SOCIETY FOR</span>
            <span className="title-line-large">NATURAL</span>
            <span className="title-line-large">SCIENCES</span>
          </div>

          <nav className="nav">
            <Link href="/" className="nav-link">
              ABOUT
            </Link>
            <Link href="/episodes" className="nav-link">
              EPISODES
            </Link>
            <Link href="/#contact" className="nav-link">
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
