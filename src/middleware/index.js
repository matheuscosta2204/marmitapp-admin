import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';


export default composeWithDevTools(applyMiddleware(thunk));