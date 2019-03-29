import { Injectable } from '@angular/core';

import { Podcast } from './../classes/podcast';

@Injectable({
  providedIn: 'root'
})
export class PodcastDataService {
  private podcasts: Podcast[] = [
    {
      id: 78901,
      category: 'Technology',
      contact: {
        email: 'helloworld@juniordevelopertoolbox.com',
        facebook: '',
        instagram: 'juniordevelopertoolbox',
        linkedIn: '',
        twitter: 'jrdevtoolbox',
        website: 'https://juniordevelopertoolbox.com'
      },
      description:
        'Bringing you real talk from the trenches about everyday life as a Junior Developer.',
      hosts: [
        { firstName: 'Erin', lastName: 'Orstrom' },
        { firstName: 'Dave', lastName: 'Harned' }
      ],
      image:
        'https://juniordevelopertoolbox.com/wp-content/uploads/2018/09/Jr_Dev_Toolbox_Logo_2018_250.png',
      status: 'Active',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/junior-developer-toolbox/id1290011103?mt=2',
        google: '',
        radioPublic: '',
        rss: 'https://juniordevelopertoolbox.com/feed/',
        stitcher: ''
      },
      title: 'Junior Developer Toolbox',
      username: 'jdt ',
      yearStarted: 2017
    },
    {
      id: 78902,
      category: 'Business',
      contact: {
        email: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '',
        website: 'https://www.ec.co/podcast'
      },
      hosts: [
        { firstName: 'Clark', lastName: 'Buckner' },
        { firstName: 'Brynn', lastName: 'Plummer' }
      ],
      description:
        'Think "NPR’s How I Built This" meets "Mister Rogers’ Neighborhood."',
      image: '',
      status: 'Active',
      subscription: {
        apple: '',
        google: '',
        radioPublic: '',
        rss: '',
        stitcher: ''
      },
      title: 'Navigate',
      username: '',
      yearStarted: 2016
    },
    {
      id: 78903,
      category: 'Fiction',
      contact: {
        email: '',
        facebook: 'WelcomeToNightVale',
        instagram: '',
        linkedIn: '',
        twitter: 'NightValeRadio',
        website: 'http://www.welcometonightvale.com/'
      },
      description:
        'The news from Lake Wobegon as seen through the eyes of Stephen King',
      hosts: [
        { firstName: 'Joseph', lastName: 'Fink' },
        { firstName: 'Jeffery', lastName: 'Cranor' }
      ],
      image:
        'https://en.wikipedia.org/wiki/Welcome_to_Night_Vale#/media/File:Welcome_to_Night_Vale.gif',
      status: 'Active',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/welcome-to-night-vale/id536258179#',
        google:
          'https://www.google.com/podcasts?feed=aHR0cDovL2ZlZWRzLm5pZ2h0dmFsZXByZXNlbnRzLmNvbS93ZWxjb21ldG9uaWdodHZhbGVwb2RjYXN0',
        radioPublic:
          'https://play.radiopublic.com/welcome-to-night-vale-3GZp96',
        rss: 'http://feeds.nightvalepresents.com/welcometonightvalepodcast',
        stitcher:
          'https://www.stitcher.com/podcast/night-vale-presents/welcome-to-night-vale'
      },
      title: 'Welcome to Night Vale',
      username: 'NightvaleJo001',
      yearStarted: 2012
    }
  ];

  getAllPodcasts = () => {
    return this.podcasts;
  };

  getOnePodcast = id => {
    const selected = this.podcasts.filter(pod => {
      return pod.id === id;
    });
    return selected[0];
  };

  constructor() {}
}
