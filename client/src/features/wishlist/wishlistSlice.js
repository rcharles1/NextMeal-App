import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMyFavorites = createAsyncThunk(
  'wishlist/getMyFavorites',
  async () => {
    const response = await fetch(`http://localhost:3000/favorites//favoritesItems/`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}. Network response was not ok`);
    }
    const data = await response.json();
    return data[0].favorites;
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    clearWishlist: () => {
      return [];
  }
  },
  extraReducers: (builder) => {
    builder.addCase(getMyFavorites.fulfilled, ( action) => {
      return action.payload;
    });
  },
});

export const { clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
