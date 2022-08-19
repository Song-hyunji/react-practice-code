import styled from 'styled-components';

const StyledUpdate = styled.article`
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

function Update(props){
    // const [title, setTitle] = useState(props.title);
    // const [body, setBody] = useState(props.body);
    const {title, body, setTitle, setBody} = props;
    console.log(props);

    return (
    <><StyledUpdate>
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input id="titleInput" type="text" name="title" placeholder="title" value={title} onChange={event=>{
          setTitle(event.target.value);
        }}/></p>
        <p><textarea id="contentInput" name="body" placeholder="body" value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
    </StyledUpdate></>
    )
  }

export default Update;