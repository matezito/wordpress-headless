import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { useContext } from 'react';
import SiteContext from './SiteContext';

const Container = ({ children, title }) => {
    const { data } = useContext(SiteContext);
    return (
        <>
        <Head>
            <title>{title ? `${title} - `: ''} {data.generalSettings.title}</title>
        </Head>
        <header>
            <Link href="/">
                <a className="logo"><Image src={data.logoUrl} width={300} height={70} layout="responsive" /></a>
            </Link>
        </header>
        {children}
        </>
    )
}
export default Container;