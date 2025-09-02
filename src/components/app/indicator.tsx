import { sessionService } from "@/libs/services/session-service";

export const Indicator = () => {
  const getIndicatorStyle = () => {
    const status = sessionService.clientServiceStatus(); 
    const baseStyle = `
      border-radius: 50%; 
      transition: all 0.3s ease;
      margin: 1rem; 
      width: calc(var(--spacing) * 3); 
      height: calc(var(--spacing) * 3);
    `;

    if (status === 'connected') {
      return `${baseStyle} background-color: #45BA16; box-shadow: 0 0 0.2rem #45BA16;`;
    } else if (status === 'disconnected') {
      return `${baseStyle} background-color: red; box-shadow: 0 0 0.2rem red;`;
    } else {
      return `${baseStyle} background-color: #F5A824; box-shadow: 0 0 0.2rem #F5A824;`;
    }
  };

  return (
    <div style={getIndicatorStyle()}></div>
  );
};