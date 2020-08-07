import React from 'react';

import TeamForm from './UI/TeamForm';
import Pools from './UI/Pools';
import Schedules from './UI/Schedules';
import EditTeam from './UI/EditTeam';

class SchedulerView extends React.Component {
  render() {
    return <React.Fragment>
      <TeamForm
        pools={this.props.pools}
        teamName={this.props.teamName}
        setTeamName={this.props.setTeamName}
        poolId={this.props.poolId}
        setPool={this.props.setPool}
        addTeam={this.props.addTeam}
        addButtonDisabled={this.props.addButtonDisabled}
      />
      <Pools
        pools={this.props.pools}
        teams={this.props.teams}
        openSchedule={this.props.openSchedule}
        generateSchedule={this.props.generateSchedule}
        disabledGenerateScheduleButton={this.props.disabledGenerateScheduleButton}
        disabledViewScheduleButton={this.props.disabledViewScheduleButton}
        openEditTeamModal={this.props.openEditTeamModal}
      />
      {
        this.props.openScheduleView &&
        <Schedules
          pools={this.props.pools}
          teams={this.props.teams}
          schedules={this.props.schedules}
          openScheduleView={this.props.openScheduleView}
          closeSchedule={this.props.closeSchedule}
          scheduleOfTeam={this.props.scheduleOfTeam}
        />
      }
      {
        this.props.openEditTeam &&
        <EditTeam
          teams={this.props.teams}
          pools={this.props.pools}
          openEditTeam={this.props.openEditTeam}
          closeEditTeamModal={this.props.closeEditTeamModal}
          teamName={this.props.teamName}
          setTeamName={this.props.setTeamName}
          poolId={this.props.poolId}
          setPool={this.props.setPool}
          editTeam={this.props.editTeam}
          addButtonDisabled={this.props.addButtonDisabled}
        />
      }
    </React.Fragment>
  }
}

export default SchedulerView;
