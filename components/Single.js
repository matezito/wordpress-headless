import Image from 'next/image';
import Container from './Container';

const Single = ({ post }) => {
    return (
        <>
            <Container title={post.title}>
                <h1>{post.title}</h1>

                <Image src={post.featuredImage.node.sourceUrl} width={1310} height={873} layout="responsive" />

                <div dangerouslySetInnerHTML={{
                    __html: post.content
                }}></div>
            </Container>
        </>
    )
}

export default Single;