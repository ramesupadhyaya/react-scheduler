import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TeamForm from '../TeamForm';
import { pools } from './mockData/mock-data';

test('Should generate Add Team Form', () => {
  const setTeamName = jest.fn();
  const setPool = jest.fn();
  const addTeam = jest.fn();

  const { getByText, getByRole } = render(<TeamForm
    pools={pools}
    teamName={''}
    setTeamName={setTeamName}
    poolId={1}
    setPool={setPool}
    addTeam={addTeam}
    addButtonDisabled={false}
  />);
  fireEvent.change(getByRole('textbox'), {
    target: { value: 'JavaScript' },
  });

  fireEvent.click(getByText('Add Team'));

  expect(setTeamName).toHaveBeenCalledTimes(1);
  expect(addTeam).toHaveBeenCalledTimes(1);
});
