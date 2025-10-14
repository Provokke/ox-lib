import { NotificationProps } from '../../../typings';
import { debugData } from '../../../utils/debugData';
import { isEnvBrowser } from '../../../utils/misc';

export const debugCustomNotification = () => {
  console.log('debugCustomNotification called');
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('isEnvBrowser():', isEnvBrowser());
  console.log('window.invokeNative:', (window as any).invokeNative);
  
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Success',
        description: 'Notification description',
        type: 'success',
        id: 'pogchamp',
        duration: 20000,
        style: {
          '.description': {
            color: 'red',
          },
        },
      },
    },
  ]);
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Error',
        description: 'Notification description',
        type: 'error',
      },
    },
  ]);
  debugData<NotificationProps>([
    {
      action: 'notify',
      data: {
        title: 'Custom icon success',
        description: 'Notification description',
        type: 'success',
        icon: 'microchip',
        showDuration: false,
      },
    },
  ]);
};
