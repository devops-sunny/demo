import PropTypes from "prop-types";
import { Controller  } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

ConditionalSelect.propTypes = {
  name: PropTypes.string,
};

export default function ConditionalSelect({ control,label, index , field ,name, options }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl fullWidth>
            <TextField
              {...field}
              label={label}
              select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              error={!!error}
              helperText={error?.message}
             >
              <MenuItem value=""></MenuItem>
              {options.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>      
         </>
        )}
    />
  );
}
