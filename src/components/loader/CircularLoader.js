import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const CircularLoader = (props) => {
    const { size, color, fullScreen } = props;
    return (
        <View style={[styles.container, styles.horizontal, fullScreen && styles.fullScreen]}>
            <ActivityIndicator 
                size={size} 
                color={color || '#00ff00'} />
        </View>
    )
};



export default CircularLoader;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    },
    fullScreen: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#00000054',
    }
});