import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async Thunk to fetch one user
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex]; 
});

const userslice = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: "idle",
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default userslice.reducer;
