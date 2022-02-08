import { ChatEngine } from 'react-chat-engine';
import './App.css';

import { ChatFeed, LoginForm } from './components';

const projectID = 'c7b5ed5c-260f-4020-9772-08a7c68f921a';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
        ).play()
      }
    />
  );
}

export default App;
