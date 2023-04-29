import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Cardiology:true ,
    Neurology:false,
    Dental:false,
    Diagnostic:false,
    token_page_data:"hii"
}

export const catogoriesSlice = createSlice({
  name: 'catogories',
  initialState,
  reducers: {
     statechange : (state,action)=>{
        if(action.payload=="Cardiology"){
          state.Cardiology = true
          state.Neurology=false
          state.Dental=false
          state.Diagnostic=false
        }
        if(action.payload=="Neurology"){

            state.Neurology=true
            state.Cardiology = false
            state.Dental=false
            state.Diagnostic=false
           
        }if(action.payload=="Dental"){

            state.Dental=true
            state.Cardiology = false
            state.Neurology=false
            state.Diagnostic=false

        }if(action.payload=="Diagnostic"){

            state.Diagnostic=true
            state.Cardiology = false
            state.Neurology=false
            state.Dental=false

        }
       
      }
  },
})

// Action creators are generated for each case reducer function
export const { statechange } = catogoriesSlice.actions

export default catogoriesSlice.reducer