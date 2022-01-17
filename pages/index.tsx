import Head from 'next/head'

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
       <h1> Hello Guys </h1>
      </div>
     
    </div>
  )
}
