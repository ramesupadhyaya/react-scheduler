import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import SchedulerViewModel from './components/scheduler/SchedulerViewModel';

function App() {
  return (
    <Container maxWidth="lg">
      <h1 className="app-title">Match Scheduler</h1>
      <SchedulerViewModel />
    </Container>
  );
}

export default App;
