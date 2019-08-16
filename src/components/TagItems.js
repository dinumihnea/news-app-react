import React from 'react'
import Grid from '@material-ui/core/Grid';
import NewsItem from './NewsItem';
import Slide from '@material-ui/core/Slide';
import Loader from './common/Loader';
import ErrorBox from './common/ErrorBox';

export default class TagItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, activeTag: ''}
    }

    componentWillReceiveProps(nextProps, nextContext): void {
        this.fireFetchByTagRequest(nextProps)
    }

    componentWillMount(): void {
        this.fireFetchByTagRequest();
    }

    fireFetchByTagRequest(nextProps) {
        const urlTag = nextProps ? nextProps.match.params.tag : this.props.match.params.tag;
        if (this.state.activeTag !== urlTag) {
            this.props.fetchByTagRequest(urlTag);
            this.setState({
                activeTag: urlTag
            })
        }
    }

    componentDidMount(): void {
        this.setState({open: true});
    }

    componentWillUnmount(): void {
        this.setState({open: false})
    }

    render() {
        const {feed} = this.props;
        return (
            <React.Fragment>
                {feed.errorMessage && <ErrorBox>{feed.errorMessage}</ErrorBox>}
                {feed.isLoading && <Loader/>}
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
                                    tags={item.tags}/>
                            </Grid>
                        </Slide>
                    ))}
                </Grid>
            </React.Fragment>
        )
    }
}
