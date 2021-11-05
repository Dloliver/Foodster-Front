import Foods from './Delete.js'

const Showfoods = props => {
  const {foods, setFoods} = props;

  return (
    <section>
    <h2>Pickups available</h2>
    {foods.map(food =>{
      return(
        <Foods key={food._id} foods={food} setFoods={setFoods} />
      );
    })}
    </section>
  );
};

export default Showfoods;
