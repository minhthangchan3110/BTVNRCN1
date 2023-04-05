import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';


function App() {
  const [name, setName] = useState('');
  
  const handleSubmit = (name) => {
  setName(name);
  }
  
  return (
  <div>
  <UserForm onSubmit={handleSubmit} />
  {name && <Greeting name={name} />}
  </div>
  );
  }

export default App;
