import Link from 'next/link'
import React from 'react'
import styles from "./PostsComponent.module.css"
function PostsComponent({ id, title, body }) {
  return (
    <div>
      <h3 className={styles.postheading} >
        <Link href={`/posts/[id]`} as={`/posts/${id}`}>
          <a className={styles.postLink}> {title}</a>
        </Link>
      </h3>
      <h3>{body}</h3>
    </div>
  )
}

export default PostsComponent