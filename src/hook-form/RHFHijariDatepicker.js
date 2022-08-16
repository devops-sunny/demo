import { FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import HijirDatePicker from '../components/Datepicker';

RHFHijariDatepicker.propTypes = {
  name: PropTypes.string,
};

export default function RHFHijariDatepicker({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
           <HijirDatePicker
                  dateFormat="iYYYY/iMM/iDD"
                  placeholder="YYYY/MM/DD"
                  error={!!error}
                  helperText={error?.message}
                  value={typeof field.value === 'date' ? '' : field.value}
                  quickSelect
                  {...field}
                  type="date"
                  fullWidth
                  {...other}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> 
            {!!error && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>

        )}
      />

    </>
  );
}

