import React from 'react'
import { createStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ShareIcon from '@material-ui/icons/Share'
import MoreVerticalIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

import emptyImage from '../assets/empty-image.png'
import Tag from './common/Tag';
import moment from "moment";

const styles = theme => createStyles({
  root: {
    position: 'relative',
    minWidth: 260
  },
  mediaContainer: {
    position: 'relative'
  },
  toolbar: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    right: 0,
    width: '100%',
    justifyContent: 'flex-end',
    padding: theme.spacing(0.5, 1),
    backgroundImage: `linear-gradient(to top, transparent, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.8))`,
    color: theme.palette.common.white
  },
  toolbarLeft: {
    marginRight: 'auto'
  },
  badge: {
    position: 'absolute',
    top: 234,
    zIndex: 1,
    padding: theme.spacing(0.5, 1),
    borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    ...theme.typography.caption,
    fontWeight: 500,
    lineHeight: '100%',
    textTransform: 'capitalize'
  },
  content: {
    position: 'relative',
    padding: theme.spacing(1, 2, 0),
    height: theme.typography.fontSize * 8,
    maxHeight: theme.typography.fontSize * 8,
    overflowY: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: 50,
      bottom: 0,
      backgroundImage: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`
    }
  },
  title: {
    fontWeight: 500
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  detailsContainer: {
    position: 'relative',
    width: 'calc(100% - 100px)',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: 80,
      height: '100%',
      backgroundImage: `linear-gradient(to right, transparent, ${theme.palette.background.paper})`
    }
  },
  tagRow: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  tag: {
    cursor: 'pointer',
    paddingRight: theme.spacing(1),
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  actionButton: {
    backgroundColor: theme.palette.primary.light,
    textTransform: 'none',
    textDecorations: 'none',
    fontWeight: 700,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
});

class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    }
  }

  parseDate = (date) => {
    return `on ${moment(date).format('DD MM YYYY')}`
  };

  render() {
    const { classes, id, image, slug, category, title, author, tags, creationDate } = this.props;
    const { isMouseOver } = this.state;
    return (
      // TODO check for small devices with no hover option
      <Card
        className={classes.root}
        onMouseEnter={(() => this.setState({ isMouseOver: true }))}
        onMouseLeave={(() => this.setState({ isMouseOver: false }))}
      >
        <div className={classes.badge}>{category.key}</div>
        <div className={classes.mediaContainer}>
          <Slide
            direction={'down'}
            in={isMouseOver}>
            <div className={classes.toolbar}>
              <div className={classes.toolbarLeft}>
                <IconButton
                  color={'inherit'}
                  className={classes.closeDrawerButton}
                > <BookmarkBorderIcon />
                </IconButton>
                <IconButton
                  color={'inherit'}
                  className={classes.closeDrawerButton}
                > <ShareIcon />
                </IconButton>
              </div>
              <IconButton
                color={'inherit'}
                className={classes.closeDrawerButton}
              > <MoreVerticalIcon />
              </IconButton>
            </div>
          </Slide>
          {image ?
            <CardMedia
              component="img"
              alt="Post image"
              height="225"
              image={image}
              title={slug}
            /> :
            <CardMedia
              component="img"
              alt="Post image"
              height="225"
              image={emptyImage}
            />
          }
        </div>
        <CardActionArea>
          <Link className={classes.link} to={`/details/${id}/${slug}`}>
            <CardContent className={classes.content}>
              <Typography
                style={{
                  textIndent: `${category.key.length * 7 + 8}px`
                }}
                className={classes.title}
                variant="body1"
                component="h2">
                {title}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <Divider />
        <CardActions className={classes.footer}>
          <div className={classes.detailsContainer}>
            <div className={classes.tagRow}>
              {tags.map(tag => (
                <Tag
                  key={tag}
                  inline
                  to={`/tags/${tag}`}
                  variant={'body2'}
                >{tag}</Tag>
              ))}
            </div>
            <Typography
              variant={'caption'}>{`${author ? `by ${author.substring(0, 20)}` : ''} ${this.parseDate(creationDate)}`}</Typography>
          </div>
          <Link className={classes.link} to={`/details/${id}/${slug}`}>
            <Button
              className={classes.actionButton}
              color="primary">
              Show more
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(NewsItem)
