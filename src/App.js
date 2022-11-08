import React from 'react';
import 'App.css';
import { Button } from 'antd';

function App() {
  return (
    <div>
      <button>
        Hello, React.
      </button>
      <Button type="primary" onClick={() => console.log("clicked")}>
        Hello, React.
      </Button>
    </div>
  );
}

export default App;
