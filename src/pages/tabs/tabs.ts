import { Component } from '@angular/core';


import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage' ;
  profileRoot = 'ProfilePage' ;
  messagesRoot = 'MessagesPage' ;
  


  constructor() {}

}
