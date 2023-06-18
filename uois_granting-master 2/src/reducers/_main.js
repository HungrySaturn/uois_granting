import { ProgramFakeFetch, ProgramFetch, ProgramAsyncUpdate} from 'reducers/GrnatingAsyncActions'
import { SubjectAsyncUpdate} from 'reducers/GrnatingAsyncActions'


/**
 * vytvori actions
 * @param {*} dispatch 
 * @returns 
 */
export const bindGrantingActions = (dispatch) => {
    return {
        programFetch: (id) => dispatch(ProgramFetch(id)),
        
        programFakeFetch: (id) => dispatch(ProgramFakeFetch(id)),

        programAsyncUpdate: (program) => dispatch(ProgramAsyncUpdate(program)),

        subjectAsyncUpdate: (subject) => dispatch(SubjectAsyncUpdate(subject)),

        
    }
}