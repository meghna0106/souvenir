import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    fontWeight : 'bold'
  },
  title : {
    fontWeight : 'bold',
    fontSize :'2em',
    fontFamily : 'Montserrat , sans-serif',
    color:'#632673'
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor : '#67349C',
    fontFamily : 'Montserrat , sans-serif',
    fontWeight : 'bold',
    '&:hover': {
      backgroundColor: '#e6d1f2',
      color: '#000000',
    },
  },
      
  buttonClear: {
    backgroundColor : '#78194F',
    fontWeight : 'bold',
    fontFamily : 'Montserrat , sans-serif',
    '&:hover': {
      backgroundColor: '#e6d1f2',
      color: '#000000',
    },
  }
}));
