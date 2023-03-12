import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: false
}

export const menuSlice = createSlice({
    name: 'menuPopup',
    initialState,
    reducers: {
        visibleMenu: (state, action) => {
            state.active = !state.active
        },
    }
})

// Action creators are generated for each case reducer function
export const { visibleMenu } = menuSlice.actions

// Exportamos por defecto el reducer que es lo que quiere luego el store
export default menuSlice.reducer