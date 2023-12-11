import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import * as React from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { useRef } from "react";
import { ThreadsContext } from "../../context/thread-context";
import ThreadItem from "../../components/ThreadItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          // backgroundColor: "grey",
          paddingTop: 55,
          paddingHorizontal: 10,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => animationRef.current?.play()}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../assets/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
          // onAnimationFinish={() => alert("finished")}
        />

        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
