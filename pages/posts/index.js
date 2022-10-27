
import Link from 'next/link'
import React from 'react'


export default function Posts({posts}) {

  return (
        <div>
            <ul>

                {
                    posts.map((el) => {
                        return <li key={el.id}>
                            <h3 >
                                <Link href={`/posts/[id]`} as={`/posts/${el.id}`}>
                                    <a> {el.title}</a>
                                </Link>

                            </h3>
                            <h3>{el.body}</h3>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
// export async function getStaticProps() {
   
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()

   
//     return {
//         props: {
//             posts,
//         },
//     }
// }

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
  
    // Pass data to the page via props
    return { props: { posts} }
  }
