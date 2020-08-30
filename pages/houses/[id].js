import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import houses from "../../data/houses.json";
import Layout from "../../components/Layout";
import Datepicker from "../../components/base/Datepicker";
import { numberOfNightsBetweenDates } from "../../utils/dates";

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

const Label = styled.label`
  padding: 10px;
`;

const DatesContainer = styled.div`
  > div {
    display: grid;
    grid-template-columns: 30% 70%;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .DayPickerInput input {
    width: 140px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
`;

const House = ({ house }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const handleStartDate = (day) => {
    setStartDate(day);
    if (numberOfNightsBetweenDates(day, endDate) < 1) {
      const newEndDate = new Date(day);
      newEndDate.setDate(newEndDate.getDate() + 1);
      setEndDate(newEndDate);
    }
  };
  const handleEndDate = (day) => {
    setEndDate(day);
  };
  return (
    <Layout>
      <Container>
        <Head>
          <title>{house.title}</title>
          <meta name="description" content={house.description} />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-day-picker/lib/style.css"
          />
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
          <DatesContainer>
            <div>
              <Label>From </Label>
              <Datepicker
                id="from"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>
            <div>
              <Label>To </Label>
              <Datepicker
                id="to"
                value={endDate}
                onChange={handleEndDate}
                disabled={[startDate, { before: startDate }]}
              />
            </div>
          </DatesContainer>
        </StyledAside>
      </Container>
    </Layout>
  );
};

export function getServerSideProps({ query }) {
  const { id } = query;
  const house = houses.find((_house) => _house.id === id);
  return { props: { house } };
}

export default House;
