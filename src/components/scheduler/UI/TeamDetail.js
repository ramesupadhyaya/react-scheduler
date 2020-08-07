import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  teamDetails: {
    marginBottom: '16px'
  }
}));

function TeamDetail(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.teamDetails}
    >
      <Grid item>
        <Typography>{props.team}</Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => props.openEditTeamModal(props.teamId)}>
          <EditIcon />
        </Button>
        <Button variant="contained" color="primary" disabled={props.disabledViewScheduleButton} onClick={() => props.openSchedule(props.teamId)}>
          Schedule
        </Button>
      </Grid>
    </Grid>
  );
}

export default TeamDetail;
