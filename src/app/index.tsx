import WelcomeText from "../components/WelcomeText";
import {useCallback} from "react";
import {View} from "react-native";

const Index = () => {
  const onVoidAndOptionalChain = useCallback(() => {
    alert("onVoidAndOptionalChain was called");
  }, []);

  const onVoid = useCallback(() => {
    alert("onVoid was called");
  }, []);

  const onOptionalChain = useCallback(() => {
    alert("onOptionalChain was called");
  }, []);

  return (
    <View style={{
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <WelcomeText
        onVoidAndOptionalChain={onVoidAndOptionalChain}
        onVoid={onVoid}
        onOptionalChain={onOptionalChain}
      />
    </View>
  );
}

export default Index;
