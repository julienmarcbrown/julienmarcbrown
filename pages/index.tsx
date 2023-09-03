import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import About from "../components/about";
import Intro from "../components/intro";
import Contact from "../components/contact";
import Skills from "../components/skills";
import History from "../components/history";
import React from "react";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Container>
          <Intro/>
          <About/>
          <Skills/>
          <History/>
          <Contact/>
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
