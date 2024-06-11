import styled from "styled-components";
import starActive from "../../assets/starActive.svg"
import starOff from "../../assets/starOff.svg"

export const Container = styled.div `
  height: 222px;
  width: 100%;
  padding: 32px;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
  }

  > p {
    height: 40px;
    overflow: hidden;
    color: #999591;
    text-overflow: ellipsis;
    white-space: nowrap;    
    font-size: 16px;
    margin: 15px 0;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
export const Stars = styled.div `
  display: flex;
  margin-top: 8px;
  
  > div + div {
    margin-left: 6px;
  }
`
