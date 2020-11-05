import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import ScrollArrow from "../components/scroll-arrow"

const options = {
  settings: {
    overlayColor: "#ccffcc",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#white",
    iconColor: "#003300",
    showThumbnailsButton: false,
  },
  caption: {
    captionColor: "#003300",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    // captionTextTransform: "uppercase",
  }
};

export default ({ data }) => (
  <>
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsWork.coverImage.fluid} />
        </div>
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="sheet__slider">
          <SimpleReactLightbox>
            <Slider infinite={true} slidesToShow={1} arrows>
            <SRLWrapper options={options}>
              {data.datoCmsWork.gallery.map(({ fluid }) => (
                
                <img src={fluid.src} alt={data.datoCmsWork.title} key={fluid.src}  />
                
              ))}
              </SRLWrapper>
            </Slider>
          </SimpleReactLightbox>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        
      </div>
    </article>
  </Layout>
  <ScrollArrow/>
  </>  

)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
