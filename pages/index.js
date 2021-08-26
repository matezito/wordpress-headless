import Head from 'next/head';
import client from '../libs/client';
import { gql } from '@apollo/client';
import Loop from '../components/Loop';
import Container from '../components/Container';


export async function getStaticProps()
{
  const { data } = await client.query({
    query: gql`
     query Posts{
      posts {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
    `
  });

  const posts = data.posts.edges.map((node) => node);

  return {
    props: {
      posts
    }
  }
}

const Index = ({ posts }) => {
  return (
    <>
      <Container title="Home">
          <div className="container">
            <Loop posts={posts} />
          </div>
      </Container>
    </>
  )
}

export default Index;