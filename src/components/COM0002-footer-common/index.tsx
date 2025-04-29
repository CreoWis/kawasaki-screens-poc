import { COM0002FooterCommonProps } from "./types";
import "./styles.css";

export const COM0002FooterCommon = ({
  data,
}: {
  data: COM0002FooterCommonProps;
}) => {
  const currentYear = new Date().getFullYear();
  const { logoText, navLinks } = data ?? {};
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
