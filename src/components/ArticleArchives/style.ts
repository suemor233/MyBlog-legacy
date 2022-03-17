import styled from "styled-components"

export const ArticleArchivesWrapper = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-card {

    padding: 3rem;
    border-radius: .5rem;
  }

  .article-length {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .article-columns {
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    transition: all .3s linear;
  }


  .article-columns:hover {
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: #F8F9FA;
    justify-content: space-between;
    padding: 1rem;
    color: #30A9DE;
  }

  .article-columns span {
    font-size: 1rem;
  }
`
