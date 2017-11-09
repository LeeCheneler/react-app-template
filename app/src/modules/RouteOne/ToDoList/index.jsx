import React from 'react'

import ToDo from '../ToDo'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.setState({
      todos: [
        {
          title: 'one',
          state: 'todo'
        },
        {
          title: 'two',
          state: 'done'
        },
        {
          title: 'three',
          state: 'todo'
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ol>
          {
            this.state.todos.map((todo) => {
              return (
                <li key={todo.title}>
                  <ToDo title={todo.title}  />
                </li>
              )
            })
          }
          {this.state.todos.length === 0 &&
            <p>Fuck no todos!!</p>
          }
        </ol>
      </div>
    )
  }
}

export default ToDoList
