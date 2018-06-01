import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.css']
})
export class JunkComponent {

  userName: string;
  isActive: boolean = true;
  loremText = 'lorem ipsum dolor sit amit eano enum dolor amigo sante dala del manage et nutro game';

  logEnterEvent () {
    console.log('enter was hit');
  }

  post = {
    title: "a new post",
    isFavorite: false
  };

  panelContent: object = {
    heading: 'this is panel heading!',
    body: [
      {
        type: 'p',
        text: 'this is a paragraph of panel body'
      },
      {
        type: 'p',
        text: 'this is a paragraph of panel body'
      },
    ]
  };

}
