import React from 'react';
import ChatbotPedia from "../../components/chatbot/chatbot.jsx";
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
  <ChatbotPedia />
    <Directory />
  </div>
);

export default HomePage;
