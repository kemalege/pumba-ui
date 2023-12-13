import React from 'react'
import styles from './styles.module.css'

// The Button component accepts two props: children and type.
// The default value for the type prop is 'default'.
export const Button = ({ children, type = 'default', ...restProps }) => {
  return (
    <button className={styles[type]} {...restProps}>
      {children}
    </button>
  )
}
