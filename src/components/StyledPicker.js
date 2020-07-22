import React from "react";

import StyledWrapper from "./StyledWrapper";

import { Picker } from "react-native";

const StyledPicker = ({ label, pickerList, formikProps, formikKey, ...rest }) => {
     const [selectedValue, setSelectedValue] = React.useState(pickerList[0]);

     const pickerStyles = {
          picker: {
               borderWidth: 1,
               borderColor: "black",
               padding: 10,
          },
     };

     if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
          pickerStyles.picker.borderColor = "red";
     }

     return (
          <StyledWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
               <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => {
                         formikProps.setFieldValue(formikKey, itemValue);
                         setSelectedValue(itemValue);
                    }}
                    {...rest}
               >
                    {pickerList.map((value, index) => {
                         return <Picker.Item label={value} value={value} key={index}></Picker.Item>;
                    })}
               </Picker>
          </StyledWrapper>
     );
};

export default StyledPicker;
