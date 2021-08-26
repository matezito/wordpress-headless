import '../styles/globals.css';
import SiteContex from '../components/SiteContext';

import { gql } from '@apollo/client';
import client from '../libs/client';

//efecto cargando entre paginas
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
//efecto cargando entre paginas

function MyApp({ Component, pageProps, data }) {

  //efecto cargando entre paginas
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  //efecto cargando entre paginas

  return pageLoading ? <Loading /> : <SiteContex.Provider value={{ data }}><Component {...pageProps} /></SiteContex.Provider>
}

MyApp.getInitialProps = async (ctx) => {
  try {

    const { data, loading, error } = await client.query({
      query: gql`
         query MyQuery {
          generalSettings {
            title
          }
          faviconUrl
          logoUrl
        }`
    });

    if (loading) return <div>Cargando</div>;

    if (error) return <div>Error</div>;

    return {
      data
    }

  } catch (e) {
    return {
      data
    }
  }
}

export default MyApp
