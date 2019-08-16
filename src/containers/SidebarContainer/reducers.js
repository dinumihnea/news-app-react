import { DRAWER_TOGGLE } from './actions';

let defaultState = {
  drawerOpen: true
};

export const sidebarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DRAWER_TOGGLE: {
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    }
    default:
      return { ...state }
  }
};
