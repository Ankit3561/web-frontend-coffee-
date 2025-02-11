// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { baseUrl } from "../../apis/baseApis";

// // Define User State
// interface UserState {
//     uid: string | null;
//     email: string | null;
//     token: string | null;
//     loading: boolean;
//     error: string | null;
// }

// // Initial State
// const initialState: UserState = {
//     uid: null,
//     email: null,
//     token: null,
//     loading: false,
//     error: null,
// };

// // Async Thunk for API Login Request
// export const loginUser = createAsyncThunk(
//     "user/loginUser",
//     async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
//         try {
//             const response = await fetch(`${baseUrl}/api/auth/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 throw new Error("Invalid credentials");
//             }

//             const data = await response.json();
//             return data; // Assuming the API returns { uid, email, token }
//         } catch (error: any) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.uid = null;
//             state.email = null;
//             state.token = null;
//             state.loading = false;
//             state.error = null;
//             sessionStorage.removeItem("User Id");
//             sessionStorage.removeItem("Auth token");
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ uid: string; email: string; token: string }>) => {
//                 state.uid = action.payload.uid;
//                 state.email = action.payload.email;
//                 state.token = action.payload.token;
//                 state.loading = false;
//                 sessionStorage.setItem("User Id", action.payload.uid);
//                 sessionStorage.setItem("Auth token", action.payload.token);
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// // Export Actions
// export const { logout } = userSlice.actions;

// // Export Reducer
// export default userSlice.reducer;
