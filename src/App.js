import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = {name:'Araf', job:'=Singer'};
const singer2 = {name:'RK', job:'Singer'};

const singerStyle = {
  color:'purple',
  backgroundColor:'white'
};

function App() {
  return (
    <div className="App">
      <Person name="JS"></Person>
      <Person name="React"></Person>
      <Person></Person>
      <h3>This is a friend container</h3>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div className="person">
      <h1>Hello {props.name}</h1>
      <p>Profession: Java Scripts</p>
    </div>
  )
}

function Friend(){
  return (
    <div className="container">
      <h3>Name: JavaSCripts</h3>
      <p>Job: Front-end</p>
    </div>
  )
}

export default App;
