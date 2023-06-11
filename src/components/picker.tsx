// ...rest of the import statements remain unchanged
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Picker() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleLongPress = (index: number) => {
    setSelectedImages(selectedImages.filter((v, i) => index != i));
  };

  return (
    <View style={style.container}>
      {selectedImages.length < 4 && (
        <Button title="buttt" onPress={() => pickImageAsync()} />
      )}
      {selectedImages.length !== 0 &&
        selectedImages.map((s, i) => (
          <TouchableWithoutFeedback onLongPress={() => handleLongPress(i)}>
            <Image
              source={{ uri: selectedImages[i] }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableWithoutFeedback>
        ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    height: 100,
    width: 100,
  },
});
