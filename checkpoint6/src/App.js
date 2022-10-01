import logo from './logo.svg';
import { Profile } from './profile/profile.js';
import { Image } from './profile/image.js';
import './App.css';

function App() {

let env = "Energy"; 
// Tested with let env = 5;
// Console gives this warning
// Warning: Failed prop type: Invalid prop `bio` of type `number` supplied to `Profile`, expected `string`.
// at Profile

  return (
    <div className="App">

      <Profile bio = {env}/>
      <Image>logo192.png</Image>
      <Image>favicon.ico</Image>

      
    </div>
  );
}

export default App;
