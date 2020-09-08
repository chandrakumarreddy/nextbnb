import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import houses from '@data/houses.json';
import { dummy } from '@redux/actions/dummy';
import House from '../components/House';
import { wrapper } from '@redux/store';

const Houses = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 300px 300px;
    grid-gap: 40px;
`;

function Index() {
    return (
        <>
            <Head>
                <title>Home page</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Stay away room rentals" />
            </Head>
            <h2>Places to Stay</h2>
            <Houses>
                {houses.map((house) => (
                    <House key={house.id} {...house} />
                ))}
            </Houses>
        </>
    );
}

Index.getInitialProps = async ({ store }) => {
    await store.dispatch(dummy(1));
    return { props: {} };
};

export default wrapper.withRedux(Index);
