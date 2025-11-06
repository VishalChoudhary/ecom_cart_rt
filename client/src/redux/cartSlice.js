import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  carts:[],
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers:{
    //add to cart
    addToCart:(state,action)=>{

      const ItemIndex = state.carts.findIndex((item)=>item.id===action.payload.id);
      // console.log(ItemIndex);
      if(ItemIndex>=0){
        state.carts[ItemIndex].qnty += 1;
      }
      else{
        const temp = {...action.payload,qnty:1}
        state.carts=[...state.carts,temp];
      }
    },
    //remove particular element from cart
    removeFromCart:(state,action)=>{
      const data = state.carts.filter((item)=>item.id!==action.payload);
      state.carts = data;
    },
    //remove single items
    removeSingleItem:(state,action)=>{
      const ItemIndex_sin = state.carts.findIndex((item)=>item.id===action.payload.id);
      if(state.carts[ItemIndex_sin].qnty>=1){
        state.carts[ItemIndex_sin].qnty -= 1;
      }
    },
    //clear cart
    emptyCart:(state,action)=>{
      state.carts=[];
    }
  }
});

export const {addToCart,removeFromCart,removeSingleItem,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;