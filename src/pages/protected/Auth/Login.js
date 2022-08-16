import { IconButton, InputAdornment, Stack } from "@mui/material/node";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LogoLarge from "../../../assets/images/logo-large.svg";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { logIn } from "../../../redux/Auth/Action";
import { useDispatch } from "react-redux";
import { FormProvider, RHFTextField } from "../../../hook-form";
import Iconify from "../../../components/Iconify";

const defaultValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    dispatch(logIn(loginData));
  };
  return (
    <>
      <section className="loginFormMain">
        <div className="fullBgImg" />
        <div className="welcome">
          <span>W</span>elcome! to Urgent Care
        </div>
        <div className="ct-row">
          <div className="left-col">
            <div className="logo-img">
              <img src={LogoLarge} alt="" />
            </div>
          </div>
          <div className="form-main">
            <div className="title">
              <h2>Login in</h2>
              <p>Enter Your Details Below.</p>
            </div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <RHFTextField name="email" label="Email address" />
                <RHFTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <br />
              <div className="form-group">
                <div className="check-forgotpass">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                  </div>
                  <a href="#" className="forgot-pass">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="form-group btn-row">
                <input
                  type="submit"
                  className="cmn-btn"
                  defaultValue="Login"
                  loading={isSubmitting}
                />
              </div>
            </FormProvider>
          </div>
        </div>
      </section>
    </>
  );
}
