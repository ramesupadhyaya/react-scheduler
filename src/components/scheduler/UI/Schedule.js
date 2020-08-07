import React from 'react';
import { Grid, Typography, makeStyles, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px'
  },
  teamName1: {
    fontSize: '24px',
    fontWeight: 500,
    marginRight: '16px'
  },
  teamName2: {
    fontSize: '24px',
    fontWeight: 500,
    marginLeft: '16px'
  },
  gameDetail: {
    fontSize: '20px',
    fontWeight: 500
  }
}));

function Schedule(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography>
              <span
                className={classes.teamName1}
                style={{ color: props.scheduleOfTeam === props.schedule.Team1 ? '#3f51b5' : '#000000' }}>
                  {props.teams[props.schedule.Team1]}
              </span>
              vs
              <span
                className={classes.teamName2}
                style={{ color: props.scheduleOfTeam === props.schedule.Team2 ? '#3f51b5' : '#000000' }}>
                  {props.teams[props.schedule.Team2]}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Pool: <span className={classes.gameDetail}>{props.pools[props.schedule.Pool]}</span></Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Day: <span className={classes.gameDetail}>{props.schedule.Day}</span></Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Game: <span className={classes.gameDetail}>{props.schedule.Game}</span></Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
}

export default Schedule;
