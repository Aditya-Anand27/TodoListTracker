import React, { useEffect, useState } from 'react';
import {Grid, Header} from 'semantic-ui-react';
import ListTodo from './ListAct';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddItem from './AddItem';
import NoteItem from './NoteItem';

const floatstyle = {
	position:"fixed",
	width:60,
	height:60,
	bottom:40,
	right:600,
	backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
	color:"#FFF",
	borderRadius:50,
	textAlign:"center",
}
const popupstyle = {
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
    textAlign:"center",
    color: "white"
}

const myfloat = {
	marginTop: 22
}

export default function MainPageInc(){

    const [act, setact] = useState();
    return(
        <div>
        <Header>
            Incomplete Activities
        </Header>
        <Grid>
            <Grid.Column width='10'>
               <ListTodo act={act} setact={setact}/>
               <Popup trigger={<a name='plus' style={floatstyle}>
        <i className="fa fa-plus" style={myfloat}></i>
        </a>} contentStyle={popupstyle} 
     position="top center">
         <AddItem/>
    </Popup>
            </Grid.Column>
            <Grid.Column width='6'>
               <NoteItem act={act} setact={setact}/>
            </Grid.Column>
        </Grid>
      
        
        </div>
    )
}
