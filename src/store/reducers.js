import { combineReducers } from 'redux';
import { uiReducer } from './ui/reducers';
import { feedReducer } from './feed/reducers';
import { detailsReducer } from './details/reducers';
import { tagsReducer } from './tags/reducers';
import { creationReducer } from './creation/reducers';

export default combineReducers({
  ui: uiReducer,
  feed: feedReducer,
  create: creationReducer,
  details: detailsReducer,
  tags: tagsReducer
});
