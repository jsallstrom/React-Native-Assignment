import React from "react";

import { TextInput } from "react-native";

import StyledWrapper from "./StyledWrapper";

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
     const inputStyles = {
          inputField: {
               borderWidth: 1,
               borderColor: "black",
               padding: 10,
          },
     };

     if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
          inputStyles.inputField.borderColor = "red";
     }

     return (
          <StyledWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
               <TextInput
                    style={inputStyles.inputField}
                    onChangeText={formikProps.handleChange(formikKey)}
                    onBlur={formikProps.handleBlur(formikKey)}
                    {...rest}
               ></TextInput>
          </StyledWrapper>
     );
};

export default StyledInput;
