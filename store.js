import { configureStore } from 'redux-starter-kit';
import todoSliceReducer from './screens/ServiceSlice';

const store = configureStore({
  reducer: todoSliceReducer,
});

export default store;