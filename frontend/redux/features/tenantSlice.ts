// // src/redux/slices/tenantsSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tenants: [],
//   loading: false,
//   error: null,
// };

// export const tenantsSlice = createSlice({
//   name: 'tenants',
//   initialState,
//   reducers: {
//     fetchTenantsRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchTenantsSuccess: (state, action) => {
//       state.loading = false;
//       state.tenants = action.payload;
//     },
//     fetchTenantsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     createTenantRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     createTenantSuccess: (state, action) => {
//       state.loading = false;
//       state.tenants.push(action.payload);
//     },
//     createTenantFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchTenantsRequest,
//   fetchTenantsSuccess,
//   fetchTenantsFailure,
//   createTenantRequest,
//   createTenantSuccess,
//   createTenantFailure,
// } = tenantsSlice.actions;

// export default tenantsSlice.reducer;
