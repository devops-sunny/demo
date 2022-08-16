import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';


ConditionalDatepicker.propTypes = {
  name: PropTypes.string,
};

export default function ConditionalDatepicker({control,label, index , field ,name,  }) {
   return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
        label={label}
        {...field}
        type="date"
        size="small"
        fullWidth
        error={!!error}
        helperText={error?.message}
         InputLabelProps={{
          shrink: true,
        }}
      />
     )}
    />
  );
}
