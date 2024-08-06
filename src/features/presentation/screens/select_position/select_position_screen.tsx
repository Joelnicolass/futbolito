import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Avatar, Layout, useTheme} from '@ui-kitten/components';
import AppText from '../../components/app_text/app_text';
import AppAvatar from '../../components/app_avatar/app_avatar';
import Plus from '../../../core/assets/Plus.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useVibration} from '../../hooks/use_vibration';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppRating from '../../components/app_rating/app_rating';

const SelectPositionAvatar = ({data}: {data?: any}) => {
  const {vibrate} = useVibration();

  return (
    <View
      style={{
        height: 80,
      }}>
      {data ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}>
          <Avatar
            src="https://i.pravatar.cc/300"
            style={{
              width: 56,
              height: 56,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
            }}>
            <AppText bold>
              {data?.name} {data?.lastName}
            </AppText>
            <AppRating
              rate={70}
              sizeIcon={16}
              sizeText="sm"
              color="white"
              align="center"
              row={true}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPressIn={() => vibrate()}
          onPress={() => {}}
          activeOpacity={0.8}
          style={{
            backgroundColor: 'white',
            borderRadius: 100,
            height: 56,
            width: 56,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Plus />
        </TouchableOpacity>
      )}
    </View>
  );
};

type Props = {};

const SelectPositionScreen = (props: Props) => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
      }}>
      <ImageBackground
        source={require('../../../core/assets/stadium.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: '100%',
          height: 'auto',
          justifyContent: 'space-around',
        }}>
        {/* 
          LOCAL
        */}
        <View
          style={{
            width: '100%',
            gap: 16,
            padding: 16,
          }}>
          {/* 
            arquero
          */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar />
          </View>

          {/* 
            defensa
          */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Matias',
                lastName: 'Perez',
              }}
            />
            <SelectPositionAvatar />
          </View>

          {/* 
              medio
            */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Juan',
                lastName: 'Perez',
              }}
            />
          </View>

          {/* 
                delantero
              */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Juan',
                lastName: 'Perez',
              }}
            />
          </View>
        </View>

        {/* 
          VISITANTE
        */}

        <View
          style={{
            width: '100%',
            gap: 16,
            padding: 16,
            opacity: 0.5,
          }}>
          {/* 
                delantero
              */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Juan',
                lastName: 'Perez',
              }}
            />
          </View>

          {/* 
                medio
              */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Juan',
                lastName: 'Perez',
              }}
            />
          </View>

          {/* 
                  defensa
                */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Matias',
                lastName: 'Perez',
              }}
            />
            <SelectPositionAvatar
              data={{
                name: 'Matias',
                lastName: 'Perez',
              }}
            />
          </View>

          {/* 
                      arquero
                    */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SelectPositionAvatar
              data={{
                name: 'Juan',
                lastName: 'Perez',
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SelectPositionScreen;

const styles = StyleSheet.create({});
