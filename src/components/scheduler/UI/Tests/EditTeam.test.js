import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditTeam from '../EditTeam';
import { pools, teams } from './mockData/mock-data';

test('Should generate Edit Team Form', () => {
  const setTeamName = jest.fn();
  const setPool = jest.fn();
  const editTeam = jest.fn();
  const closeEditTeamModal = jest.fn();

  const { getByText, getAllByText } = render(<EditTeam
    pools={pools}
    teams={teams}
    openEditTeam={true}
    closeEditTeamModal={closeEditTeamModal}
    teamName={''}
    setTeamName={setTeamName}
    poolId={1}
    setPool={setPool}
    editTeam={editTeam}
    addButtonDisabled={false}
  />);

  const header = getAllByText(/Edit Team/i);

  fireEvent.click(getByText('Close'));

  expect(header[0]).toBeInTheDocument();
  expect(closeEditTeamModal).toHaveBeenCalledTimes(1);
});
