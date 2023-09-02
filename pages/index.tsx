import Container from '../components/container'
import PostsDisplay from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Biography from "../components/biography";
import SectionSeparator from "../components/section-separator";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Julien Marc Brown`}</title>
        </Head>
        <Intro/>
        <Container>
          <Biography/>
          <SectionSeparator/>
          {allPosts.length > 0 && <PostsDisplay posts={allPosts.slice()} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
