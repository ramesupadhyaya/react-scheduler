import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles, Typography } from '@material-ui/core';

import Schedule from './Schedule';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    textAlign: 'center'
  },
  header: {
    fontSize: '2rem'
  }
}));

function Schedules(props) {
  const classes = useStyles();

  const POOLS = {};
  props.pools.forEach(pool => {
    POOLS[pool.Id] = pool.Name;
  });

  const TEAMS = {};
  props.teams.forEach(team => {
    TEAMS[team.Id] = team.Name;
  });

  let schedules = props.schedules;
  if (props.scheduleOfTeam !== -1) {
    schedules = props.schedules.filter(s => s.Team1 === props.scheduleOfTeam || s.Team2 === props.scheduleOfTeam);
  }

  return <Dialog
    fullWidth={true}
    maxWidth="lg"
    open={props.openScheduleView}
    onClose={props.closeSchedule}
    aria-labelledby="match-schedule"
  >
    <DialogTitle id="match-schedule" className={classes.headerContainer}><span className={classes.header}>Schedule</span></DialogTitle>
    <DialogContent>
      {
        !schedules.length ?
        <Typography>
          No Schedules for this Team ( Please Generate Schedules Again )
        </Typography> :
        schedules.map((schedule, index) => (
          <Schedule key={index} schedule={schedule} pools={POOLS} teams={TEAMS} scheduleOfTeam={props.scheduleOfTeam} />
        ))
      }
    </DialogContent>
    <DialogActions>
      <Button onClick={props.closeSchedule} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
}

export default Schedules;
