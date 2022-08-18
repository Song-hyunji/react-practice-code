import styled from 'styled-components';

const StyledCreate = styled.article`
  #titleInput {
    width: 90%;
    height: 40px;
    background-color: #f2f2f2;
    border: 3px solid transparent;
    border-radius: 4px;
  }
  
  #contentInput {
    width: 90%;
    height: 150px;
    border: 1.2px solid black;
    border-radius: 2px;

  }
`;

function Create(props){
  console.log('create 왔음');
    return (
      <><StyledCreate>
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        
        <p><input id="titleInput" type="text" name="title" placeholder="WRITE TITLE"/></p>
        <p><textarea id="contentInput" name="body" placeholder="WRITE CONTENT"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
    </StyledCreate></>
    )
  }

export default Create;