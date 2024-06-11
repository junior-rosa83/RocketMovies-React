import styled from "styled-components";

export const Container = styled.header ` 
  height: 116px;
  width: 100%;
  
  display: flex;
  gap: 64px;
  align-items: center;

  padding: 24px 126px;
  border-bottom: 1px solid #3E3B47;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 24px;
    font-weight: 700;
  }

  > .box_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .box_2 {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
    
    strong {
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
      text-align: center;
    }

    img {
      width: 64px;
      height: 64px;
      border: 1px solid #3E3B47;
      border-radius: 50%;
      margin-left: 15px;
    }
  }
`
export const Profile = styled.div `

`

export const Logout = styled.div `
`


