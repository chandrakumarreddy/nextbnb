import React from "react";
import Head from "next/head";
import styled from "styled-components";
import House from "../components/House";
import houses from "../data/houses.json";

const Houses = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 300px 300px;
  grid-gap: 40px;
`;

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Stay away room rentals" />
      </Head>
      <h2>Places to Stay</h2>
      <Houses>
        {houses.map((house) => (
          <House key={house.id} {...house} />
        ))}
      </Houses>
    </div>
  );
}
