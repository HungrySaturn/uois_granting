import { Trash } from "react-bootstrap-icons";
import { useState } from "react";
import { SubjectDeleteAsync } from "../reducers/SubjectAsyncRemover";
import { useDispatch } from "react-redux";

/**
 * A React component that renders a delete button for a subject.
 * @param {string} id - ID of the subject to be deleted.
 */
export const RemoveSubjectButton = ({ id }) => {
  const [deleteVisibility, setDeleteVisibility] = useState(false);
  const dispatch = useDispatch();
  
  if (deleteVisibility === false) {
    
    return (
      <button className="btn btn-danger btn-sm mx-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}><Trash/></button>
    );
  } else {
    return (
        
      <div className="container">
        <button className="btn btn-outline-danger btn-sm m-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}>Cancel</button>
        
        <button className="btn btn-danger btn-sm m-1" onClick={() => {dispatch(SubjectDeleteAsync(id))}}>Delete</button>
      </div>   
    );
  }
};