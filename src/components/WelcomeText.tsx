import { Text } from "react-native";
import {FC, useEffect} from "react";

type WelcomeTextProps = {
  onReady?: () => Promise<void> | void;
}

const WelcomeText: FC<WelcomeTextProps> = ({onReady}) => {
  useEffect(() => {
    // TODO: this is not called
    void onReady?.();
  }, []);

  return <Text>Welcome!</Text>;
}

export default WelcomeText;
