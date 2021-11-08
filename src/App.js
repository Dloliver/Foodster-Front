import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewForm from './components/newForm';
import Showfoods from './components/Showfood';

const App = () => {
  const [foods, setFoods] = useState([])


useEffect(() => {
  axios
  .get('https://ancient-badlands-03329.herokuapp.com/foodster')
  .then((response) => {
    setFoods(response.data);
  });
}, []);

return (
  <main class="body">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#Foodster">Foodster</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Header</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#addfoodform">Add Food Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pickups">Pickups Available</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#info">Info</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <header>
 <div id="header">
  <h1> Foodster </h1>
  <p class="header">CULTIVATING ACCESSIBLE SUSTAINABILITY</p>
  <p class="header">EST 2021</p>
  </div>
</header>
<div class="main">
  <NewForm  setFoods={setFoods}/>

  <Showfoods foods={foods} setFoods={setFoods}/>

  <h3 id="info"> Made by Jamie & Dennis </h3>
  </div>
</main>
);
};


export default App;
