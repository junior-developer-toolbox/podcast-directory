import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.sass']
})
export class PodcastDetailComponent implements OnInit, OnDestroy {
  podId: number;
  private sub: any;
  selectedPodcast: any;
  podcast: any;

  podcasts = [
    {
      title: 'Junior Developer Toolbox',
      id: 10001,
      category: 'Technology',
      podcastStatus: 'Active',
      howLongPodcasting: '1 - 2 Years',
      hosts: [
        { firstName: 'Erin', lastName: 'Orstrom' },
        { firstName: 'Dave', lastName: 'Harned' }
      ],
      description:
        'Bringing you real talk from the trenches about everyday life as a Junior Developer.',
      imageUrl:
        'https://juniordevelopertoolbox.com/wp-content/uploads/2018/09/Jr_Dev_Toolbox_Logo_2018_250.png',
      website: 'https://juniordevelopertoolbox.com',
      rssFeed: 'https://juniordevelopertoolbox.com/feed/',
      iTunesLink:
        'https://itunes.apple.com/us/podcast/junior-developer-toolbox/id1290011103?mt=2',
      emailAddress: 'helloworld@juniordevelopertoolbox.com',
      twitterHandle: '@jrdevtoolbox',
      instagramName: 'juniordevelopertoolbox'
    },
    {
      title: 'Navigate',
      id: 10002,
      category: 'Business',
      podcastStatus: 'Active',
      howLongPodcasting: '2 - 3 Years',
      hosts: [
        { firstName: 'Clark', lastName: 'Buckner' },
        { firstName: 'Brynn', lastName: 'Plummer' }
      ],
      description:
        'Think "NPR’s How I Built This" meets "Mister Rogers’ Neighborhood."',
      imageUrl: '',
      website: 'https://www.ec.co/podcast',
      rssFeed: '',
      iTunesLink: '',
      emailAddress: '',
      twitterHandle: '',
      instagramName: ''
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.podId = +params['id'];
    });

    this.selectedPodcast = this.podcasts.filter(pod => {
      return pod.id === this.podId;
    });

    this.podcast = this.selectedPodcast[0];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
