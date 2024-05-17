import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserProfile, updateUserProfile } from '../API/userAPI';

export const fetchUserDetails = createAsyncThunk(
    'user/fetchUserDetails',
    async (_, { getState, rejectWithValue }) => {
        const token = getState().auth.token;
        if (!token) {
            return rejectWithValue("No token found");
        }
        try {
            const data = await fetchUserProfile(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateUserDetails = createAsyncThunk(
    'user/updateUserDetails',
    async (userData, { getState, rejectWithValue }) => {
        const token = getState().auth.token;
        if (!token) {
            return rejectWithValue("No token found");
        }
        try {
            const data = await updateUserProfile(token, userData);
            return data.body;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: JSON.parse(localStorage.getItem('user')) || null,
        loading: false,
        error: null
    },
    reducers: {
        updateUserLocalDetails(state, action) {
            state.details = { ...state.details, ...action.payload };
        },
        clearUserDetails(state) {
            state.details = null;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserDetails.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload.body;

            localStorage.setItem('user', JSON.stringify(action.payload.body));
        })
        .addCase(fetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUserDetails.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.details = { ...state.details, ...action.payload };
        })
        .addCase(updateUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { updateUserLocalDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;
