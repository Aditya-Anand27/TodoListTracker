import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Item, Segment, Radio } from 'semantic-ui-react';
import agent from '../agents/agentnotes';




export default function AddNote(props){

    const [value, setvalue] = useState("");

    function handleOnClick(){
        agent.Activities.create({itemId: props.act.toString() , note: value});
    }

    function handleChange(event) {
        setvalue(event.target.value);
        console.log(value);
      }
    return(
        <>
        <div>
             <div class="ui input focus">
                <input type="text"  placeholder='Note text'
        onChange={handleChange}/>
            </div>
            <br/>
            <br/>
            <Button type="submit" style={{backgroundColor: "white"}} onClick={() => handleOnClick()}>Submit</Button>
         </div>
        </>
    )

}
