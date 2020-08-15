import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: '2px solid #ff9800',
    borderRight: '1px solid #ff9800',
    borderLeft: '1px solid #ff9800',
    borderBottom: '2px solid #ff9800',
    borderRadius:30,
    padding:15
  },
  activeCard: {
    borderTop: '2px solid #ff5722',
    borderBottom: '4px solid #ff5722',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
