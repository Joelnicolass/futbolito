import {
  Animated,
  Button,
  Dimensions,
  Easing,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from '../slide_item/slide_item';
import Pagination from '../pagination/pagination';
import {styles} from './slider_styles';
import {useDispatch} from 'react-redux';
import {changePage} from '../../../store/slice/onboardingSlice';
import {LAST_ITEM} from '../../../../core/utils/onboarding_data';
import {useRouter} from '../../../hooks/useRouter';
import {ROUTES} from '../../../router/routes';
import {useAppSelector} from '../../../hooks/useRedux';
const {width, height} = Dimensions.get('screen');

const Slider = ({data}: any) => {
  // const [index, setIndex] = useState(0);

  const [showButton, setShowButton] = useState(false);
  const {handleReplace} = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };
  const translateYImage = new Animated.Value(40);
  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    dispatch(changePage(viewableItems[0].index));
    if (viewableItems[0].index === LAST_ITEM) {
      setShowButton(true);
      Animated.timing(translateYImage, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start();
    } else {
      setShowButton(false);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={0} />
      {showButton && (
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              transform: [
                {
                  translateY: translateYImage,
                },
              ],
            },
          ]}>
          <TouchableOpacity
            onPress={() => handleReplace(ROUTES.REGISTER)}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>¡Empezar!</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};
export default Slider;
