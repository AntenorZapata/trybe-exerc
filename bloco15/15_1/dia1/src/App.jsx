import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

function App() {
  const [value, setValue] = useState('');
  const [save, setSave] = useState('');

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setSave(value);
    setValue('');
  };

  return (
    <div className="App">
      <label htmlFor="input-email">Email: </label>
      <input
        id="input-email"
        name="email"
        type="text"
        value={value}
        onChange={handleValue}
      />
      <button
        value="Enviar"
        data-testid="btn-value"
        type="button"
        onClick={handleSubmit}
      >
        Enviar
      </button>
      {/* <h1 data-testid="display-email" className="emails">
        Valor: {save}
      </h1> */}

      <ValidEmail email={save} />
    </div>
  );
}

export default App;
