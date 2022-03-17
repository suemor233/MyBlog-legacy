import styled from "styled-components"

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F7F7F7;
  min-height: 1000px;
  @keyframes transformAnimateLeft {
    0%{ transform: translateX(-100%) }
    100%{ transform: translateX(0) }
  }

  @keyframes transformAnimateRight {
    0%{ transform: translateX(100%) }
    100%{ transform: translateX(0) }
  }
  
  .article-left {
    flex: 2;
    margin-right: 20px;
    animation: transformAnimateLeft .8s;
    
  }


  .article-center {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    animation: transformAnimateLeft .8s;

  }

  .article-right {
    flex: 5;
    animation: transformAnimateRight .8s;
  }
  
  .article-title{
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
  }
`
