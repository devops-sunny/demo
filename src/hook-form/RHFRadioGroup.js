import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Box, FormHelperText, FormLabel, InputLabel } from "@mui/material";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
};

export default function RHFRadioGroup({ name, options, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <FormLabel id="demo-radio-buttons-group-label">
            {other.label}
          </FormLabel>

          <RadioGroup
            {...field}
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            error={!!error}
            helperText={error?.message}
            {...other}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {options.map((item) => (
                <MyFormControlLabel
                  labelPlacement="start"
                  key={item.id}
                  label={item.title}
                  value={item.id}
                  control={<Radio />}
                />
              ))}
            </Box>
          </RadioGroup>
          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
