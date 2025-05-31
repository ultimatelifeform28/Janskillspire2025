import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import ClickButton from './components/ClickButton';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <UserProfile />
     <ClickButton />
      <TodoList />
    </div>
  );
}

export default App;
