import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  toggleTodo = clickedId => {
    this.setState({
        todos: this.state.todos.map(item => {
          if(item.id === clickedId) {
            return {
              ...item, 
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
