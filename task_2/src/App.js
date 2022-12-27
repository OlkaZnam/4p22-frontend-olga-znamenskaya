import React, { useState } from 'react'
import ListComponent from './components/ListComponent'
import { Button } from 'antd'
import 'antd/dist/reset.css'
import './App.css'

function App() {
  const [components, setComponents] = useState([])
  
  function addComponent() {
    setComponents([...components, "Component"])
  }

  return (
    <div className="app">

      <Button
        className='app__button'
        type="primary"
        onClick={() => addComponent()}>
        Call Component
      </Button>

      <ul className='app__list'>
        {components.map((item, index) => {
          return (
            <li className='list__item' key={index}>
              <ListComponent text={item} index={index + 1}/>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App;
