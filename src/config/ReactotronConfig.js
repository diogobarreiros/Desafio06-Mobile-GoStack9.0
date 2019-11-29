import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // const tron = Reactotron.configure({ host: 'meu ip' }).useReactNative().connect();

  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
