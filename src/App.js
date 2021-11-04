import logo from './logo.svg';
import './App.css';
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
  <NewForm setLogs={setLogs}/>


</main>
);
};


export default App;
