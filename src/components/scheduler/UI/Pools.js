import React from 'react';
import { makeStyles, Accordion, AccordionSummary, Typography, AccordionDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TeamDetail from './TeamDetail';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '32px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 800
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetails: {
    flexDirection: 'column'
  },
  scheduleButtons: {
    marginBottom: '16px',
    textAlign: 'center'
  },
  generateScheduleButton: {
    marginRight: '16px'
  }
}));

function Pools(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const TEAMS = {};
  props.teams.forEach(team => {
    TEAMS[team.Id] = team.Name;
  });

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.scheduleButtons}>
        <Button variant="contained" color="primary" onClick={props.generateSchedule} disabled={props.disabledGenerateScheduleButton} className={classes.generateScheduleButton}>
          Generate Schedule
        </Button>
        <Button variant="contained" color="primary" onClick={() => props.openSchedule()} disabled={props.disabledViewScheduleButton}>
          View Schedule
        </Button>
      </div>
      {
        props.pools.map(pool => (
          <Accordion expanded={expanded === pool.Id} key={pool.Id} onChange={handleChange(pool.Id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{pool.Name}</Typography>
              <Typography className={classes.secondaryHeading}>Teams - {pool.Teams.length}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              {
                pool.Teams.length === 0 ?
                <Typography>
                  No Teams
                </Typography> :
                pool.Teams.map(team => (
                  <TeamDetail
                    team={TEAMS[team]}
                    teamId={team}
                    key={team}
                    disabledViewScheduleButton={props.disabledViewScheduleButton}
                    openSchedule={props.openSchedule}
                    openEditTeamModal={props.openEditTeamModal}
                  />
                ))
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
}

export default Pools;
