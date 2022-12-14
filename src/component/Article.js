import styled from "styled-components";

const StyledArticle = styled.article`
article{
  width: 90%;
  margin:auto;
}
#articleTitle {
  height: 40px;
  background-color: #f2f2f2;
  border: 3px solid transparent;
  border-radius: 4px;
}

#contentTitle {
  height: 150px;
  border: 1.2px solid black;
  border-radius: 2px;
  font-size:18px;

}
`;

function Article(props){
    return (
    <><StyledArticle>
    <article>
      <h2 id="articleTitle">{props.title}</h2>
      <p id="contentTitle">{props.body}</p>
    </article>
  
  </StyledArticle></>
    )}
  export default Article;