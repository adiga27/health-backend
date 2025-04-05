import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export type DoctorType = {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  specialist: string;
  location: string;
  experience: number;
  about: string;
  workingTime: [string];
  education: string;
};

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

const Doctors = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [items, setItem] = useState<DoctorType[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/doctors");
        console.log(data);
        if (data.status != "success") {
          console.error("error fetching doctor data");
        } else {
          setItem(data.message.doctors);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  console.log(items);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {items?.map((item) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DocterDetails" as never, { id: item.id })
            }
            key={item.id}
          >
            <View style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: scale(90),
                  height: scale(100),
                  borderRadius: scale(12),
                }}
              />
              <View>
                <Text
                  style={{
                    color: "#063247",
                    fontWeight: "bold",
                    fontSize: scale(16),
                  }}
                >
                  Dr. {item.firstName} {item.lastName}
                </Text>
                <Text
                  style={{
                    color: "#7D8A95",
                    fontWeight: "500",
                    fontSize: scale(10),
                    marginBottom: scale(15),
                  }}
                >
                  {item.specialist}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name={"location-outline"}
                    size={scale(12)}
                    color="#4B5563"
                    style={{ marginRight: scale(6) }}
                  />
                  <Text
                    style={{
                      fontSize: scale(14),
                      color: "#7D8A95",
                    }}
                  >
                    {item.location}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name={"star"}
                    size={scale(12)}
                    color="#4B5563"
                    style={{ marginRight: scale(6) }}
                  />
                  <Text
                    style={{
                      fontSize: scale(14),
                      color: "#7D8A95",
                    }}
                  >
                    {item.experience}+ Experience
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: scale(20),
  },
  card: {
    flex: 1,
    flexDirection: "row",
    columnGap: scale(20),
    backgroundColor: "#F1F1F1",
    borderRadius: scale(15),
    marginBottom: scale(20),
    padding: scale(10),
    color: "#063247",
    fontFamily: "Poppins",
  },
});
