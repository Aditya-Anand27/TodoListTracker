import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment, Radio } from 'semantic-ui-react';
import agent from '../agents/agent';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export default function ListTodo(props){

    const [actlist,setactlist] = useState([])

    function handleonClick(act){
        console.log(act)
        agent.Activities.update(act.id, {Id: act.id, Name: act.name, Date: act.date, isComplete: !act.isComplete})
    }

    function handleonClickDelete(no){
        agent.Activities.del(no);
    }

    useEffect(() => {
        const today = new Date();
        const fetchData = async () => {
            const data = await agent.Activities.list();
            const check = (x) =>  x.isComplete === false;
            let x=[];
            for(let i=0;i<data.length;i++){
                if(check(data[i])){
                    x.push(data[i]);
                }
            }
            console.log(x);
            setactlist(x);
          }
          fetchData();
      }, [actlist]);

    return(
        <>
        {actlist.map(act => (
                 <Segment padded='very' key={act.Id}>
                     <Item key={act.Id}>
                         <Item.Header>
                             {act.name}
                         </Item.Header>
                         <Item.Description>
                             <Radio toggle defaultChecked={act.isComplete} onClick={() => handleonClick(act)}/>
                             <p>{act.date}</p>
                         </Item.Description>
                         <Item.Extra>
          <Button style={{textAlign: "center"}} secondary floated='right' onClick={() => handleonClickDelete(act.id)}>
              Delete 
            <Icon name='right chevron' />
          </Button>
          <Button style={{textAlign: "center"}} secondary floated='right' onClick={() => props.setact(act.id)}>
              View Notes 
            <Icon name='right chevron' />
          </Button>
          </Item.Extra>
                     </Item>
                 </Segment> 
                ))}

        </>
       

    )

}
