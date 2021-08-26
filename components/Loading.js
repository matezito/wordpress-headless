import Image from 'next/image';
import loader from '../public/img/loading.gif';
import Head from 'next/head';
const Loading = () => {
    return (
        <>
        <Head>
            <title>Cargando...</title>
        </Head>
        <div className="loading">
            <Image src={loader} width={200} height={200} layout="intrinsic" className="loader-image" />
        </div>
        </>
    )
}

export default Loading;