import logo from './logo.svg';
import './App.css';

const number = 555;
const singers = [{name:'Araf', job:'=Singer'},
                {name:'RK', job:'Singer'},
                {name:'AS', job:'Singer'},
                {name:'MM', job:'Singer'}
              ];

const singerStyle = {
  color:'purple',
  backgroundColor:'white'
};

function App() {
  // const languageNames = ['JS', 'Python', 'C', 'Java', 'Ruby'];
  return (
    <div className="App">
      {/* {
        languageNames.map(languageName => <Person name={languageName}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
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
