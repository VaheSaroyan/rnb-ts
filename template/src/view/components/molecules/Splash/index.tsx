import { useEffect, useRef, useState } from 'react';

import { Animated, Dimensions, StyleSheet } from 'react-native';

import * as BootSplash from 'react-native-bootsplash';

import bootSplashLogo from '~/view/assets/images/logo.jpg';

import s from './styles';

export const Splash = () => {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));
  const init = async () => {
    try {
      await BootSplash.hide();
      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get('window').height,
        }),
      ]).start();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        setBootSplashIsVisible(false);
      });
    } catch (error) {
      setBootSplashIsVisible(false);
    }
  };
  useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);
  if (!bootSplashIsVisible) {
    return null;
  }
  return (
    <Animated.View style={[StyleSheet.absoluteFill, s.bootSplash, { opacity: opacity.current }]}>
      <Animated.Image
        source={bootSplashLogo}
        fadeDuration={0}
        onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
        resizeMode="contain"
        style={[s.logo, { transform: [{ translateY: translateY.current }] }]}
      />
    </Animated.View>
  );
};
