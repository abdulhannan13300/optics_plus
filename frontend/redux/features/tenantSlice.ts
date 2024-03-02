import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface NewTenant {
  name: string;
  schemaName: string;
}

interface TenantState {
  newTenant: NewTenant;
  error: string | null;
  loading: boolean;
}

const initialState: TenantState = {
  newTenant: {
    name: "",
    schemaName: "",
  },
  error: null,
  loading: false,
};

export const registerTenant = createAsyncThunk<any, NewTenant>(
  "tenant/register",
  async (newTenantData, thunkAPI) => {
    try {
      const response = await axios.post("/api/tenants", newTenantData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    updateNewTenantField(
      state,
      action: { payload: { field: string; value: string } }
    ) {
      const { field, value } = action.payload;
      state.newTenant[field] = value;
    },
    clearNewTenant(state) {
      state.newTenant = initialState.newTenant;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTenant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerTenant.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        // Handle successful registration (e.g., navigate to success page)
      })
      .addCase(registerTenant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateNewTenantField, clearNewTenant } = tenantSlice.actions;
export default tenantSlice.reducer;
