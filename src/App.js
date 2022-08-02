import React from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';

// Component Imports 
import {ChannelContainer, ChannelListContainer, Auth} from './components';


const api = '5xv5vjwaahq6';
const client = new StreamChat(api);
const authToken = false;

const App = () => {

  if(!authToken) return <Auth/>

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team dark'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App;