import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Item, Segment, Radio } from 'semantic-ui-react';
import agent from '../agents/agent';




export default function AddItem(){

    const [value, setvalue] = useState("");
    const [toggle, settoggle] = useState(true);

    function handleOnClick(){
        agent.Activities.create({Name: value, isComplete: toggle});
    }

    function handleChange(event) {
        setvalue(event.target.value);
        console.log(value);
      }

      function handleToggleChange() {
        settoggle(!toggle);
      }


    return(
        <>
        <div>
             <div class="ui input focus">
                <input type="text" placeholder="Item name" value={value}
        onChange={handleChange}/>
            </div>
            <br/>
            <br/>
            <Radio label = "Completed?" toggle defaultChecked onClick={handleToggleChange}> </Radio>
            <br/>
            <br/>
            <Button type="submit" style={{backgroundColor: "white"}} onClick={() => handleOnClick()}>Submit</Button>
         </div>
        </>
    )

}
