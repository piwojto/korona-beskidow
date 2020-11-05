import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import ScrollArrow from "../components/scroll-arrow"

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }



const IndexPage = ({ data: { about } }) => (
  <>
  <Layout>
    <article className="sheet">
    
      <HelmetDatoCms seo={about.seoMetaTags} />
      <Helmet          
                    meta={[
                        { name: 'description', content: 'Korona Beskidów Polskich. Uwielbiasz górskie wędrówki, a może górskie przejażdżki rowerowe? Przy okazji zdobywania kolejnych szczytów, możesz także zdobywać odznaki. Strona internetowa everART' },
                        { name: 'keywords', content: 'profesjonalne strony internetowe, responsywne strony www, strony internetowe Wadowice' },
                        { name: 'author', content: 'projekt i wykonanie: www.ever-art.pl'},
                    ]}
                >
                    <html lang="pl"/>
                    <link rel="canonical" href="https://beskidy.netlify.app"></link>
                </Helmet>

      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="sheet__lead">{about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
       <ul className="homeList">
        <li>
          <Link to="/beskidy/babia-gora" title="Babia Góra"><h2>Babia Góra (Beskid Żywiecki) – 1725 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/tarnica" title="Tarnica"><h2>Tarnica (Bieszczady) – 1346 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/turbacz" title="Turbacz"><h2>Turbacz (Gorce) – 1310 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/radziejowa" title="Radziejowa"><h2>Radziejowa (Beskid Sądecki) – 1262 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/skrzyczne" title="Skrzyczne"><h2>Skrzyczne (Beskid Śląski) – 1257 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/mogielica"><h2>Mogielica (Beskid Wyspowy) – 1171 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/lackowa"><h2>Lackowa (Beskid Niski) – 997 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/czupel"><h2>Czupel (Beskid Mały) – 933 m n.p.m.</h2></Link>
        </li>
        <li>
          <Link to="/beskidy/lubomir"><h2>Lubomir (Beskid Makowski) – 903 m n.p.m.</h2></Link>
        </li>
      </ul>
      <hr/> 
        <div className="contact">
          <p>projekt i realizacja: <a href="https://everart.pl" target="_blank" title="Strony internetowe everART">everART</a></p>
        </div>
      </div>
      
    </article>
    
  </Layout>
  <ScrollArrow/>
  </>  
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
