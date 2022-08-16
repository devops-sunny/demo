import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';


RHFDatepicker.propTypes = {
  name: PropTypes.string,
};

export default function RHFDatepicker({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
        {...field}
        type="date"
        size="sm"
        fullWidth
        defaultValue="yyyy-mm-dd"
        error={!!error}
        helperText={error?.message}
        {...other}
        value={typeof field.value === 'date' ? '' : field.value}
        InputLabelProps={{
          shrink: true,
        }}
      />
     )}
    />
  );
}
