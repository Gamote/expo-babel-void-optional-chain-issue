import { Text } from "react-native";
import {FC, useEffect} from "react";

type WelcomeTextProps = {
  onLayout?: () => Promise<void> | void;
  onVoidAndOptionalChain?: () => Promise<void> | void;
  onVoid?: () => Promise<void> | void;
  onOptionalChain?: () => Promise<void> | void;
}

const WelcomeText: FC<WelcomeTextProps> = ({
  onVoidAndOptionalChain,
  onVoid,
  onOptionalChain
}) => {
  useEffect(() => {
    // 1. This will not work (it will be transpiled into `undefined`)
    // TODO: this is a problem only with SDK 50 in production mode
    void onVoidAndOptionalChain?.();

    // 2. This will work
    if(onVoid) {
      void onVoid();
    }

    // 3. This will also work
    onOptionalChain?.();
  }, []);

  return <Text>Welcome!</Text>;
}

export default WelcomeText;
