/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        // <div className={`container ${showMenu ? "is-open" : ""}`}>
        <div className="container">
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
                    <nav role="navigation">
                    <div className="mobile-header">
                  {/* <div className="mobile-header__menu">     */}
                   
                      <div className={`menuToggle ${showMenu ? "is-open" : ""}`}>  
                      {/* <input type="checkbox" />   */}
                      <button
                          onClick={e => {
                            e.preventDefault();
                            setShowMenu(!showMenu);
                          }}>
                          <span></span>
                          <span></span>
                          <span></span>                       
                        {/* <svg width="24" height="24" viewBox="0 0 512 512"><path d="M438 0H74C33.196 0 0 33.196 0 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74S478.804 0 438 0zm0 108H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34zM438 182H74c-40.804 0-74 33.196-74 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74s-33.196-74-74-74zm0 108H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34zM438 364H74c-40.804 0-74 33.196-74 74s33.196 74 74 74h264c11.046 0 20-8.954 20-20s-8.954-20-20-20H74c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34c-11.046 0-20 8.954-20 20s8.954 20 20 20c40.804 0 74-33.196 74-74s-33.196-74-74-74z" fill="#242943"></path></svg> */}
                      </button>
                  
                        <ul 
                        onClick={e => {
                          e.preventDefault();
                          setShowMenu(!showMenu);
                        }}
                        className={`menu ${showMenu ? "is-open" : ""}`}>
                        <svg className="mobile" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 142.447 142.447">
                          <defs/>
                          <g>
                            <path fill="#FFFFFF" d="M106.206 36.242a7.502 7.502 0 00-10.607 0L71.01 60.83 46.779 36.598a7.5 7.5 0 00-10.607 10.607l24.231 24.231-23.875 23.875a7.5 7.5 0 1010.608 10.607L71.01 82.044l24.231 24.231a7.48 7.48 0 005.304 2.196 7.5 7.5 0 005.304-12.803L81.618 71.437l24.588-24.588a7.5 7.5 0 000-10.607z"/>
                          </g>
                        </svg>
                         
                          <h6 className="sidebar__title">
                            <Link to="/beskidy/">{data.datoCmsSite.globalSeo.siteName}</Link>
                          </h6>
                          <li>
                            <Link to="/">Strona główna</Link>
                          </li>
                          <li>
                            <Link 
                            to="/beskidy/babia-gora">Babia Góra</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/tarnica">Tarnica</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/turbacz">Turbacz</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/radziejowa">Radziejowa</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/skrzyczne ">Skrzyczne</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/mogielica">Mogielica</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/lackowa">Lackowa</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/czupel">Czupel</Link>
                          </li>
                          <li>
                            <Link to="/beskidy/lubomir">Lubomir</Link>
                          </li>
                          {/* </div> */}
                        </ul>
                      </div>
                      {/* </div> */}
                      
                      </div> 
                     {/* </div> */}
                     </nav>

          {/* <div className="container__body">
            <div className="container__mobile-header"> */}
                           
                  {/* </div>
                </div> */}
              {/* </div>
            </div> */}
            {children}
          {/* </div> */}
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
