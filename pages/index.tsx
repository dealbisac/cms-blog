import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  { title: 'React Test', excerpt: 'Learn React Test'},
  { title: 'React Test with Tailwind', excerpt: 'Learn React Test with Tailwind'}

];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
       {posts.map((post, index) => (
         <div>
           {post.title}
           {post.excerpt}
         </div>
       ))}
      </div>
     
    </div>
  )
}
