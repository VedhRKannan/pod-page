// components/Footer.tsx
export default function Footer() {
    return (
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <h2 className="footer-title">Contact</h2>
  
          <p className="footer-text">
            Got questions or want to collaborate? Reach out anytime at:
          </p>
  
          <p className="footer-email">
            <a href="mailto:hhcib@gmail.com">
              hhcib@gmail.com
            </a>
          </p>
  
          <p className="footer-copy">
            © {new Date().getFullYear()} Society for Natural Sciences Podcast
          </p>
        </div>
      </footer>
    );
  }
  