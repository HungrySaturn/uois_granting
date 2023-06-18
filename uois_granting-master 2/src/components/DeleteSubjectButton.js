import { useDispatch } from "react-redux";
import { deleteSubject } from "../reducers/subjectsSlice1";
import { DeleteButton } from "./DeleteButton";

export const DeleteSubjectButton = ({ id }) => {
    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(deleteSubject(id));
      };

    return (
        <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
    );
};
