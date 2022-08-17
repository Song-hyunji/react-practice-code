//목차 보여주기
//for -> foreach 변경
function Nav(props){
    const lis = []
    props.topics.forEach(topic => {
        lis.push(<li key={topic.id}>
            <a id={topic.id} href={'/read/'+topic.id} onClick={event=>{
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }}>{topic.title}</a>
          </li>)
    });
    // for(let i=0; i<props.topics.length; i++){
    //   let t = props.topics[i];
    //   lis.push(<li key={t.id}>
    //     <a id={t.id} href={'/read/'+t.id} onClick={event=>{
    //       event.preventDefault();
    //       props.onChangeMode(Number(event.target.id));
    //     }}>{t.title}</a>
    //   </li>)
    // }
    return <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  }

export default Nav;