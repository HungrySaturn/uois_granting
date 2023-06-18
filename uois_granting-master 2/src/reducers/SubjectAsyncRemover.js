import { deleteSubject, updateSubject } from './subjectsSlice1';
import { SubjectDelete } from '../queries/SubjectRemoveQuery';

/**
 * An asynchronous action creator that sends a subject delete request to a server.
 * 
 * @param {string} id - ID of the subject to delete.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const SubjectDeleteAsync = (id) => (dispatch, getState) => {
  SubjectDelete(id)
      .then(response => response.json())
      .then(json => {
        const message = json.data?.SubjectDelete.msg
        const subject = json.data?.SubjectDelete.subject
        if (message === 'ok') {
          dispatch(updateSubject(subject))
        }
        return json
      })
};