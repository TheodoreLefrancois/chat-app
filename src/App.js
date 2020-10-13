import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact {...personne}/>
    </div>
  );
}
const personne = {
  name :'Mitchell Cooper',
  avatar : 'https://randomuser.me/api/portraits/men/29.jpg',
  isOnline : true,

}
export default App;
