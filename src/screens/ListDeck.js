import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import { Card, Divider, Colors, Avatar, FAB } from "react-native-paper";

export default class ListDeck extends React.Component {
    render() {
        return(
            <View>
                <ScrollView>
                    {/* Implement displaying each deck */}
                <TouchableOpacity>
                    <Card.Title
                        title="This is the Title"
                        right={props => (
                        <Avatar.Text
                        size={24}
                        style={styles.avatarText}
                        //   Implement label
                        label="4"/>
                        )}
                    />
                    <Divider />
                </TouchableOpacity>
                </ScrollView>
                    <FAB style={styles.fab} icon="plus"
                        // Implement on Press Functionality
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
    fab: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.blue700
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "500"
    },
    avatarText: {
      marginRight: 16,
      backgroundColor: Colors.pink100
    }
  });