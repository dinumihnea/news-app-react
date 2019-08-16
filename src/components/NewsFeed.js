import React from 'react'
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import NewsItem from './NewsItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Loader from './common/Loader';
import ErrorBox from './common/ErrorBox';

export default class NewsFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  componentWillMount(): void {
    const category = this.props.match.params.category ? this.props.match.params.category : '';
    this.props.fetchDataRequest(category);
  }

  componentDidMount(): void {
    this.setState({ open: true });
  }

  componentWillUnmount(): void {
    this.setState({ open: false })
  }

  render() {
    const { feed } = this.props;
    console.log("FEED", feed);
    return (
      <React.Fragment>
        <Box m={1} mt={0}>
          <Typography variant={'button'}>{this.props.match.params.category}</Typography>
        </Box>
        {feed.errorMessage && <ErrorBox>{feed.errorMessage}</ErrorBox>}
        {feed.isLoading && <Loader />}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {feed.items.map(item => (
            <Slide direction={'up'} in={this.state.open} key={item._id}>
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={item._id}>
                <NewsItem
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  slug={item.slug}
                  category={item.category}
                  publishedAt={item.publishedAt}
                  author={item.author}
                  tags={item.tags} />
              </Grid>
            </Slide>
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}
