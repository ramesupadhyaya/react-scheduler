import Pool from '../../../../../models/scheduler/Pool';
import Team from '../../../../../models/scheduler/Team';

export const pools = [
  new Pool(1, 'Pool 1', [1]),
  new Pool(2, 'Pool 2', [2]),
  new Pool(3, 'Pool 3', [3, 4]),
  new Pool(4, 'Pool 4')
];

export const teams = [
  new Team(1, 'Team 1', 1),
  new Team(2, 'Team 2', 2),
  new Team(3, 'Team 3', 3),
  new Team(4, 'Team 4', 4)
];
