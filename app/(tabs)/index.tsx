import { Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Greeting from "@/components/Greeting";

export default function Index() {
  const insets = useSafeAreaInsets();
  
  return (
    <View 
      className="flex-1 bg-[#0f0D23] w-full h-full px-4" 
      style={{paddingTop: insets.top}}
    >
      <Greeting userName="User"/>
    </View>
  );
}