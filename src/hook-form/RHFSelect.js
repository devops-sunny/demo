import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

RHFSelect.propTypes = {
  name: PropTypes.string,
};

export default function RHFSelect({ name, options, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl fullWidth>
            <TextField
              {...field}
              select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value={typeof field.value === "number" && field.value}
              error={!!error}
              helperText={error?.message}
              {...other}
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
