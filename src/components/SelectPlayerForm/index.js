import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import QuizContext from '../../ludoContext/ludoContext'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectPlayerForm = () => {
  const classes = useStyles();
  const [player, setPlayer] = React.useState('');
  const { setPlayerCount } = useContext(QuizContext)
  const handleChange = (event) => {
    setPlayer(event.target.value);
    setPlayerCount(event.target.value)
  };

  return (
    <div>
      <FormControl className={classes.formControl} disabled={player === '' ? false : true}>
        <InputLabel id="demo-simple-select-label">Player</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={player}
          onChange={handleChange}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectPlayerForm
