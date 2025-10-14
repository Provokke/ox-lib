import { isEnvBrowser } from './misc';

interface DebugEvent<T = any> {
  action: string;
  data: T;
}

/**
 * Emulates dispatching an event using SendNuiMessage in the lua scripts.
 * This is used when developing in browser
 *
 * @param events - The event you want to cover
 * @param timer - How long until it should trigger (ms)
 */
export const debugData = <P>(events: DebugEvent<P>[], timer = 1000): void => {
  console.log('debugData called with:', { events, timer });
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('isEnvBrowser():', isEnvBrowser());
  
  if (process.env.NODE_ENV === 'development' && isEnvBrowser()) {
    console.log('Conditions met, dispatching events');
    for (const event of events) {
      console.log('Dispatching event:', event);
      setTimeout(() => {
        console.log('Actually dispatching event now:', event);
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              action: event.action,
              data: event.data,
            },
          })
        );
      }, timer);
    }
  } else {
    console.log('Conditions not met for dispatching events');
  }
};
