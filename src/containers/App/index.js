import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>MAIN PAGE</h1>} />
      <Route path="/page2" render={() => <h1>PAGE 2</h1>} />
    </Switch>
  );
}

export default App;
