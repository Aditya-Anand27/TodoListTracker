import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Item, Segment, Radio } from 'semantic-ui-react';
import agent from '../agents/agentnotes';




export default function ModifyNote(props){

    const [value, setvalue] = useState("");
    function handleOnClick(){
        console.log(props.act.id,props.act.itemId,value);
        agent.Activities.update(props.act.id, {id: props.act.id, itemId: props.act.itemId, note: value});
    }

    function handleChange(event) {
        setvalue(event.target.value);
        console.log(value);
      }


    return(
        <>
        <div>
             <div class="ui input focus">
                <input type="text"  value={props.act.value}
        onChange={handleChange}/>
            </div>
            <br/>
            <br/>
            <Button type="submit" style={{backgroundColor: "white"}} onClick={() => handleOnClick()}>Submit</Button>
         </div>
        </>
    )

}
