import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Doctors from "@/components/Doctors";
import DoctorsDetails from "@/components/DoctorsDetails";
import BookAppointment from "@/components/BookAppointment";
import AppointmentConfirmation from "@/components/AppointmentConfirmation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Analytic from "@/components/Analytic";

// import { Stack } from "expo-router";

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Docters"
        component={Doctors}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DocterDetails"
        component={DoctorsDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppointmentConfirmation"
        component={AppointmentConfirmation}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Analytic"
        component={Analytic}
        options={{ headerShown: false }}
      />
      {/* <Doctors /> */}
      {/* <DoctorsDetails /> */}
      {/* <BookAppointment /> */}
      {/* <AppointmentConfirmation /> */}
    </Stack.Navigator>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
