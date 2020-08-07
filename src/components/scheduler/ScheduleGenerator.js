import Schedule from '../../models/scheduler/Schedule';

const GAMES_PER_WEEKEND = 5;
const GAMES_ON_SATURDAY = 3;

let schedule = {};
let TEAM1;
let TEAM2;

export default function scheduleGenerator (pools, teams) {
  schedule = {};
  TEAM1 = null;
  TEAM2 = null;

  const SCHEDULES = [];
  const POOLS = pools;
  const TEAMS = {};
  teams.forEach(team => {
    TEAMS[team.Id] = team.Name;
  });
  const NUMBER_OF_TEAMS_IN_A_POOL = POOLS[0].Teams.length;

  for (let game = 0; game < (NUMBER_OF_TEAMS_IN_A_POOL * (NUMBER_OF_TEAMS_IN_A_POOL - 1) / 2) * POOLS.length; game++) {
    const day = game % GAMES_PER_WEEKEND < GAMES_ON_SATURDAY ? 1 : 2;
    if (game % POOLS.length === 0) {
      generate2RandomTeams(NUMBER_OF_TEAMS_IN_A_POOL);
    }
    const POOL = POOLS[game % POOLS.length];
    const match = new Schedule(
      day + (parseInt(game / GAMES_PER_WEEKEND) * 2),
      game + 1,
      POOL.Id,
      POOL.Teams[TEAM1],
      POOL.Teams[TEAM2]
    );
    SCHEDULES.push(match);
  }

  // Inter Pool Matches
  for (let index = 0; index < POOLS.length; index = index + 2) {
    const POOL1 = POOLS[index];
    const POOL2 = POOLS[index + 1];

    for (let teamIndex = 0; teamIndex < NUMBER_OF_TEAMS_IN_A_POOL; teamIndex++) {
      const day = SCHEDULES.length % GAMES_PER_WEEKEND < GAMES_ON_SATURDAY ? 1 : 2;

      const match = new Schedule(
        day + (parseInt(SCHEDULES.length / GAMES_PER_WEEKEND) * 2),
        SCHEDULES.length + 1,
        POOL1.Id,
        POOL1.Teams[teamIndex],
        POOL2.Teams[teamIndex]
      );
      SCHEDULES.push(match);
    }
  }

  return SCHEDULES;
}

function generate2RandomTeams(NUMBER_OF_TEAMS_IN_A_POOL) {
  while (true) {
    const team = Math.floor(Math.random() * NUMBER_OF_TEAMS_IN_A_POOL);
    if (!schedule[team]) {
      schedule[team] = [];
      TEAM1 = team;
      break;
    } else if (schedule[team].length !== NUMBER_OF_TEAMS_IN_A_POOL - 1) {
      TEAM1 = team;
      break;
    }
  }

  while (true) {
    const team = Math.floor(Math.random() * NUMBER_OF_TEAMS_IN_A_POOL);
    if (team === TEAM1) {
      continue;
    } else if (!schedule[team]) {
      schedule[team] = [];
      TEAM2 = team;
      break;
    } else if (schedule[team].indexOf(TEAM1) === -1) {
      TEAM2 = team;
      break;
    }
  }

  schedule[TEAM1].push(TEAM2);
  schedule[TEAM2].push(TEAM1);
}
