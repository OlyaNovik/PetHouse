import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { sessionService } from 'redux-react-session';

const middleware = (getDefaultMiddleware) => {
  const customMiddleware = [thunk];
  return getDefaultMiddleware({ serializableCheck: false }).concat(customMiddleware);
};

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sessionService.initSessionService(store);

export default store;
