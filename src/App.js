import React from 'react';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
        <ContactList />
    </div>
  );
}
const Mitchell = {
  name :'Mitchell Cooper',
  avatar : 'https://randomuser.me/api/portraits/men/29.jpg',
  isOnline : true,

}
const Norman = {
  name : 'Norman Lawson',
  avatar : 'https://randomuser.me/api/portraits/men/28.jpg',
  isOnline : false,
}
const Jimmy = {
  name : 'Jimmy Castro',
  avatar : 'https://randomuser.me/api/portraits/men/49.jpg',
  isOnline : true,
  
}
export default App;
