import styled from "styled-components"

export const AppHeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  transition: background-color .2s;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    span {
      margin-top: 10px;
      cursor: pointer;
    }
  }
`
export const AppHeaderCenterWrapper = styled.div`
  .ant-card-body{
    padding: 0;
    position: relative;
  }
  .card {
    width: 100%;
    a, .nav-item {
      color: #f8f8f8;
    }

    .nav-item {
      cursor: pointer;
      line-height: 50px;
      display: inline-block;
      text-align: center;
      padding: 0 10px;
      span {
        color: black;
      }

      &:hover{
        opacity: .8;
        background-color: #FAFAFA;
       
      }
      
    }

  }


`
