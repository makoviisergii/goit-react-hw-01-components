import styled from 'styled-components';

const Thead = () => {
  return (
    <thead>
      <HeadBox>
        <ThBox>TYPE</ThBox>
        <ThBox>AMOUNT</ThBox>
        <ThBox>CURRENCY</ThBox>
      </HeadBox>
    </thead>
  );
};

export default Thead;

const ThBox = styled.th`
  color: #fff;
  padding: 10px;
  width: 100px;
  border: 1px solid #fff;
`;

const HeadBox = styled.tr`
  background-color: #00bcd5;
`;
