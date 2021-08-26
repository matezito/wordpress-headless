import client from '../../libs/client';
import { gql } from '@apollo/client';
import Single from '../../components/Single';
import Container from '../../components/Container';

const Slug = ({post}) => {
    return (
        <>
            <Single post={post} />
        </>
    )
}

export async function getStaticPaths()
{

    const { data } = await client.query({
        query: gql`
            query {
                posts {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `
    });

    const posts = data.posts.edges.map((node) => node);

    const paths = posts.map((post) => ({
        params: { slug: post.node.slug },
      }))

      return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
    
    const { data } = await client.query({
        query: gql`
            query MyQuery{
                post(id: "${params.slug}", idType: SLUG) {
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    title
                    content
                }
           }

        `
    });
    
    const post = data.post;

    return {
        props: {
            post
        }
    }
}
export default Slug;