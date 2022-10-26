import React from 'react'
import styles from '../styles/Blog.module.css'
function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <div className='blogItem'>
          <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
          <button className={styles.btn}>Read More</button>
        </div
        >
        <div
          className='blogItem'

        >
          <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
          <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
          <button className={styles.btn}>Read More</button>
        </div>
        <div className='blogItem'>
          <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic for the web</p>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog