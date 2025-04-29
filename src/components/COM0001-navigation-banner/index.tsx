import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COM0001NavigationBannerProps } from "./types";
import "./styles.css";

export const COM0001NavigationBanner = ({
  data,
  onSearch,
}: {
  data: COM0001NavigationBannerProps;
  onSearch?: (query: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const { links, logoSrc } = data ?? {};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img src={logoSrc} alt="Logo" className="navbar__logo-img" />
        </a>

        {/* Navigation Links */}
        <nav className="navbar__links">
          {links &&
            links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={index}
                  to={link.href}
                  className={`navbar__link ${
                    isActive ? "navbar__link--active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
        </nav>

        {/* Search + Profile Icon */}
        <div className="navbar__actions">
          {onSearch && (
            <form onSubmit={handleSubmit} className="navbar__search-form">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="navbar__search-input"
              />
            </form>
          )}
          <Link
            to="/login"
            aria-label="User Profile"
            className="navbar__profile-link"
          >
            <svg
              className="navbar__profile-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A8 8 0 1117.804 5.121M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};
