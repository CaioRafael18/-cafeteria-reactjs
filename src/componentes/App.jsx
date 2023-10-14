import Food from "./Food";
import foods from "./Foods";

function App() {	
  return (
    <div className="container">
			<h1 className="mt-5 text-center">Menu</h1>
			<section className="card-deck my-3">
				{foods.map((food) => {
					return <Food food={food} name={food.name} key={food.id}/>;
				})} 
			</section>
		</div>
  )
}

export default App
