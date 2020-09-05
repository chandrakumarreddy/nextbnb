import { useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import styled from "styled-components";
import dynamic from "@base/Dynamic/Dynamic";
import houses from "@data/houses.json";
import { numberOfNightsBetweenDates } from "@utils/dates";
import Modal from "@base/Modal/Modal";

const Datepicker = dynamic(() => import("@base/Datepicker"), {
  ssr: false,
});
const Register = dynamic(() => import("@components/Auth/Register"), {
  ssr: false,
});
const Login = dynamic(() => import("@components/Auth/Login"), {
  ssr: false,
});

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

const ReserveButton = styled.button`
  background-color: rgb(255, 90, 95);
  color: #fff;
  border: none;
  font-size: 13px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
`;

let bookedDays = 1;

const House = ({ house }) => {
  const modalType = useSelector(({ modal }) => modal);
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [dateChosen, setDateChosen] = useState(false);
  const handleStartDate = (day) => {
    setStartDate(day);
    bookedDays = numberOfNightsBetweenDates(day, endDate);
    if (bookedDays < 1) {
      const newEndDate = new Date(day);
      newEndDate.setDate(newEndDate.getDate() + 1);
      setEndDate(newEndDate);
    }
    setDateChosen(true);
  };
  const handleEndDate = (day) => {
    setEndDate(day);
    bookedDays = numberOfNightsBetweenDates(startDate, day);
    setDateChosen(true);
  };
  return (
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
        {dateChosen && (
          <div>
            <h2>Price per night</h2>
            <p>${house.price}</p>
            <h2>Total price for booking</h2>{" "}
            <p>${(bookedDays * Number(house.price)).toFixed(2)}</p>
            <ReserveButton className="reserve" onClick={() => setOpen(true)}>
              Reserve
            </ReserveButton>
          </div>
        )}
      </StyledAside>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          {modalType === "login" ? <Login /> : <Register />}
        </Modal>
      )}
    </Container>
  );
};

export function getServerSideProps({ query }) {
  const { id } = query;
  const house = houses.find((_house) => _house.id === id);
  return { props: { house } };
}

export default House;
