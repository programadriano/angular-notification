export interface INotification {
  success(title: string, textMessage: string, textbutton: string);
  error(title: string, textMessage: string, textbutton: string);
  warning(title: string, textMessage: string, textbutton: string);
  info(title: string, textMessage: string, textbutton: string);
  question(title: string, textMessage: string, textbutton: string);
}
