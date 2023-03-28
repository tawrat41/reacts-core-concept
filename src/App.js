import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// function Person(props){
//   console.log(props)
//   return (
//     <div className='container'>
//       <h1>{props.Name}</h1>
//       <p>Profession: Developer</p>
//     </div>
//   )
// }

// function Person2(){
//   return (
//     <div className='container2'>
//       <h1>Tawratur Rashid</h1>
//       <p>Profession: Developer</p>
//     </div>
//   )
// }

// function App() {
//   return (
    
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }

function ExternalUsers(){
  const [users, setUsers] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  } ,[]); 

  return(
    <div>
      <h1>Externl Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(33);
//   // console.log(count);
//   const increaseCount = () => setCount(count+1);
//   const decreaseCount = () => setCount(count-1);
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

export default App;
