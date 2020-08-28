import Head from "next/head";
import styled from "styled-components";
import houses from "../../data/houses.json";
import Layout from "../../components/Layout";

const Img = styled.img`
  background-color: gray;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
`;

const StyledAside = styled.aside`
  padding: 20px;
  border: 1px solid #ccc;
`;

const House = ({ house }) => (
  <Layout>
    <Container>
      <Head>
        <title>{house.title}</title>
        <meta name="description" content={house.description} />
      </Head>
      <article>
        <Img src={house.picture} width="100%" alt={house.title} />
        <p>
          {house.type}-{house.town}
        </p>
        <p>{house.title}</p>
        <p>
          {house.rating} ({house.reviewsCount})
        </p>
      </article>
      <StyledAside>
        <h2>Add dates to places</h2>
      </StyledAside>
    </Container>
  </Layout>
);

export function getServerSideProps({ query }) {
  const { id } = query;
  const house = houses.find((_house) => _house.id === id);
  return { props: { house } };
}

export default House;
