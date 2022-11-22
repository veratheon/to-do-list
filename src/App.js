import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {

  }, list)

  return (
    <div className="app">
      <header>
        My to do list
      </header>
      
      <TodoList list={list} setList={setList}/>
      <AddItemForm list={list} setList={setList}/>
    </div>
  );
}

export default App;
