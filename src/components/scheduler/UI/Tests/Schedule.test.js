import React from 'react';
import { render } from '@testing-library/react';
import Schedule from '../Schedule';

test('Should display detailed schedule of the Game', () => {
  const schedule = {
    Team1: 1,
    Team2: 3,
    Pool: 1,
    Day: 2,
    Game: 5
  }
  const POOLS = {
    1: 'Pool 1',
    2: 'Pool 2',
    3: 'Pool 3'
  };
  const TEAMS = {
    1: 'Team 1',
    2: 'Team 2',
    3: 'Team 3',
    4: 'Team 4'
  }

  const { getByText } = render(<Schedule key={1} schedule={schedule} pools={POOLS} teams={TEAMS} scheduleOfTeam={1} />);
  const team1NameElement = getByText(/Team 1/i);
  const team2NameElement = getByText(/Team 3/i);
  const poolNameElement = getByText(/Pool 1/i);

  expect(team1NameElement).toBeInTheDocument();
  expect(team2NameElement).toBeInTheDocument();
  expect(poolNameElement).toBeInTheDocument();
});
