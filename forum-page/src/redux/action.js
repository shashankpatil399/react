import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (formData, { rejectWithValue}) => {
      try {
        const response = await axios.post('http://localhost:8010/addUser', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
        
        if(response.data.status=== 201)
        {
          return 'success'
        }


        if (response.data.status === 200) {
          // Handle duplicate email
          return 'Email already exists';
        }

        console.log('I am in rrrs ',response);

  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


