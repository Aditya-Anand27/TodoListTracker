import { Fragment, useEffect, useState } from 'react';
import { Button, Icon, Item, Segment, Radio } from 'semantic-ui-react';
import agent from '../agents/agentnotes';
import ModifyNote from './ModifyNote';
import Popup from 'reactjs-popup';
import AddNote from './AddNote';

const floatstyle = {
	position:"fixed",
	width:30,
	height:30,
	bottom:585,
	right:430,
	backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
	color:"#FFF",
	borderRadius:30,
	textAlign:"center",
}
const popupstyle = {
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
    textAlign:"center",
    color: "white"
}

const myfloat = {
	marginTop: 10
}




export default function NoteItem(props){
    const [notelist,setnotelist] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await agent.Activities.list();
            const selecteddata = data.filter(x => x.itemId == props.act);

            setnotelist(selecteddata);
          }
          fetchData();
      }, [notelist]);

      function handleonClickDelete(no){
        agent.Activities.del(no);
    }

   
    return(
        <>
       {props.act && <h1>Notes</h1>}
        {notelist.map(act => (
                 <Segment key={act.Id}>
                     <Item key={act.Id}>
                         <Item.Description>
                             {act.note}
                         </Item.Description>
                     </Item>
                     <Item.Extra>
          <Icon name='delete' float="right" onClick={() => handleonClickDelete(act.id)}>
             <br/>
          </Icon>
          <Popup trigger={<button>Edit</button>}>
         <ModifyNote act={act} />
    </Popup>
          
          </Item.Extra>
                 </Segment> 
                ))}

{props.act && <Popup trigger={<a name='plus' style={floatstyle}>
        <i className="fa fa-plus" style={myfloat}></i>
        </a>} contentStyle={popupstyle} 
     position="top center">
         <AddNote act={props.act}/>
    </Popup>}

        </>
       

    )

}
