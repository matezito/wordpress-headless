import Link from 'next/link';
import Image from 'next/image';

const Loop = ({ posts }) => {
    return (
        <>
            {
                posts.map((post) => (
                    
                    <div key={post.node.id} className="post-item">
                        <Link href={`/posts/${post.node.slug}`}>
                            <a><Image src={post.node.featuredImage.node.sourceUrl} width={400} height={300} layout="responsive" /></a>
                        </Link>
                        
                        <Link href={`/posts/${post.node.slug}`}>
                            <a><h3 className="loop-title">{post.node.title}</h3></a>
                        </Link>
                        
                        <Link href={`/posts/${post.node.slug}`}>
                            <a className="view-more">Ver Post</a>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Loop;