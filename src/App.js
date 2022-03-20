import './App.css';
import Contact from './components/Contact';

import Main from './components/Main';

function App() {
  return (
    <div className="App">
     
      <Main />
    </div>
  );
}


export default App;
// import React, {Component} from 'react';

// class App extends React.Component {
//       state = {
//           isLoading: true,
//           users: [],
//           error: null
//       };
//       getFetchUsers() {
//           this.setState({
//               loading: true
//           }, () => {
//               fetch("http://localhost:8000/results").then(res => res.json()).then(result => this.setState({
//                   loading: false,
//                   users: result
//               })).catch(console.log);
//           });
//       }
//       componentDidMount() {
//           this.getFetchUsers();
//       }
//       render() {
//           const {
//               users,
//               error
//           } = this.state;
//           return (
//             <React.Fragment >
//             <h1>All User</h1>
//             {error ? <p>{error.message} </p> : null}  {
//                       users.map(user => {
//                           const {
//                               gender,
//                               name
//                           } = user;
//                         return (
                          
//                           <div>
//                               <p>gender: {gender}</p>
//                               <p>name: {name.first}</p>
//                               <hr />
//                           </div>
                          
//                           );
//                       })
//                   } </React.Fragment> );
//           }
//       }
// export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//       state = {
//           posts: []
//       };
   
//      async componentDidMount() {
//           const promise =axios.get("http://localhost:8000/results")
//           const response =await promise;
//           console.log(response)   
//     }
// }
// export default App;
