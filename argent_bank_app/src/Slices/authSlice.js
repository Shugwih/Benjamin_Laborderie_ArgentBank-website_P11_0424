import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as apiLogin } from '../API/authAPI';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const data = await apiLogin(email, password);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isLoggedIn: false,
        error: null,
        loading: false
    },
    reducers: {
        logout(state) {
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
            state.loading = false;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.token = action.payload.body.token;
            state.user = action.payload.body.user;
            localStorage.setItem('token', state.token);
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
