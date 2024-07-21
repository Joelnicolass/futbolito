//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './app_button_styles';
import { Button } from '@ui-kitten/components';

interface AppButtonProps {
    validateValue: boolean; // Función que valida el valor
    outline: boolean; // Función que valida el valor
    handlePress: () => void; // Función que maneja el evento de presionar el botón
    buttonText: string;
  }
// create a component
export const AppButton = ({validateValue, handlePress, outline, buttonText}: AppButtonProps) => {
    const buttonStyle = outline ? styles.outline : styles.filled;
    
    return (
        <Button
        onPress={handlePress}
        style={!validateValue
            ? [buttonStyle, styles.btn, styles.disabled]
            : [buttonStyle, styles.btn, styles.enabled]
        }
        disabled={!validateValue}>
        {evaProps => (
          <Text {...evaProps} style={outline ? [styles.textLogin , styles.textWhite ] : [styles.textLogin]}>
            {buttonText}
          </Text>
        )}
      </Button>
    );
};

