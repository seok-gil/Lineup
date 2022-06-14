import React, { useState } from "react";
import {
   CheckBox, 
   Text, 
   StyleSheet, 
   View 
  } from "react-native";

const App = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>모두 확인, 동의합니다.</Text>
        <Text style={styles.label}>(필수) 서비스 이용약관</Text>
        <Text style={styles.label}>(필수) 개인정보 수집 및 이용동의</Text>
        <Button title="다음"/>
      </View>
      {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default App;