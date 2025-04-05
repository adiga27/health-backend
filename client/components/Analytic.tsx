import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";
import BackNavigation from "./BackNavigation";
// import { GlassView } from "@metafic-co/react-native-glassmorphism";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

const Analytic = () => {
  return (
    <View style={styles.container}>
      <BackNavigation heading="Organ Health" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.organs}>
          <View style={styles.organ}>
            <Image
              source={require("../assets/images/heart.png")}
              style={{
                width: scale(100),
                height: scale(100),
              }}
            />
            <View style={styles.organBox}>
              <BlurView style={styles.blurView} intensity={15} />
              <Text style={styles.organText}>Heart</Text>
              <View style={styles.icon}>
                <Feather name="plus" size={scale(10)} color="white" />
              </View>
            </View>
          </View>
          <View style={styles.organ}>
            <Image
              source={require("../assets/images/brain.png")}
              style={{
                width: scale(100),
                height: scale(100),
              }}
            />
            <View style={styles.organBox}>
              <BlurView style={styles.blurView} intensity={15} />
              <Text style={styles.organText}>Brain</Text>
              <View style={styles.icon}>
                <Feather name="plus" size={scale(10)} color="white" />
              </View>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/heart.png")}
          style={{
            width: scale(360),
            height: scale(310),
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Analytic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: scale(20),
    paddingHorizontal: scale(20),
  },
  organs: {
    flexDirection: "row",
    columnGap: scale(20),
    alignItems: "center",
  },
  organ: {
    backgroundColor: "#F1F1F1",
    borderRadius: scale(15),
    paddingHorizontal: scale(30),
    position: "relative",
  },
  organBox: {
    width: scale(140),
    position: "absolute",
    bottom: scale(10),
    left: scale(10),
  },
  organText: {
    fontSize: scale(12),
    paddingLeft: scale(15),
    paddingVertical: scale(5),
    borderRadius: scale(15),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "#063247",
  },
  icon: {
    backgroundColor: "#063247",
    borderRadius: scale(100),
    padding: scale(3),
    paddingHorizontal: scale(3.5),
    position: "absolute",
    right: scale(10),
    bottom: scale(5),
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
});
