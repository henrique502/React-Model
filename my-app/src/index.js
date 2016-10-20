import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'

/* Pages */

browserHistory.listen(function(ev) {
  console.log('listen', ev.pathname);
});

ReactDOM.render(
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" />
        <Route path="*" />
      </Router>
    </div>
, document.getElementById('root'));
