import styled from "@emotion/styled";

const ReadingDataDiv = styled.div`
  padding-bottom: 1rem;
  width: 70%;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
  .userTitle {
    font-size: 16px;
    font-style: bold;
  }
`;

const ReadingDataItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03), 0px 15px 12px rgba(0, 0, 0, 0.1);
  .title {
    margin-bottom: 10px;
    font-weight: bold;
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 10px;
        margin-bottom: 0px;
        &.admin {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      color: darkgrey;
      margin-bottom: 0px;
      &.time {
        font-size: 10px;
      }
    }
  }
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

export { ReadingDataDiv, ReadingDataItem };
