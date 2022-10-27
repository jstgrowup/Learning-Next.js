const Post = ({ post }) => {
    return <p>Post: {post.title}</p>
}
export async function  getStaticProps({ query }) {
    // console.log(query);
    const { id } = query
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    // Pass data to the page via props
    return { props: { post } }
}
export default Post