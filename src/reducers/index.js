import { combineReducers} from 'redux';
import rowReducer from './row_reducer';
import editReducer from './edit_reducer'; 
import deleteReducer from './delete_reducer';
//State:

// const exampleState= {
//         row: {
//             description: '',
//             category: '',
//             value: '',
//             date: ''
//         }
//     }


const rootReducer = combineReducers({
    row: rowReducer,
    edit: editReducer,
    delete:deleteReducer
});  


export default rootReducer;