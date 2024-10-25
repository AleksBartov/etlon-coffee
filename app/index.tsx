import News from "@/News";
import Products from "@/Products";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { useWindowDimensions, View } from "react-native";
import Animated from 'react-native-reanimated'

export default function Index() {
  const {width, height} = useWindowDimensions()
  return (
    <>
    <Canvas>
      <Rect width={width} height={height}>
        <LinearGradient start={vec(0,0)} end={vec(width,height)} colors={['red', 'black']} />
      </Rect>
    </Canvas>
    <View>
      <Animated.ScrollView>
        <View>
          <Animated.ScrollView></Animated.ScrollView>
          <Products />
        </View>
        <News />
      </Animated.ScrollView>
    </View>
    </>
  );
}
