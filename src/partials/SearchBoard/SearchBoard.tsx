import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { ApolloError } from "@apollo/client";

import { Box, TextField, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export type SearchBoardProps = {
  loading: boolean;
  error?: ApolloError;
  onSubmit: (username: string) => void;
};

export type FormValuesType = {
  username: string;
};

/**
 * A partial page component which loads search input form
 * @param props SearchBoardProps
 * @returns
 */
export const SearchBoard = (props: SearchBoardProps) => {
  const { loading, error, onSubmit } = props;
  const handleSubmit = (values: FormValuesType) => {
    onSubmit(values.username);
  };

  return (
    <Box display="flex" flexDirection="column" width="300px">
      <Formik
        validateOnMount
        initialValues={
          {
            username: "",
          } as FormValuesType
        }
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("UserName is required"),
        })}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <form noValidate onSubmit={formProps.handleSubmit}>
            {/* UserName Field */}
            <Box mb={2}>
              <TextField
                type="text"
                name="username"
                label="User Name"
                variant="outlined"
                color="secondary"
                value={formProps.values.username}
                error={Boolean(
                  formProps.touched.username && formProps.errors.username
                )}
                fullWidth
                helperText={
                  formProps.touched.username && formProps.errors.username
                }
                onBlur={formProps.handleBlur}
                onChange={formProps.handleChange}
              />
            </Box>

            {/* Show Error Message if exist after form submission */}
            {error && (
              <Box mb={2}>
                <Alert severity="error">{error.message}</Alert>
              </Box>
            )}

            {/* Submit Button(shows circular progress when submitting) */}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!formProps.isValid}
              size="large"
              loading={loading}
            >
              Search
            </LoadingButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};
