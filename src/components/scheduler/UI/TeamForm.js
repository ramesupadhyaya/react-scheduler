import React from 'react';
import { makeStyles, Grid, TextField, Button, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputField: {
    marginRight: '16px',
  },
  nonTextField: {
    marginTop: '16px'
  }
}));

function TeamForm(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.inputField}>
        <TextField
          id="team-name"
          label="Team Name"
          value={props.teamName}
          onChange={props.setTeamName}
        />
      </Grid>
      <Grid item className={[classes.inputField, classes.nonTextField].join(' ')}>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.poolId}
            onChange={props.setPool}
          >
            {
              props.pools.map(pool => (
                <MenuItem value={pool.Id} key={pool.Id}>{pool.Name}</MenuItem>
              ))
            }
        </Select>
      </Grid>
      <Grid item className={classes.nonTextField}>
        <Button variant="contained" color="primary" onClick={props.editing === 'Edit' ? props.editTeam : props.addTeam} disabled={props.addButtonDisabled}>
          { props.editing === 'Edit' ? 'Edit' : 'Add'} Team
        </Button>
      </Grid>
    </Grid>
  );
}

export default TeamForm;
