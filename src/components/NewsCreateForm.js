import React from 'react';
import { Box, Container, createStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => createStyles({
  root: {},
  fullWidth: {
    width: '100%'
  }
});

class NewsCreateForm extends React.Component {

  constructor() {
    super();
    this.state = {
      category: '',
      tags: '',
      title: '',
      image: '',
      body: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      category: e.target.value
    });
  };

  handleTagChange = (e) => {
    this.setState({
      tags: e.target.value
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.value
    });
  };

  handleBodyChange = (e) => {
    this.setState({
      body: e.target.value
    });
  };

  submit = (e) => {
    e.preventDefault();
    // TODO validate
    let draftNews = {
      category: { key: this.state.category },
      tags: [this.state.tags],
      author: 'John Doe',
      title: this.state.title,
      image: this.state.image,
      body: this.state.body
    };
    this.props.createNewsRequest(draftNews);
  };

  render() {
    const { classes } = this.props;
    const { category } = this.state;
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    return (
      <Container maxWidth={'md'}>
        <form onSubmit={this.submit}>
          <Box width={'100%'} display={'flex'}>
            <Box p={1} width={'50%'}>
              <FormControl variant="outlined" className={classes.fullWidth}>
                <InputLabel ref={inputLabel} htmlFor="category">
                  Category
                </InputLabel>
                <Select
                  value={category}
                  onChange={this.handleChange}
                  input={<OutlinedInput labelWidth={64} name="Category" id="category" />}
                >
                  {this.props.categories.map(category => {
                    return (
                      <MenuItem key={category.key} value={category.key}>{category.title}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box p={1} width='50%'>
              {/* TODO make it multiple*/}
              <TextField
                id="tags"
                label="Tags"
                value={this.state.tags}
                className={classes.fullWidth}
                variant="outlined"
                onChange={this.handleTagChange}
              />
            </Box>
          </Box>
          <Box p={1} width='100%'>
            <TextField
              id="title"
              label="Title"
              value={this.state.title}
              className={classes.fullWidth}
              variant="outlined"
              onChange={this.handleTitleChange}
            />
          </Box>
          <Box p={1} width='100%'>
            <TextField
              id="body"
              label="Image Name"
              variant="outlined"
              className={classes.fullWidth}
              value={this.state.image}
              onChange={this.handleImageChange}
            />
          </Box>
          <Box p={1} width='100%'>
            <TextField
              id="body"
              label="Article"
              variant="outlined"
              multiline
              className={classes.fullWidth}
              rows={4}
              rowsMax={10}
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </Box>
          <Box p={1} width='100%' display={'flex'} justifyContent={'flex-end'}>
            <Button color="primary" type={'submit'}>
              Publish
            </Button>
          </Box>
        </form>
      </Container>
    );
  }
}

export default withStyles(styles)(NewsCreateForm);
