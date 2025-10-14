import { createStyles, PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import { IInput } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  register: UseFormRegisterReturn;
  row: IInput;
  index: number;
}

const useStyles = createStyles((theme) => ({
  eyeIcon: {
    color: '#000000',
  },
  input: {
    '& .mantine-TextInput-input, & .mantine-PasswordInput-input': {
      backgroundColor: '#ffffff',
      border: '2px inset #c0c0c0',
      borderRadius: 0,
      fontFamily: 'MS Sans Serif, sans-serif',
      fontSize: 12,
      color: '#000000',
      '&:focus': {
        borderColor: '#0000ff',
        boxShadow: 'inset -1px -1px 0px #808080, inset 1px 1px 0px #ffffff',
      },
    },
    '& .mantine-TextInput-label, & .mantine-PasswordInput-label': {
      fontFamily: 'MS Sans Serif, sans-serif',
      fontSize: 12,
      fontWeight: 'normal',
      color: '#000000',
    },
    '& .mantine-TextInput-description, & .mantine-PasswordInput-description': {
      fontFamily: 'MS Sans Serif, sans-serif',
      fontSize: 11,
      color: '#000000',
    },
  },
}));

const InputField: React.FC<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <>
      {!props.row.password ? (
        <TextInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          minLength={props.row.min}
          maxLength={props.row.max}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          className={classes.input}
        />
      ) : (
        <PasswordInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          minLength={props.row.min}
          maxLength={props.row.max}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          className={classes.input}
          visibilityToggleIcon={({ reveal, size }) => (
            <LibIcon
              icon={reveal ? 'eye-slash' : 'eye'}
              fontSize={size}
              cursor="pointer"
              className={classes.eyeIcon}
              fixedWidth
            />
          )}
        />
      )}
    </>
  );
};

export default InputField;
