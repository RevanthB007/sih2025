import { Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Greeting from "@/components/Greeting";
import Exercises from "@/components/Exercises";
import Activities from "@/components/Activities";
import Progress from "@/components/Progress";

export default function Index() {
  const insets = useSafeAreaInsets();
     
  return (
    <View 
      className="flex-1 bg-[#0f0D23]"
      style={{paddingTop: insets.top}}
    >
      <ScrollView 
        className="flex-1 w-full"
        contentContainerStyle={{
          gap: 12, 
          padding: 4,
        }}
        showsVerticalScrollIndicator={false} 
      >
        <Greeting userName="User"/>
        <Exercises exercises={["Pushups", "Pullups","Squats","Bench Press","Deadlift"]}/>
        <Activities/>
        <Progress />
      </ScrollView>
    </View>
  );
}