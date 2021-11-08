import Foods from './Delete.js'

const Showfoods = props => {
  const {foods, setFoods} = props;

  return (
    <section id="pickups">
    <h2 >Pickups available</h2>
    <div class="items">
    {foods.map(food =>{
      return(
        <div class="item">
        <Foods key={food._id} foods={food} setFoods={setFoods} />
        </div>
      );
    })}
    </div>
    </section>
  );
};

export default Showfoods;
