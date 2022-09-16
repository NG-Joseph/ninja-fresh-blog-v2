import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'
import { Carousel } from 'react-responsive-carousel'

const Hero = ({ images, title, content }) => (
  <div className={styles.hero}>
    {images && (
      <Carousel
        autoPlay
        infiniteLoop
        ShowThumbs={false}
        renderThumbs={() => null}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img className={styles.image} alt={title} src={image} />
          </div>
        ))}
      </Carousel>
    )}
    <div
      className={styles.details}
      style={{
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content} style={{ fontSize: '20px', margin: "0 0 10px 10px" }}>
          {renderRichText(content)}
        </div>
      )}
    </div>
  </div>
)

export default Hero
