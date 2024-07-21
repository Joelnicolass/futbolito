//import liraries
import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {AppButton} from '../app_button/app_button';
import AppText from '../app_text/app_text';
import {openComposer, openInbox} from 'react-native-email-link';

interface ValidateAccountProps {
  email: string;
}
// create a component
export const ValidateAccount = ({email}: ValidateAccountProps) => {
  return (
    <>
      <AppText size="md">Ingrese el código de confirmación</AppText>
      <AppText
        size="sm"
        children={`Para confirmar su cuenta, ingrese el código de 6 dígitos que le enviamos a ${email}`}
      />
      <AppButton
        validateValue={true}
        handlePress={() =>
           openInbox()
        }
        outline={false}
        buttonText="Abrir correo"
      />
      <AppButton
        validateValue={true}
        handlePress={() => console.log('IMPLEMENTAR REENVIO DE EMAIL')}
        outline
        buttonText="no me ha llegado el código"
      />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
