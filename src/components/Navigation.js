import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const activeLinkStyle = {
  color: 'white',
};

function Nav() {
  const pageUrl = window.location.href.indexOf('program');
  const { menuLinks } = useSiteMetadata();
  if (pageUrl != -1) {
    return <h1>The bottom navigation</h1>;
  }
  return (
    <nav>
      <ul>
        {menuLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeLinkStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Navigation = () => (
  <div className="navigation">
    <Nav />
  </div>
);

export default Navigation;
