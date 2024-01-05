import WelcomeText from "../components/WelcomeText";
import {useCallback} from "react";
import {View} from "react-native";

const Index = () => {
  const onReady = useCallback(() => {
    alert("It shows");
  }, []);

  return (
    <View style={{
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <WelcomeText onReady={onReady} />
    </View>
  );
}

export default Index;
