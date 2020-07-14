import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
// class MyHeader extends React.Component {
//   render() {
//     return (
//       <div style={{border:solid `1px` `black` ; max-width:`100vw`}}>  
 
//     	<h1 className={{title red}}>Your name here</h1>  
 
//         	<br>  
 
//             <img src={{/imageInSrc.jpg}} /> <br> 
 
//              	<img src={{/imageInPublic.jpg}} />  
 
//     </div>  
 
//     <video width="320" height="240" controls>  
 
//         <source src="myVideo.mp4" type="video/mp4"> 
 
//     </video> 
//     );
//   }
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="style">
          <h1 className="red">Radhouani Mohaned </h1>
          <img src="../imageInSrc.jpg" className="imageInSrc" alt="imageInSrc" />
          <img src="../imageInPublic.jpg" className="imageInPublic" alt="imageInPublic" />
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

       
      </header>
    </div>
  );
}

export default App;
