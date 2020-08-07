import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pools from '../Pools';
import { pools, teams } from './mockData/mock-data';

test('Should display all Pools and Teams inside each Pool', () => {
  const openSchedule = jest.fn();
  const generateSchedule = jest.fn();
  const openEditTeamModal = jest.fn();

  const { getByText, getAllByText } = render(<Pools
    pools={pools}
    teams={teams}
    openSchedule={openSchedule}
    generateSchedule={generateSchedule}
    disabledGenerateScheduleButton={false}
    disabledViewScheduleButton={false}
    openEditTeamModal={openEditTeamModal}
  />);
  const pool1Element = getByText(/Pool 1/i);
  const pool4Element = getByText(/Pool 4/i);
  getAllByText(/Teams - 1/i);
  getByText(/Teams - 2/i);
  getByText(/Teams - 0/i);
  getByText(/No Teams/i);

  fireEvent.click(getByText('Generate Schedule'));
  fireEvent.click(getByText('View Schedule'));

  expect(pool1Element).toBeInTheDocument();
  expect(pool4Element).toBeInTheDocument();
  expect(generateSchedule).toHaveBeenCalledTimes(1);
  expect(openSchedule).toHaveBeenCalledTimes(1);
});
