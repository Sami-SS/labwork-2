import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private actionSheet: ActionSheetController) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create( {
      header: 'Action Sheet',
      mode:'ios',
      buttons: [

        {text: 'Favorite',
        icon: 'md-heart',
        handler:()=> {
          console.log(' favorite clicked');

          
        }
      },

        {text:'Share',
    icon: 'share-alt',
    handler:()=> {
      console.log('Share clicked');
    }
  },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler:() => {
            console.log('You clicked me');

          }
        }
      ]

    })
    await actionSheet.present();
  }



}
