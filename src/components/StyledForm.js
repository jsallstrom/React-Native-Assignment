import React, { useEffect, useContext } from "react";
import { StyleSheet, Button, ScrollView, ActivityIndicator } from "react-native";

import { Formik } from "formik";

import * as yup from "yup";
import StyledInput from "./StyledInput";
import StyledPicker from "./StyledPicker";

import axios from "axios";

import { Store } from "../../context/Store";

/* Yup Validation part */

const ssNumberRegex = /^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/;
const phNumberRegex = /^([+]46)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;

const validationSchema = yup.object().shape({
     ssNumber: yup
          .string()
          .matches(ssNumberRegex, "Must be a valid Swedish Social Security Number")
          .required("Social security number is required"),
     phNumber: yup
          .string()
          .matches(phNumberRegex, "Must be a valid Swedish number")
          .required("Phone number is required"),
     email: yup.string().lowercase().email("Must be a valid email!").required("Email is required"),
     country: yup.string().lowercase().required("Country is required"),
});

/* ***** */

const initialValues = {
     ssNumber: "",
     phNumber: "",
     email: "",
     country: "",
};

export default function StyledForm() {
     const URL = "https://restcountries.eu/rest/v2/all/";

     const { state, dispatch } = useContext(Store);

     useEffect(() => {
          fetchDataAction();
     }, []);

     const fetchDataAction = async () => {
          let res = await axios.get(URL);
          let data = res.data;

          const countryList = data.map((country) => {
               return country.name;
          });

          dispatch({
               type: "FETCH_DATA",
               payload: countryList,
          });
     };

     return (
          <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, actions) => {
                    console.log("Success");
                    alert(JSON.stringify(values));
                    actions.setSubmitting(false); // do this to stop the spinner
               }}
          >
               {(formikProps) => (
                    <ScrollView style={formStyles.scrollView}>
                         <StyledInput
                              label="Social security number"
                              formikProps={formikProps}
                              formikKey={"ssNumber"}
                              placeholder="XXXXXXXX-XXXX"
                              autoFocus
                         ></StyledInput>
                         <StyledInput
                              label="Phone Number"
                              formikProps={formikProps}
                              formikKey={"phNumber"}
                              placeholder="+46 72 555 555"
                         ></StyledInput>
                         <StyledInput
                              label="Email"
                              formikProps={formikProps}
                              formikKey={"email"}
                              placeholder="johndoe@example.com"
                         ></StyledInput>
                         <StyledPicker
                              label="Country"
                              mode=""
                              pickerList={state.countryList}
                              formikProps={formikProps}
                              formikKey={"country"}
                         ></StyledPicker>

                         {formikProps.isSubmitting ? (
                              <ActivityIndicator />
                         ) : (
                              <Button title="submit" onPress={formikProps.handleSubmit} />
                         )}
                    </ScrollView>
               )}
          </Formik>
     );
}
const formStyles = StyleSheet.create({
     scrollView: {
          paddingTop: 40,
     },
});
