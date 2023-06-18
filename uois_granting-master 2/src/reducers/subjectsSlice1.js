import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SubjectsQuery } from '../queries/SubjectsQuery';
import { program } from '../queries/fakeQuery';

// Async Thunk for loading subjects
export const loadSubjects = createAsyncThunk(
    'subjects/load',
    async () => {
        const response = await SubjectsQuery();
        const data = await response.json();
        return data.data.subjectPage;
    }
);

const subjectsSlice = createSlice({
    name: "subjects",
    initialState: program.subjects,
    reducers: {
        addSubject: (state, action) => {
            state.push(action.payload);
        },
        deleteSubject: (state, action) => {
            // Filter out the subject with the matching id
            return state.filter(subject => subject.id !== action.payload.id);
        },
        updateSubject: (state, action) => {
            const subjectIndex = state.findIndex(subject => subject.id === action.payload.id);
            if (subjectIndex >= 0) {
                state[subjectIndex] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubjects.pending, (state) => {
                // Reset the subjects list if loading new data
                state.length = 0;
            })
            .addCase(loadSubjects.fulfilled, (state, action) => {
                // Add the loaded subjects to the state array
                state.push(...action.payload);
            })
            .addCase(loadSubjects.rejected, (state, action) => {
                console.error('Failed to load subjects: ', action.error.message);
            });
    },
});

export const { addSubject, updateSubject, deleteSubject } = subjectsSlice.actions;

export default subjectsSlice.reducer;