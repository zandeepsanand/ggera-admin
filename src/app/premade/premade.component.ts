import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PremadeComponent {
  dummydata=[
    {
        "party": {
            "name": "Ripzz",
            "orderId": "85759143",
            "streamLink": "gegrch?v=OjPshaSPLUk",
            "description": "fgfg",
            "serverDescription": "gfgfg",
            "platform": "PC",
            "startedTime": "2023-01-16T16:47:56.726Z",
            "status": "OPEN"
        },
        "slots": [
            {
                "type": "PRO",
                "username": "Ripzz",
                "gamerId": "Ripzz",
                "activisionId": "RipzzTEST",
                "region": "europe",
                "platform": "PC",
                "kd": "999",
                "winRatio": "999",
                "wins": "100",
                "kills": "100",
                "profileImageUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "status": "occupied"
            },
            {
                "type": null,
                "status": "opened"
            },
            {
                "type": null,
                "status": "opened"
            },
            {
                "type": null,
                "status": "opened"
            }
        ],
        "totalSlots": 4,
        "availableSlots": 3
    },
    {
      "party": {
          "name": "Ripzz",
          "orderId": "85759143",
          "streamLink": "twitch.tv/Ripzzeu",
          "description": "fgfg",
          "serverDescription": "gfgfg",
          "platform": "PC",
          "startedTime": "2023-01-16T16:47:56.726Z",
          "status": "OPEN"
      },
      "slots": [
          {
              "type": "PRO",
              "username": "Ripzz",
              "gamerId": "Ripzz",
              "activisionId": "RipzzTEST",
              "region": "europe",
              "platform": "PC",
              "kd": "999",
              "winRatio": "999",
              "wins": "100",
              "kills": "100",
              "profileImageUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              "status": "occupied"
          },
          {
            "type": "CLIENT",
            "username": "Sandeep",
            "gamerId": "Ripzz",
            "activisionId": "RipzzTEST",
            "region": "europe",
            "platform": "PC",
            "kd": "999",
            "winRatio": "999",
            "wins": "100",
            "kills": "100",
            "profileImageUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "status": "occupied"
        },
          {
              "type": null,
              "status": "opened"
          },
          {
              "type": null,
              "status": "opened"
          }
      ],
      "totalSlots": 4,
      "availableSlots": 2
  }
  ]
  toggleTag(){
    this.showMe=!this.showMe
  }
  swiperConfig: any = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      draggable: true
    },
    virtual: true
    ,
    
   
    breakpoints: {
      // when window width is <= 499px
      400: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    },
    600: {
      slidesPerView: 2,
      spaceBetweenSlides: 50
  },


      799: {
          slidesPerView: 2,
          spaceBetweenSlides: 50
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 3,
          spaceBetweenSlides: 80
      }
  
    }
}
showMe=true;
premadeParty(item:any){
  console.log(item);
  // let location=`${environment.ggeraPremade}?redirectTo=premade`
  // let location=`${environment.ggeraPremade}/premade-party?id=${item.id}`
  // window.location.href=location
  // console.log(location);
  

}
// extractVideoId(url: string): string {
//   // Extract the video ID from the URL
//   const videoId = url.split('v=')[1];

//   return videoId;
// }
// isTwitchVideo(videoLink: string): boolean {
//   // Check if the video link is a Twitch video link
//   // Example: https://www.twitch.tv/videos/VIDEO_ID
//   const regex = /(?:https?:\/\/)?(?:www\.)?twitch\.tv\/videos\/(\d+)/;
//   return regex.test(videoLink);
// }

// extractTwitchVideoId(videoLink: string): string {
//   // Extract the Twitch video ID or username from the video link
//   // Example: https://www.twitch.tv/videos/VIDEO_ID
//   // or https://www.twitch.tv/USERNAME
//   const regex = /(?:https?:\/\/)?(?:www\.)?twitch\.tv\/(?:videos\/(\d+)|(\w+))/;
//   const match = videoLink.match(regex);
//   return match ? match[1] || match[2] : '';
// }
isTwitchLink(link: string): boolean {
  // Check if the link is a valid Twitch link
  return /^https?:\/\/(www\.)?twitch\.tv\/[\w]{1,}$/.test(link);
}

isYouTubeLink(link: string): boolean {
  // Check if the link is a valid YouTube link
  const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=([\w-]{11})).*|^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})$/;
  return regex.test(link);
}

extractTwitchChannel(link: string): string {
  // Implement logic to extract the Twitch channel from the link
  // Example implementation assuming Twitch channels are included after "https://www.twitch.tv/" in the link
  return link.replace('https://www.twitch.tv/', '');
}

extractVideoId(link: string): string {
  // Implement logic to extract the YouTube video ID from the link using a regular expression
  const regex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=([^&]+)).*|^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/;
  const match = link.match(regex);
  if (match) {
    // If the regex match is successful, return the video ID
    return match[1] || match[2] || '';
  } else {
    // If no match is found, return an empty string
    return '';
  }
}
}
