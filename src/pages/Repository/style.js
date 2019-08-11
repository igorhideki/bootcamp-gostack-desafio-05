import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7158c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    margin-top: 20px;
    border-radius: 50%;
    width: 120px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    b {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background-color: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #bbb;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  span {
    font-size: 16px;
    color: #bbb;
    margin-right: 10px;
  }

  select {
    font-size: 12px;
  }
`;

export const Pagination = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  button {
    font-size: 14px;
    padding: 4px 6px;
    border-radius: 2px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    transition: all 0.1s linear;

    & + button {
      margin-left: 5px;
    }

    &:hover {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }

    &[disabled] {
      color: #bbb;
      cursor: not-allowed;
    }
  }
`;
