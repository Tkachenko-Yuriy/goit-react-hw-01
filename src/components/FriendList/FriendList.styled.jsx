import styled from "@emotion/styled";

export const Friends = styled.ul`
  padding: 10px;
  margin-top: 0px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid grey;
  border-radius: 15px;
  background-color: white;
`;

export const Friend = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 70px;

  padding: 10px;
  border: 1px solid grey;
  border-radius: 15px;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), 1px 1px 5px rgba(255, 255, 255, 1);

  :not(:last-child) {
    margin-right: 5px;
  }
`;
