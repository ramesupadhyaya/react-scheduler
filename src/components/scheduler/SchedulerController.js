import React from "react";
import SchedulerView from "./SchedulerView";

class SchedulerController extends React.Component {
  state = {
    teamName: "",
    poolId: "",
    openScheduleView: false,
    scheduleOfTeam: -1,
    openEditTeam: false,
    editTeamId: -1
  };

  setTeamName = (e) => {
    this.setState({ teamName: e.target.value });
  };

  setPool = (e) => {
    this.setState({ poolId: e.target.value });
  };

  clearForm = () => {
    this.setState({
      teamName: "",
      poolId: "",
      openEditTeam: false,
      editTeamId: -1
    });
  };

  addTeam = () => {
    this.props.addTeam(this.state.teamName, this.state.poolId);
    this.clearForm();
  };

  editTeam = () => {
    this.props.editTeam(this.state.editTeamId, this.state.teamName, this.state.poolId);
    this.clearForm();
  };

  openSchedule = (scheduleOfTeam = -1) => {
    this.setState({
      openScheduleView: true,
      scheduleOfTeam
    });
  }

  closeSchedule = () => {
    this.setState({
      openScheduleView: false,
      scheduleOfTeam: -1
    });
  }

  openEditTeamModal = editTeamId => {
    const team = this.props.teams.find(team => team.Id === editTeamId);
    this.setState({
      openEditTeam: true,
      editTeamId,
      teamName: team.Name,
      poolId: team.Pool
    });
  }

  closeEditTeamModal = () => {
    this.setState({
      teamName: "",
      poolId: "",
      openEditTeam: false,
      editTeamId: -1
    });
  }

  render() {
    return (
      <SchedulerView
        schedules={this.props.schedules}
        pools={this.props.pools}
        teams={this.props.teams}
        teamName={this.state.teamName}
        setTeamName={this.setTeamName}
        poolId={this.state.poolId}
        setPool={this.setPool}
        addTeam={this.addTeam}
        addButtonDisabled={!this.state.teamName || !this.state.poolId}
        generateSchedule={this.props.generateSchedule}
        disabledGenerateScheduleButton={this.props.disabledGenerateScheduleButton}
        disabledViewScheduleButton={this.props.disabledViewScheduleButton}
        openScheduleView={this.state.openScheduleView}
        openSchedule={this.openSchedule}
        closeSchedule={this.closeSchedule}
        scheduleOfTeam={this.state.scheduleOfTeam}
        openEditTeamModal={this.openEditTeamModal}
        closeEditTeamModal={this.closeEditTeamModal}
        openEditTeam={this.state.openEditTeam}
        editTeamId={this.state.editTeamId}
        editTeam={this.editTeam}
      />
    );
  }
}

export default SchedulerController;
