import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import config from '../../config.js';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query footerTitleQuery {
        site {
          siteMetadata {
            headerTitle
          }
        }
      }
    `}
    render={data => {

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div id="navbar" className={'topnav footerAlign'}>
              <ul className='navBarUL navBarNav navBarULRight navBarFooterText'
                  dangerouslySetInnerHTML={{ __html: config.footer.copyright }}>
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Footer;
