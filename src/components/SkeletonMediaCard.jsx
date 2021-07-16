import { 
  Card,
  Grid,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Spacer from '../components/Spacer';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
    border: '1px solid #a7a7a7',
    borderRadius: 8
  },
  media: {
    height: 250,
    borderRadius: 8,
    objectFit: 'cover',
  }
}));

const ActionDiv = (props) => <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} {...props} />;
const CustomCardConten = (props) => <div style={{margin: 8}} {...props} />;

export default function SkeletonMediaCard(props) {
  const classes = useStyles();

  return (
    [...Array(props.count)].map((e, i) => {
      return (
        <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={i} >
          <Card className={classes.card}>
            <CustomCardConten>
              <Skeleton animation="wave" variant="rect" className={classes.media} />
              <CardContent>
                <Typography variant="h6">
                  <Skeleton animation="wave" />
                </Typography>
                <Typography variant="body2" component="p">
                  <Skeleton animation="wave" />
                </Typography>
                <Skeleton variant="text" height={15} width="30%" />
                <ActionDiv>
                  <Skeleton animation="wave" variant="text" height={20} width="40%" />
                  <Spacer />
                  <Skeleton animation="wave" variant="text" width="10%" />
                </ActionDiv>
              </CardContent>
            </CustomCardConten>
          </Card>
        </Grid>
      )
    })
  )
}
