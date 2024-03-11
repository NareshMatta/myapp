import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Fooster from './Footer';
import Login from './Login';
import Tables from './Tables';



export default function App()
 {
  return (
    <center> <div >
      <hr></hr>
      <Header/>
      <hr></hr>
<h1> Login page </h1>

<p> This is a dummy paragraph</p><br></br>
<Login/>
<br></br>
<hr></hr>
      <Fooster/>
      <hr></hr>
      <Tables/>
    </div></center>
  );
}

