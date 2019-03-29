import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.sass']
})
export class PodcastListComponent implements OnInit {
  podcasts = [
    {
      title: 'Junior Developer Toolbox',
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
        'https://juniordevelopertoolbox.com/wp-content/uploads/2017/09/v3-100x103.png',
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

  constructor() {}

  ngOnInit() {}
}
