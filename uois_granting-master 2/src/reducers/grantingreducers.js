import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';



/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const ProgramSlice = createSlice({
    name: 'programs',
    initialState: {},
    reducers: {
        program_add: CreateItem,
        program_delete: DeleteItem,
        program_replace: ReplaceItem,
        program_update: UpdateItem,
        program_select: SelectItem,
    }
})


export const SubjectSlice = createSlice({
    name: 'subjects',
    initialState: {},
    reducers: {
        subject_add: CreateItem,
        subject_delete: DeleteItem,
        subject_replace: ReplaceItem,
        subject_update: UpdateItem,
        subject_select: SelectItem,
    }
})

//z rezu odvozene akce
export const SubjectActions = SubjectSlice.actions
//z rezu odvozeny stavovy automat
export const SubjectReducer = SubjectSlice.reducer

//z rezu odvozene akce
export const ProgramActions = ProgramSlice.actions
//z rezu odvozeny stavovy automat
export const ProgramReducer = ProgramSlice.reducer