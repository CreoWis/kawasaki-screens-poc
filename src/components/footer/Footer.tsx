import { IPageData } from "content/data.types";
import "./Footer.css";

export const Footer = ({ data }: { data: IPageData }) => {
  const currentYear = new Date().getFullYear();
  const { logoText, navLinks } = data.footer ?? {};
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">{logoText}</div>

        {/* Navigation Links */}
        <nav className="footer__nav">
          {navLinks &&
            navLinks.map((link, index) => (
              <a key={index} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
        </nav>

        {/* Copyright */}
        <p className="footer__copyright">
          &copy; {currentYear} {logoText}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
