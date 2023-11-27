import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  row-gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;

  @media only screen and (min-width: 768px) {

  }
`;
export const StyledApp = styled.div`
width: 100%;
  padding: 10px;
  border-radius: 6px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    4deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(163, 140, 126, 1) 40%,
    rgba(0, 212, 255, 1) 100%
    );
    /* backdrop-filter: blur(10px); */
    
    @media only screen and (min-width: 768px) {
    margin-top: 15px;
    width: 540px;
    padding: 20px;
  }
`;
