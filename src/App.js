import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Article from './component/Article';
import Nav from './component/Nav';
import Header from './component/Header';
import Create from './component/Create';
import Update from './component/Update';

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(0);
  const [topics, setTopics] = useState([]);

  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  let content = null;
  let contextControl = null;
  
  useEffect( () =>{

    //localStorage에서 값 읽어오기
    if(topics.length === 0){
      const data = JSON.parse(localStorage.getItem('data'));
      setTopics(data);
      setNextId(data.length+1);
    }


    //현재 선택된 id에 맞는 topic으로 보여주기
    if(id != null && mode != 'UPDATE'){
      topics.forEach(topic => {
          if(topic.id === id){
            setTitle(topic.title);
            setBody(topic.body);
          }
        });
    }

  })

    //welcome 모드일 때
  if(mode === 'WELCOME')
  {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } 

  //read 모드일 때 (+delete)
  else if(mode === 'READ')
  {
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <button href={'/update/'+id} onClick={ event=>{
        event.preventDefault();
        setMode('UPDATE');
        
      }}>Update</button>

      {/* DELETE 버튼. 삭제 누른 것 제외하고 배열에 담아서 배열state 갱신 */}
      <button value="Delete" onClick={()=>{
        const newTopics = topics.filter(topic => topic.id !== id)
        setTopics(newTopics);
        setMode('WELCOME');
        localStorage.setItem('data', JSON.stringify(newTopics));
      }} >Delete</button>
    </>
  } 
  
  else if(mode === 'CREATE')
  {
    console.log('create');
    content = <Create onCreate={(_title, _body)=>{
      console.log(`title : ${_title}  body : ${_body}`)

      const newTopics = [...topics, {id:nextId, title:_title, body:_body}];
      setTopics(newTopics);
      localStorage.setItem('data', JSON.stringify(newTopics)); //데이터 만든 후 storage에 반영

      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
      
    }}></Create>
  } 
  
  else if(mode === 'UPDATE')
  {
    content = <Update title={title} body={body} setTitle={setTitle} setBody={setBody}
      onUpdate={(title, body)=>{
        console.log(title, body);
        const newTopics = [...topics]
        const updatedTopic = {id:id, title:title, body:body}

        const idx = newTopics.findIndex(topic => topic.id === id);
        newTopics[idx] = updatedTopic;

        setTopics(newTopics);
        setMode('READ');
        localStorage.setItem('data', JSON.stringify(newTopics)); //storage에 수정사항 반영
    }}></Update>
  }

  return (
    <div>
      <Header title="WEB BOARD" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);

      }}></Nav>

      {content}

      <div>
        <button href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</button>

        {contextControl}
      </div>

    </div>
  );
}

export default App;