import { boxShadow } from "../../theme"

export const styles = {
    select : {
        
        'label + & .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            boxShadow: boxShadow,
        },

        'div + & .MuiFormControl-root' : {
            margin: 0
        }

    },
    menuItem : {
        '& .MuiInputBase-input': {
            boxShadow: boxShadow
        },
        '&:focus': {
      //maybe I need it in the future
          },
    }
}