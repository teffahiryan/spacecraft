import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StarshipsFeedScreen from "./src/screens/StarshipsFeedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SpaceStack } from "./src/navigation/Navigator";
//import { LoginScreen as App } from "./src/screens/LoginScreen";
//import StorybookUIRoot from "./storybook";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
//const SHOW_STORYBOOK = true;

const App = () => {
  return (
    <NavigationContainer>
      <SpaceStack />
    </NavigationContainer>
  );
};

export default App;

//const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
//export default UI;

// ANCIENNEMENT ENTRE LES BALISES NAVIGATION CONTAINER
/*<QueryClientProvider client={queryClient}>
<StarshipsFeedScreen> </StarshipsFeedScreen>
</QueryClientProvider>*/
