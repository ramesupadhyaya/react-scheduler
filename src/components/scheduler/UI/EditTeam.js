import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles, Typography } from '@material-ui/core';

import TeamForm from './TeamForm';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    textAlign: 'center'
  },
  header: {
    fontSize: '1.5rem'
  }
}));

function Schedules(props) {
  const classes = useStyles();

  return <Dialog
    fullWidth={true}
    maxWidth="sm"
    open={props.openEditTeam}
    onClose={props.closeEditTeamModal}
    aria-labelledby="edit-team"
  >
    <DialogTitle id="edit-team" className={classes.headerContainer}><span className={classes.header}>Edit Team</span></DialogTitle>
    <DialogContent>
      <TeamForm
        editing='Edit'
        pools={props.pools}
        teamName={props.teamName}
        setTeamName={props.setTeamName}
        poolId={props.poolId}
        setPool={props.setPool}
        editTeam={props.editTeam}
        addButtonDisabled={props.addButtonDisabled}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.closeEditTeamModal} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
}

export default Schedules;
