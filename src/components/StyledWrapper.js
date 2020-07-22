import React from "react";

import { Text, View } from "react-native";

const StyledWrapper = ({ children, label, formikProps, formikKey }) => {
     const wrapperStyles = {
          container: {
               marginHorizontal: 20,
               marginVertical: 5,
               width: 250,
          },

          label: { marginBottom: 3 },

          errorMessage: {
               color: "red",
          },
     };

     return (
          <View style={wrapperStyles.container}>
               <Text /* LABEL */ style={wrapperStyles.label}>{label}</Text>

               {children}

               <Text /*ERROR MESSAGES */ style={wrapperStyles.errorMessage}>
                    {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
               </Text>
          </View>
     );
};

export default StyledWrapper;
