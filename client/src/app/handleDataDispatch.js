import {fetchUsers} from "./appSlice";

const handleDataDispatch = (text, dispatch) => {
    dispatch(fetchUsers(text))
}

export default handleDataDispatch