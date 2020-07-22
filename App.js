import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import StyledForm from "./src/components/StyledForm";

import { StoreProvider } from "./context/Store";

export default function App() {
     return (
          <StoreProvider>
               <SafeAreaView style={styles.container}>
                    <StyledForm></StyledForm>
               </SafeAreaView>
          </StoreProvider>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
     },
});
