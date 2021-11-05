import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewForm from './components/newForm';
import Showfoods from './components/Showfood';

const App = () => {
  const [foodster, setFoodster] = useState([])


useEffect(() =>{
  axios
  .get('http://localhost:3000/foodster')
  .then((response) =>{
    setFoodster(response.data);
  });
}, [])

return (
  <main>
  <h1> Foodster </h1>
  <NewForm setFoods={setFoodster}/>
  <Showfoods foodster={foodster} setFoods={setFoodster}/>

</main>
);
};


export default App;
