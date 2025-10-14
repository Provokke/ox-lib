import { Button, createStyles, Group, Modal, Stack, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import { useLocales } from '../../providers/LocaleProvider';
import remarkGfm from 'remark-gfm';
import type { AlertProps } from '../../typings';
import MarkdownComponents from '../../config/MarkdownComponents';

const useStyles = createStyles((theme) => ({
  contentStack: {
    color: '#000000',
    fontFamily: 'MS Sans Serif, sans-serif',
    fontSize: '11px',
    backgroundColor: '#c0c0c0',
    padding: '8px',
  },
  modal: {
    '& .mantine-Modal-modal': {
      backgroundColor: '#c0c0c0',
      border: '2px outset #c0c0c0',
      borderRadius: '0',
      boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    '& .mantine-Modal-header': {
      backgroundColor: '#008080',
      color: '#ffffff',
      fontFamily: 'MS Sans Serif, sans-serif',
      fontSize: '11px',
      fontWeight: 'bold',
      padding: '4px 8px',
      borderBottom: '1px solid #000080',
    },
    '& .mantine-Modal-title': {
      color: '#ffffff',
      fontFamily: 'MS Sans Serif, sans-serif',
      fontSize: '11px',
      fontWeight: 'bold',
    },
  },
  button: {
    backgroundColor: '#c0c0c0',
    border: '2px outset #c0c0c0',
    borderRadius: '0',
    color: '#000000',
    fontFamily: 'MS Sans Serif, sans-serif',
    fontSize: '11px',
    padding: '4px 16px',
    minWidth: '75px',
    '&:hover': {
      backgroundColor: '#dfdfdf',
      border: '2px outset #dfdfdf',
    },
    '&:active': {
      border: '2px inset #c0c0c0',
      backgroundColor: '#a0a0a0',
    },
  },
}));

const AlertDialog: React.FC = () => {
  const { locale } = useLocales();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [dialogData, setDialogData] = useState<AlertProps>({
    header: '',
    content: '',
  });

  const closeAlert = (button: string) => {
    setOpened(false);
    fetchNui('closeAlert', button);
  };

  useNuiEvent('sendAlert', (data: AlertProps) => {
    setDialogData(data);
    setOpened(true);
  });

  useNuiEvent('closeAlertDialog', () => {
    setOpened(false);
  });

  return (
    <>
      <Modal
        opened={opened}
        centered={dialogData.centered}
        size={dialogData.size || 'md'}
        overflow={dialogData.overflow ? 'inside' : 'outside'}
        closeOnClickOutside={false}
        onClose={() => {
          setOpened(false);
          closeAlert('cancel');
        }}
        withCloseButton={false}
        overlayOpacity={0.5}
        exitTransitionDuration={150}
        transition="fade"
        title={<ReactMarkdown components={MarkdownComponents}>{dialogData.header}</ReactMarkdown>}
        className={classes.modal}
      >
        <Stack className={classes.contentStack}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              ...MarkdownComponents,
              img: ({ ...props }) => <img style={{ maxWidth: '100%', maxHeight: '100%' }} {...props} />,
            }}
          >
            {dialogData.content}
          </ReactMarkdown>
          <Group position="right" spacing={10}>
            {dialogData.cancel && (
              <Button className={classes.button} onClick={() => closeAlert('cancel')} mr={3}>
                {dialogData.labels?.cancel || locale.ui.cancel}
              </Button>
            )}
            <Button
              className={classes.button}
              onClick={() => closeAlert('confirm')}
            >
              {dialogData.labels?.confirm || locale.ui.confirm}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};

export default AlertDialog;
