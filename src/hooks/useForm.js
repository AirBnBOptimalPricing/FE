import React from 'react';
import { withFormik } from 'formik';

export const useForm = (Component, configuration) => {
  const enhancedForm = withFormik(configuration)(Component);

  return enhancedForm;
};
