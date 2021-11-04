import logo from './logo.svg';
import './App.css';
import NewForm from './components/NewForm';


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
  <NewForm setFoods={setFoods}/>


</main>
);
};


export default App;
