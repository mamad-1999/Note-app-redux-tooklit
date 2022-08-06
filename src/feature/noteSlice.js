import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotes = createAsyncThunk("note/getNotes",
    async () => {
        try {
            const response = await axios.get('http://localhost:4000/notes');
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const addNote = createAsyncThunk('note/addNote',
    async (payload) => {
        const response = await axios.post('http://localhost:4000/notes', {
            id: Date.now(),
            title: payload.title,
            text: payload.text
        })
        return response.data
    }
)

export const editNote = createAsyncThunk('note/editNote',
    async (payload) => {
        const response = await axios.put(`http://localhost:4000/notes/${payload.id}`, {
            title: payload.title,
            text: payload.text
        })
        return response.data
    }
)

export const deleteNote = createAsyncThunk('note/deleteNote',
    async (payload) => {
        await axios.delete(`http://localhost:4000/notes/${payload.id}`)
        return { id: payload.id }
    }
)

const initialState = {
    loading: false,
    notes: [],
    error: ''
}

const noteSlice = createSlice({
    name: 'note',
    initialState,
    extraReducers: {
        [getNotes.pending]: (state) => {
            state.loading = true
        },
        [getNotes.fulfilled]: (state, action) => {
            state.loading = false
            state.notes = action.payload
            state.error = ''
        },
        [getNotes.rejected]: (state, action) => {
            state.loading = false
            state.notes = []
            state.error = action.error.message
        },
        [addNote.fulfilled]: (state, action) => {
            state.notes.push(action.payload)
        },
        [editNote.fulfilled]: (state, action) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id)
            state.notes[index] = {
                ...state[index],
                ...action.payload
            }
        },
        [deleteNote.fulfilled]: (state, action) => {
            console.log(action)
            state.notes = state.notes.filter((note) => note.id !== action.payload.id)
        }
    }
})

export default noteSlice.reducer