import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios.get('http://192.168.1.244:8000/cheats/1').then((value)=>{
    console.log(value);
  })
  return (
    <>
      <h1>Api</h1>
    </>
  );
}

export default App;
