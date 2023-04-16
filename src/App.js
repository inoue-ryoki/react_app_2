import './styles.css';
import React, { useState } from 'react';

function App() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);

  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          <div className="input-area">
            <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
            <button onClick={onClickAdd}>追加</button>
          </div>
          <div className="incomplete-area">
            <p className='title'>未完了のTODO</p>
            <ul>
              {incompleteTodos.map((todo, index) => {
                return (
                  <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>

                  </div>

                )
              })}
            </ul>

          </div>

          <div className="complete-area">
            <p className='title'>完了のTODO</p>
            <ul>
              {completeTodos.map((todo, index) => {
                return (
                  <div key={todo} className='list-row'>
                    <li>{todo}</li>
                    <button onClick={() => onClickReturn(index)}>戻す</button>

                  </div>

                )
              })}

            </ul>

          </div>

          <div>

          </div>
        </>
      </header>

    </div>
  );
}

export default App;
