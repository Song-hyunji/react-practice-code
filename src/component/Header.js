import styled from 'styled-components';
const StyledHeader = styled.header`
  a { 
    text-decoration: none;
    color : black;
  }
  header {
    text-align: left;
    margin : auto;
    width: 80%;
    
    // border-bottom: 1px solid black;
    // box-shadow: 10px 10px 20px gray;
  }
  
`;

const Header = (props) => {
    return <>
    <StyledHeader>
      <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
      </header>
    </StyledHeader>
    </>
  }
  export default Header;