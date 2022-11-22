import TodoList from './components/TodoList';


/**
 * Компонент возвращает заголовок и остальную часть
 */
function App() {
  return (
    <div className="app">
      <header>
        My to do list
      </header>
      <TodoList/>
    </div>
  );
}

export default App;
