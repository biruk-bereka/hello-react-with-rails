import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>    
            <Switch>
                <Route exact path="/greeting" component={Greeting} />
            </Switch>
        </Router>
    );
}

export default App;