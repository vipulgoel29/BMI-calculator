import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableHighlight,
  Modal,
  Pressable,
} from "react-native";

const App = () => {
  const { height: heightWindow, width: widthWindow } = useWindowDimensions();
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(182.28);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(18);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BMI CALCULATOR</Text>
      </View>

      {/* Gender selection screen */}
      <View style={[styles.gender]}>
        <TouchableHighlight
          style={[
            styles.genderElement,
            gender === "male" ? styles.genderElementActive : "",
          ]}
          underlayColor="#2b03bf"
          onPress={() => {
            setGender("male");
          }}
        >
          <>
            <Image
              style={[{ height: heightWindow * 0.15 }, styles.genderImage]}
              source={require("./assets/male.png")}
            />
            <Text style={styles.text}>MALE</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={[
            styles.genderElement,
            gender === "female" ? styles.genderElementActive : "",
          ]}
          underlayColor="#2b03bf"
          onPress={() => {
            setGender("female");
          }}
        >
          <>
            <Image
              style={[{ height: heightWindow * 0.15 }, styles.genderImage]}
              source={require("./assets/female.png")}
            />
            <Text style={styles.text}>FEMALE</Text>
          </>
        </TouchableHighlight>
      </View>

      {/* Height Scroll bar */}
      <View style={styles.height}>
        <Text style={styles.text}>HEIGHT</Text>
        <View style={styles.heightSlider}>
          <Text style={styles.content}>
            {Math.round(height * 100) / 100}
            <Text style={styles.heightUnit}> cm</Text>
          </Text>
          <Slider
            style={{ width: widthWindow * 0.8 }}
            minimumValue={0}
            maximumValue={250}
            minimumTrackTintColor="#dadaec"
            maximumTrackTintColor="#9496a5"
            thumbTintColor="#eb1555"
            value={height}
            onValueChange={(value) => setHeight(value)}
          />
        </View>
      </View>

      {/* Weight and age */}
      <View style={styles.input}>
        {/* Weight */}
        <View style={styles.inputElement}>
          <Text style={styles.text}>WEIGHT</Text>
          <Text style={styles.content}>{weight}</Text>
          <View style={styles.operatorContainer}>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={"#1d1e33"}
              onPress={() => {
                setWeight((prevValue) => ++prevValue);
              }}
            >
              <Text style={styles.operator}>+</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={"#1d1e33"}
              onPress={() => {
                setWeight((prevValue) => prevValue && --prevValue);
              }}
            >
              <Text style={styles.operator}>-</Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* Age */}
        <View style={styles.inputElement}>
          <Text style={styles.text}>AGE</Text>
          <Text style={styles.content}>{age}</Text>
          <View style={styles.operatorContainer}>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={"#1d1e33"}
              onPress={() => {
                setAge((prevValue) => ++prevValue);
              }}
            >
              <Text style={styles.operator}>+</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor={"#1d1e33"}
              onPress={() => {
                setAge((prevValue) => prevValue && --prevValue);
              }}
            >
              <Text style={styles.operator}>-</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      <TouchableHighlight
        onPress={() => setVisibleModal(true)}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            width: "80%",
            textAlign: "center",
            padding: "5%",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: 2,
            backgroundColor: "#eb1555",
          }}
        >
          Calculate
        </Text>
      </TouchableHighlight>

      <Modal
        animationType="slide"
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(!visibleModal)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: "10%",
              alignItems: "center",
              gap: 32,
              borderRadius: 24,
            }}
          >
            <Text style={styles.content}>
              BMI is :{" "}
              {Math.round((weight * 10000 * 100) / (height * height)) / 100}
            </Text>
            <Pressable onPress={() => setVisibleModal(false)}>
              <Text
                style={{
                  backgroundColor: "#eb1555",
                  paddingVertical: "3%",
                  paddingHorizontal: "10%",
                  borderRadius: 12,
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "400",
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#9496a5",
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
  },
  content: {
    alignSelf: "center",
    color: "#dadaec",
    fontSize: 40,
    letterSpacing: 1.5,
    fontWeight: "700",
  },
  container: {
    backgroundColor: "#0c1025",
  },
  header: {
    paddingTop: "10%",
    paddingBottom: "5%",
    backgroundColor: "#0c1035",
  },
  headerText: {
    color: "#fff",
    marginHorizontal: "10%",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 2,
  },
  gender: {
    padding: "5%",
    flexDirection: "row",
    gap: 20,
  },
  genderElement: {
    borderRadius: 30,
    paddingVertical: "8%",
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
    backgroundColor: "#101338",
  },
  genderElementActive: {
    backgroundColor: "#1b059c",
  },
  genderImage: {
    width: "70%",
    objectFit: "contain",
  },

  height: {
    alignSelf: "center",
    width: "85%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1d1e33",
    borderRadius: 16,
    gap: 12,
    paddingVertical: "5%",
  },

  heightSlider: {
    gap: 16,
    flex: 1,
    alignItems: "center",
  },

  heightUnit: {
    fontSize: 24,
    fontWeight: "500",
  },

  input: {
    flex: 1,
    margin: "5%",
    gap: 20,
    flexDirection: "row",
  },
  inputElement: {
    flex: 1,
    backgroundColor: "#1d1e33",
    paddingVertical: "8%",
    borderRadius: 20,
    gap: 12,
  },
  operatorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "20%",
  },
  operator: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 40,
  },
});

export default App;
