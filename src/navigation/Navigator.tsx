import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./AppRoute";
import { LoginScreen, StarShipsFeedScreen, TermsScreen } from "../screens";

const Stack = createStackNavigator();

export function SpaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} />
      <Stack.Screen
        name={AppRoute.STARSHIP_FEED_SCREEN}
        component={StarShipsFeedScreen}
      />
    </Stack.Navigator>
  );
}
