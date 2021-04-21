import React from "react";
import { useQuery } from "react-query";
import fetchAsync from "../lib/fetch";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import AppLayout from "../components/AppLayout";

const StarshipsFeed = () => {
  const { isLoading, isError, data } = useQuery("starships", () =>
    fetchAsync(`https://swapi.dev/api/starships/`)
  );

  if (isError) {
    return <Text>Error</Text>;
  }
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  //<FlatList data={data} renderItem={RenderItem} />

  //if (data.results === undefined) { return <Text>Not found...</Text> }
  if (data.results === undefined) {
    return <Text>Not found...</Text>;
  }
  return (
    <ScrollView>
      {data.results.map((starships) => {
        return (
          <Card style={styles.cardItem}>
            <Text style={styles.itemName}> {starships.name}</Text>
            <Text style={styles.itemModel}> Model {starships.model}</Text>
            <Text style={styles.itemCrew}> Crew {starships.crew}</Text>
            <Text style={styles.itemCost}>
              {" "}
              Cost {starships.cost_in_credits} credits
            </Text>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.button}
            >
              {" "}
              <Text style={styles.itemButton}> Buy </Text>{" "}
            </Button>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const StarshipsFeedScreen = () => {
  return (
    <AppLayout title="Starships">
      <View style={styles.container}>
        <StarshipsFeed></StarshipsFeed>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardItem: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#4b3dad",
    borderWidth: 2,
    borderColor: "#2a1c8a",
    shadowRadius: 10,
  },

  itemName: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  itemModel: {
    marginTop: 5,
    marginLeft: 8,
    color: "white",
  },
  itemCrew: {
    color: "white",
    marginLeft: 8,
  },
  itemCost: {
    marginTop: 8,
    color: "white",
  },
  button: {
    marginTop: 12,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#2a1c8a",
  },
  itemButton: {
    color: "#4b3dad",
    fontWeight: "bold",
  },
});

export default StarshipsFeedScreen;
