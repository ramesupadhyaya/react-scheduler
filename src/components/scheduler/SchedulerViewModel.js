import React from 'react';

import SchedulerController from './SchedulerController';
import Pool from '../../models/scheduler/Pool';
import Team from '../../models/scheduler/Team';

import ScheduleGenerator from './ScheduleGenerator';

class SchedulerViewModel extends React.Component {
  state = {
    schedules: [],
    teams: [],
    pools: [
      new Pool(1, 'POOL 1'),
      new Pool(2, 'POOL 2'),
      new Pool(3, 'POOL 3'),
      new Pool(4, 'POOL 4')
    ],
    scheduleGenerationInProgress: false
  }

  addTeam = (name, poolId) => {
    const teams = [].concat(this.state.teams);
    const team = new Team(
      teams.length + 1,
      name,
      poolId
    );
    teams.push(team);

    const pools = [].concat(this.state.pools);
    const poolIndex = pools.findIndex(pool => pool.Id === poolId);
    const pool = pools[poolIndex];
    pool.Teams.push(team.Id);

    this.setState({
      teams,
      pools
    });
  }

  editTeam = (teamId, name, poolId) => {
    const teams = [].concat(this.state.teams);

    const team = teams.find(team => team.Id === teamId);

    const previousPoolId = team.Pool;

    team.Name = name;
    team.Pool = poolId;

    const pools = [].concat(this.state.pools);

    const previousPool = pools.find(pool => pool.Id === previousPoolId);
    const removeTeamIndex = previousPool.Teams.findIndex(team => team === teamId);
    previousPool.Teams.splice(removeTeamIndex, 1);

    const currentPool = pools.find(pool => pool.Id === poolId);
    currentPool.Teams.push(teamId);

    this.setState({
      teams,
      pools
    });
  }

  generateSchedule = () => {
    this.setState({
      scheduleGenerationInProgress: true
    });

    const schedules = ScheduleGenerator(this.state.pools, this.state.teams);

    this.setState({
      schedules,
      scheduleGenerationInProgress: false
    });
  }

  isGenerateScheduleButtonDisabled = () => {
    if (this.state.scheduleGenerationInProgress) return true;

    // Number of Pools should be even
    if (this.state.pools.length % 2 !== 0) return true;

    // Check for Teams in each Pool. All Pools should have equal number of Teams in it.
    let first = -1;
    for (const pool of this.state.pools) {
      // At least two teams should be there in each Pool
      if (first !== -1 && first < 2) {
        return true;
      }
      if (first === -1) {
        first = pool.Teams.length;
      } else {
        if (first !== pool.Teams.length) {
          return true;
        }
      }
    }

    return false;
  }

  render() {
    return <SchedulerController
      schedules={this.state.schedules}
      teams={this.state.teams}
      pools={this.state.pools}
      addTeam={this.addTeam}
      editTeam={this.editTeam}
      generateSchedule={this.generateSchedule}
      disabledGenerateScheduleButton={this.isGenerateScheduleButtonDisabled()}
      disabledViewScheduleButton={this.state.schedules.length === 0}
    />
  }
}

export default SchedulerViewModel;
