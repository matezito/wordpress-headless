import client from '../libs/client';
import { gql } from '@apollo/client';

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

const Test = ( {posts} ) => {
    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.node.id}>
                        {post.node.title}
                    </div>
                ))
            }
        </>
    )
}

export default Test;