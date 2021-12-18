import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#d7b4f3'
  },
  heading: {
    color: '#632673',
    fontWeight : 'bold',
   
    fontFamily : 'Montserrat , sans-serif',

  },
  [theme.breakpoints.down('sm')]:{
    mainContainer : {
      flexDirection : 'column-reverse',
  }
 
  }
  }
));