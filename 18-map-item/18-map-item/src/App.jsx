import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './components/Listitem';
import ErrorLine from './components/Errorline';

function App() {
  let food = ["Dal", "banana", "apple", "orange", "cream","Ghee"];

  return (
    <>
      <h1 className='food-heading'>Healthy-Food</h1>
     
      <ListItem  fooditems={food}/>
      <ErrorLine fooditems={food} />
    </>
  );
}

export default App;
