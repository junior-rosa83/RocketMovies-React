import styled from "styled-components";

export const Container = styled.div `
  > p {
    height: 363px;
    font-size: 16px;
    text-align: justify;
    font-weight: 400;
    margin: 30px 123px 0;
    overflow-y: auto;
  }
`

export const ContentButton = styled.div `
  margin: 30px 123px 0;
`

export const NameFilm = styled.div `
  margin: 30px 123px 0;
  display: flex;
  align-items: center;
  gap: 20px;

  > .stars {
    display: flex;
    gap: 10px;
  }
`

export const Profile = styled.div `
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 30px 123px 0;
  
  > .name {
    display: flex;
    align-items: center;
    gap: 8px;
    
    img {
      width: 16px;
      height: 16px;
      border-radius: 50px;
      border: 1px solid #3E3B47;
    }
    
    p {
      color: #F4EDE8;
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
    }
  }

  > .date {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      color: #F4EDE8;
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
    }
  }
`

export const Tags = styled.section `
  margin: 30px 123px 0;
  display: flex;
  gap: 10px;
`