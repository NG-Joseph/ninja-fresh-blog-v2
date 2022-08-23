import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by <a href="https://josephnwokotubo.xyz/">Joseph Nwokotubo</a> and{' '}
      <a href="#">Saheed Abdulraheem</a> &middot;{' '}
    </div>
  </Container>
)

export default Footer
