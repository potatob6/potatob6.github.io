import { sessionService } from "@/libs/services/session-service";

export const Indicator = () => {
  const status = sessionService.clientServiceStatus();
  let style: string = '';
  if (status === 'connected') {
    style = 'background-color: #45BA16; border-radius: 50%; margin-top: 1rem; box-shadow: 0 0 0.2rem #45BA16; width: calc(var(--spacing) * 3); height: calc(var(--spacing) * 3)'
  } else if(status === 'disconnected') {
    style = 'background-color: red; border-radius: 50%; margin-top: 1rem; box-shadow: 0 0 0.2rem red; width: calc(var(--spacing) * 3); height: calc(var(--spacing) * 3)'
  } else {
    style = 'background-color: #F5A824; border-radius: 50%; margin-top: 1rem; box-shadow: 0 0 0.2rem #F5A824; width: calc(var(--spacing) * 3); height: calc(var(--spacing) * 3)'
  }
  return (
    <div style={style}></div>
  )
}