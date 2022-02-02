import React from 'react'

import * as styles from './Container.module.css'

const Container = ({ children, size, spacing }) => {
  return <div className={`${styles.container} ${size ? styles[size] : ''} ${size ? styles[spacing] : ''}`}>{children}</div>
}

export default Container
