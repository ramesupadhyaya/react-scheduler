import React from 'react';
import { render } from '@testing-library/react';
import Schedules from '../Schedules';
import Schedule from '../../../../models/scheduler/Schedule';
import { pools, teams } from './mockData/mock-data';

test('Should display schedules of all Teams', () => {
  const closeSchedule = jest.fn();
  const schedules = [
    new Schedule(1, 1, 1, 1, 2),
    new Schedule(1, 2, 2, 2, 3)
  ];

  const { getByText, getAllByText } = render(<Schedules
    pools={pools}
    teams={teams}
    schedules={schedules}
    openScheduleView={true}
    closeSchedule={closeSchedule}
    scheduleOfTeam={-1}
  />);
  const team1NameElement = getByText(/Team 1/i);
  const team2NameElement = getAllByText(/Team 2/i);
  const team3NameElement = getByText(/Team 3/i);
  const poolNameElement = getByText(/Pool 1/i);

  expect(team1NameElement).toBeInTheDocument();
  expect(team2NameElement[0]).toBeInTheDocument();
  expect(team3NameElement).toBeInTheDocument();
  expect(poolNameElement).toBeInTheDocument();
});
