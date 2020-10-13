import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact {...Mitchell}/>
        <Contact {...Norman}/>
        <Contact {...Jimmy}/>
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
