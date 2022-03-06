import styled from "styled-components"

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F7F7F7;
  height: 100vh;
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
  
  .article-right {
    flex: 1;
    animation: transformAnimateRight .8s;
  }
`
