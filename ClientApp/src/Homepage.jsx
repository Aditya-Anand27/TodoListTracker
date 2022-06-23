import React from 'react';
import { useStore } from './Helpers/loginhelper';
import { Button, Form, Label, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from "mobx-react";
import Login from './components/login/Login';



export default observer(function HomePage(){
    const {userStore, modalStore} = useStore();
    return (
        <>
         <h1>Todo Activity Tracker</h1>

         {userStore.isLoggedIn? (
              <>
              <Header as='h2' inverted content="Welcome"/>
              <Button as={Link} to='/today' size="huge">
                Go to Today's Activities
              </Button>
              </>
         ) : (
            <>
              <Header as='h2' inverted content="Welcome"/>
              <Button onClick={() => modalStore.openModal(<Login/>)} size="huge">
                Login
              </Button>
              </>
         )}
        </>

    )
         })