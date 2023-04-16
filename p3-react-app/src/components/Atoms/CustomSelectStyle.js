import { colors, boxShadow, boxShadowIn } from "../../theme"
export const styles = {

    select : {
        'label + & .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            boxShadow: boxShadow,
            
        },

    },
    menuItem : {
        '& .MuiInputBase-input': {
            boxShadow: boxShadow
        
        },
        '&:focus': {
      
          },
    }
}