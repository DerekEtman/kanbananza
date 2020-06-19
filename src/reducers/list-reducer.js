import {lists as defaultLists} from '../default-state.json';

const listsReducer = (lists = defaultLists, action) => {
    console.log(lists, action);
    return lists;
};

export default listsReducer;