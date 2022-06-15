import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react'

export default function TopMenu() {  
    const [activeItem, setactiveItem] = useState("login");
      return (
        <Menu stackable>
          <Menu.Item active={activeItem === 'login'} name="login" to="/login" as = {Link} onClick={() => setactiveItem("login")}>
            <Icon  
                   size='large'  name='home'/>
          </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item 
          name="Today's Activities"
          as = {Link}
          to = "/today"
          active={activeItem === "Today's Activities"}
          onClick={() => setactiveItem("Today's Activities")}
        >
          Today's Activities
        </Menu.Item>

        <Menu.Item 
          name='Incomplete Activities'
          as = {Link}
          to = "/incomplete"
          active={activeItem === 'Incomplete Activities'}
          onClick={() => setactiveItem("Incomplete Activities")}
        >
          Incomplete Activities
        </Menu.Item>
        </Menu.Menu>
          </Menu>
      )
    }

