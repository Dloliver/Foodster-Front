import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewForm from './components/newForm';
import Showfoods from './components/Showfood';

const App = () => {
  const [foods, setFoods] = useState([])


useEffect(() => {
  axios
  .get('http://localhost:3000/foodster')
  .then((response) => {
    setFoods(response.data);
  });
}, []);

return (
  <main>
  <h1> Foodster </h1>
  <NewForm setFoods={setFoods}/>
  <Showfoods foods={foods} setFoods={setFoods}/>

</main>
);
};


export default App;
