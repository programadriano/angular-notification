import { Injectable } from '@angular/core';
import swal from 'sweetalert2';


import { INotification } from '../interfaces/inotification';

@Injectable()
export class NotificationService implements INotification {

  constructor() { }

  success(title: string, textMessage: string, textbutton: string) {
    return swal({
      title: title,
      text: textMessage,
      type: 'success',
      confirmButtonText: textbutton
    })
  }
  error(title: string, textMessage: string, textbutton: string) {
    return swal({
      title: title,
      text: textMessage,
      type: 'error',
      confirmButtonText: textbutton
    })
  }
  warning(title: string, textMessage: string, textbutton: string) {
    return swal({
      title: title,
      text: textMessage,
      type: 'warning',
      confirmButtonText: textbutton
    })
  }
  info(title: string, textMessage: string, textbutton: string) {
    return swal({
      title: title,
      text: textMessage,
      type: 'info',
      confirmButtonText: textbutton
    })
  }
  question(title: string, textMessage: string, textbutton: string) {
    return swal({
      title: title,
      text: textMessage,
      type: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: textbutton
    })
  }
}
