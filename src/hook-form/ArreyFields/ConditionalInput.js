import PropTypes from 'prop-types';
import { Controller  } from 'react-hook-form';
import { TextField } from '@mui/material';
import * as React from "react";

ConditionalInput.propTypes = {
  name: PropTypes.string,
};

export default function  ConditionalInput ({ control,label, name, index , field }){
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          size="small"
          label={label}
          fullWidth
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
