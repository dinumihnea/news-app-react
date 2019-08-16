import React, { Fragment } from 'react'
import { Container, createStyles } from '@material-ui/core';
import ErrorBox from './common/ErrorBox';
import Loader from './common/Loader';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import Tag from './common/Tag';
import moment from "moment";

const styles = theme => createStyles({
  topLine: {
    position: 'relative',
    padding: theme.spacing(1, 1, 2),
    zIndex: theme.zIndex.appBar + 1,
    backgroundColor: theme.palette.background.default
  },
  chipWrapper: {
    position: 'relative',
    transform: 'translateY(-50%)',
    padding: theme.spacing(1, 3),
    backgroundColor: theme.palette.background.default
  },
  chip: {
    zIndex: 1,
    position: 'relative'
  },
  floatingChip: {
    position: 'absolute',
    top: theme.spacing(-3),
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  topDetailsRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: theme.spacing(2)
  },
  image: {
    width: '100%',
    borderRadius: theme.shape.borderRadius
  }
});

class NewsDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  componentDidMount(): void {
    const newsId = this.props.match.params.id;
    this.props.detailsFetchRequest(newsId);
    this.setState({ open: true });
  }

  componentWillUnmount(): void {
    this.setState({ open: false })
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    // Append slug if it is not present or not match in the url
    const { details } = nextProps;
    if (details.item.slug && nextProps.match.params.slug !== details.item.slug) {
      this.props.history.push(`/details/${details.item._id}/${details.item.slug}`);
    }
  }

  parseDate = (date) => {
    return `on ${moment(date).format('DD MM YYYY')}`
  };

  render() {
    const { details, classes } = this.props;
    return (
      <Container maxWidth={'md'}>
        {details.errorMessage && <ErrorBox>{details.errorMessage}</ErrorBox>}
        {details.isLoading && <Loader />}
        {details.item._id &&
        <Fragment>
          <Slide direction={'down'} in={this.state.open}>
            <Box className={classes.topLine}>
              <div className={classes.floatingChip}>
                <div className={classes.chipWrapper}>
                  <Chip
                    className={classes.chip}
                    color="primary"
                    label={details.item.category.en} />
                </div>
              </div>
              <div className={classes.topDetailsRow}>
                <Box px={1}>
                  {details.item.tags.map(tag => (
                    <Tag
                      key={tag}
                      inline
                      to={`/tags/${tag}`}
                    >{tag}</Tag>
                  ))}
                </Box>
                <Box fontWeight="fontWeightMedium" px={1}>
                  {details.item.author && <Fragment>by <b>{details.item.author} </b></Fragment>}
                  {this.parseDate(details.item.creationDate)}
                </Box>
              </div>
            </Box>
          </Slide>
          <Grow in={this.state.open}>
            <article>
              <CardMedia
                className={classes.image}
                component="img"
                alt={details.item.slug}
                image={details.item.image}
              />
              <Box my={3}>
                <Typography variant={'h5'}>{details.item.title}</Typography>
              </Box>
              <Divider />
              <Box my={3}>
                <Typography>{details.item.body}</Typography>
              </Box>
            </article>
          </Grow>
        </Fragment>
        }
      </Container>
    );
  }
}

export default withStyles(styles)(NewsDetails);
