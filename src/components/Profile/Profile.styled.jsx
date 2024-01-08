import styled from "@emotion/styled";

export const Card = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 15px;
  padding-top: 25px;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: white;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 60px;
  overflow: hidden;
`;
export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ProfileTag = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const ProfileLocation = styled.p`
  color: gray;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const StatsList = styled.ul`
  background-color: #dbdada;
  margin: 0;
  padding: 5px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  flex-basis: calc(100% / 3 - 5px);

  :nth-of-type(2) {
    border-left: 1px solid #464646;
    border-right: 1px solid #464646;
  }
`;
export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
`;
export const Quantity = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
`;
