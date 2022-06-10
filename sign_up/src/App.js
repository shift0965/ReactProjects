import './App.css';
import Form from './Form';
import {useState} from 'react';

function App() {

  const [formOpen, setFormOpen] = useState(true);

  return (
    <div className="App">
      {formOpen ? <Form setFormOpen={setFormOpen}/>:<div></div>}
    </div>
  );
}

export default App;
