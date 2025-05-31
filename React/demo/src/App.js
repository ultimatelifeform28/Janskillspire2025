import logo from './logo.svg';
import './App.css' 
import Test from './components/Test';



function HelloWorld(){
  return <h1>Hello World React!</h1>
}

function Personaldetails(){
  return (
    <div>
      <h1>Name: Jacorey Lasane </h1>
      <h1>Favorite Food: Pizza</h1>
      <h1>Favorite Vacation Destinaion: Japan</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Personaldetails/>
      <Test/>
    </div>
  );
}

export default App;
