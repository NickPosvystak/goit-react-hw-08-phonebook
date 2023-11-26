import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: red;
`;

export const Demo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  margin-right: auto;

  margin-left: auto;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: floralwhite;
  font-size: 16px;

  padding: 4px 10px;
  margin-bottom: 15px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 350ms;
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      hsla(240, 7%, 97%, 1) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px) translateX(6px);
    transition: 250ms;
  }

  /* p {
    margin-left: auto;
    margin-right: 20px;
    font-size: 16px;
    width: 100%;
    text-align: start;
  } */
`;
export const StyledName = styled.p`
  margin-left: auto;
  margin-right: 20px;
  font-size: 16px;
  width: 100%;
  text-align: start;
`;
