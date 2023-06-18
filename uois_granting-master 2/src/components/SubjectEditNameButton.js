import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubjectSlice } from 'reducers/grantingreducers';

export const SubjectEditNameButton = ({ subject }) => {
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(subject.name);

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = () => {
    dispatch(SubjectSlice.actions.subject_delete({ id: subject.id, name: newName }));
    setIsEditing(false);
  }

  return (
    <div>
      {!isEditing ? (
        <button onClick={handleEdit}>Edit</button>
      ) : (
        <div>
          <input type="text" value={newName} onChange={handleNameChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};