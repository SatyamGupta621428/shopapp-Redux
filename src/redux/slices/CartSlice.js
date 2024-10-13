import { createSlice } from "@reduxjs/toolkit";




export const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        add: (state,action)=>{
            //here action.payload refers to the input parameter passed 
            //check in Product.jsx there dispatch(add(post)) is passed so the parameter post is then accessed in this way
            state.push(action.payload)
        },
        remove: (state, action)=>{
            return state.filter((item)=> item.id!== action.payload)// Here action.payload is the id passed from dispatch(remove(post.id))
        },
        update: (state,action)=>{
            const{id, units} = action.payload
        //    return state.map(item=>item.id === id? {...item, units: units}: item)
            const existingItem = state.find(item=> item.id === id)
            existingItem.units = units;
        }
    }
})

export const {add, remove, update} = CartSlice.actions

export default CartSlice.reducer