import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSel:any;
  constructor(private youtubeService: YoutubeService) {
    this.youtubeService.getVideos()
      .subscribe( videos => {
        this.videos = videos;
      });
  }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel = video;
    $('#exampleModal').modal();
  }

}
