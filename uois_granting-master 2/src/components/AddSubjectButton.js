import { useDispatch } from "react-redux";
import { addSubject } from "../reducers/subjectsSlice1"
import {v1 as uuid} from "uuid";
import { changeFormState } from '../reducers/subjectsAddFormSlice';

export const AddSubjectButton = ({ subject }) => {
    // We use dispatch from react-redux to dispatch actions
    const dispatch = useDispatch();

    const OnAddClick = () => {
        // Generate a unique ID for the subject using uuid
        subject["id"] = uuid();
        // Dispatch the addSubject action with the subject data
        dispatch(addSubject(subject));
    }

    return (
        <button type="submit" className="btn btn-success" onClick={() => { OnAddClick(); dispatch(changeFormState()) }}>Add</button>
    )
}
