import React from 'react'
import { Link } from 'gatsby'

import Nav from '../Nav/Nav'
import Social from '../Social/Social'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title}>
          <span>DRIMchansky</span>
          <small>web addict</small>
        </Link>
        <Nav />
      </div>
      <footer className={styles.footer}>
        <Social />
        <small>For business enquierues:</small>
        <a href="mailto:drimchansky@gmail.com">drimchansky@gmail.com</a>
      </footer>
    </aside>
  )
}

export default Sidebar