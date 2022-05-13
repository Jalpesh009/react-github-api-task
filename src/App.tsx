import './App.css';
import Searchbar from './Components/Searchbar';
import UserDetails from './Components/UserDetails';

const App = () => {
  return (
    <div className="container">
      <Searchbar />
      <UserDetails />
    </div>
  );
}

export default App;
