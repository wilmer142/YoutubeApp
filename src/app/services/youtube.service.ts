import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyD6BGIWEPI3XXpBRhVl3sjgwulthCih3Wk';
  private playListId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken;
  constructor(public httpClient: HttpClient) { }

  getVideos() {
    let url = `${this.youtubeUrl}/playlistItems?part=snippet&maxResults=10&playlistId=${this.playListId}&key=${this.apiKey}`;

    if (this.nextPageToken) {
      url = url + `&pageToken=${ this.nextPageToken }`;
    }
    const params = new HttpParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playListId);
    params.set('key', this.apiKey);

    return this.httpClient.get( url )
      .pipe(
        map( (data: any) => {
          this.nextPageToken = data.nextPageToken;

          let videos: any[] = [];
          for(let video of data.items) {
            let snippet =  video.snippet;
            videos.push(snippet);
          }
          
          return videos;
        })
      );
  }
}
