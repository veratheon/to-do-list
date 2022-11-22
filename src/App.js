/**
 * Импорт компонента
 */
import TodoList from './components/TodoList';


/**
 * Компонент App состоит из заголовка и другого компонента
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
