import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TeamDetail from '../TeamDetail';

test('Should display Team Details', () => {
  const openSchedule = jest.fn();
  const openEditTeamModal = jest.fn();
  const TEAMS = {
    1: 'Team 1',
    2: 'Team 2',
    3: 'Team 3',
    4: 'Team 4'
  };

  const { getByText } = render(<TeamDetail
    team={TEAMS[1]}
    teamId={1}
    key={1}
    disabledViewScheduleButton={false}
    openSchedule={openSchedule}
    openEditTeamModal={openEditTeamModal}
  />);
  const teamNameElement = getByText(/Team 1/i);

  fireEvent.click(getByText('Schedule'));

  expect(teamNameElement).toBeInTheDocument();
  expect(openSchedule).toHaveBeenCalledTimes(1);
});
