// import table from 'react-bootstrap/Table';
import styled from "styled-components";

const StyledNav = styled.nav`
table {
  width: 100%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
}
th, td {
  border-bottom: 1px solid #444444;
  padding: 10px;
  cursor: pointer;
}
tr:hover {
  color: #1851ff;
  font-weight: bold;
}
`;
//목차 보여주기
//for -> foreach 변경
function Nav(props){
    const lis = []
    props.topics.forEach(topic => {
        lis.push(
        <tr key={topic.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
          <th id={topic.id}>{topic.id}</th>
          <td id={topic.id}>{topic.title}</td>
        </tr>
        )
    });

    return <>
    <StyledNav>
    <nav>
      <table className="table">
        <thead></thead>
        <tbody>{lis}</tbody>
      </table>
    </nav>
    </StyledNav>
    </>
  }

export default Nav;