import { Injectable } from '@angular/core';

import { Podcast } from './../classes/podcast';

@Injectable({
  providedIn: 'root'
})
export class PodcastDataService {
  private podcastCategories: string[] = [
    'News & Politics',
    'Comedy',
    'Society & Culture',
    'Sports & Recreation',
    'Business',
    'Arts',
    'Education',
    'Games & Hobbies',
    'Government & Organizations',
    'Health',
    'Kids & Family',
    'Music',
    'Religion & Spirituality',
    'Science & Nature',
    'Technology',
    'TV & Film'
  ];

  private podcasts: Podcast[] = [
    {
      id: 101,
      category: 'Technology',
      contact: {
        email: 'helloworld@juniordevelopertoolbox.com',
        facebook: 'JuniorDeveloperToolbox',
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
      status: 'Inactive',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/junior-developer-toolbox/id1290011103?mt=2',
        breaker: '',
        google: '',
        overcast: '',
        radioPublic: '',
        rss: 'https://juniordevelopertoolbox.com/feed/',
        spotify: '',
        stitcher: 'https://www.stitcher.com/podcast/junior-developer-toolbox',
        tuneIn: ''
      },
      title: 'Junior Developer Toolbox',
      username: 'jdt',
      yearStarted: 2017
    },
    {
      id: 102,
      category: 'Business',
      contact: {
        email: '',
        facebook: 'NashvilleEntrepreneurCenter',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/company/1200514',
        twitter: '',
        website: 'https://www.ec.co/podcast'
      },
      hosts: [
        { firstName: 'Clark', lastName: 'Buckner' },
        { firstName: 'Brynn', lastName: 'Plummer' }
      ],
      description:
        'Think "NPR’s How I Built This" meets "Mister Rogers’ Neighborhood."',
      image: 'https://secureimg.stitcher.com/feedimagesplain328/362804.jpg',
      status: 'Active',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/navigate-nashvilles-entrepreneur-ecosystem/id1450778857?mt=2',
        breaker: '',
        google: 'https://play.google.com/music/m/Ixofm6r5ve6lfivlqge2mnoxnja',
        overcast: '',
        radioPublic: '',
        rss: '',
        spotify: 'https://open.spotify.com/show/0jHLCk3H2DNXhqGDxOBBJG',
        stitcher: 'https://www.stitcher.com/s?fid=362804&refid=stpr',
        tuneIn: ''
      },
      title: 'Navigate',
      username: '',
      yearStarted: 2016
    },
    {
      id: 103,
      category: 'Comedy',
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
      image: 'https://secureimg.stitcher.com/feedimagesplain328/28928.jpg',
      status: 'Active',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/welcome-to-night-vale/id536258179#',
        breaker: '',
        google:
          'https://www.google.com/podcasts?feed=aHR0cDovL2ZlZWRzLm5pZ2h0dmFsZXByZXNlbnRzLmNvbS93ZWxjb21ldG9uaWdodHZhbGVwb2RjYXN0',
        overcast: '',
        radioPublic:
          'https://play.radiopublic.com/welcome-to-night-vale-3GZp96',
        rss: 'http://feeds.nightvalepresents.com/welcometonightvalepodcast',
        spotify: '',
        stitcher:
          'https://www.stitcher.com/podcast/night-vale-presents/welcome-to-night-vale',
        tuneIn: ''
      },
      title: 'Welcome to Night Vale',
      username: 'NightvaleJo001',
      yearStarted: 2012
    },
    {
      id: 104,
      category: 'Technology',
      contact: {
        email: '',
        facebook: 'completedeveloperpod',
        instagram: '',
        linkedIn: '',
        twitter: '@completedevpod',
        website: 'https://completedeveloperpodcast.com/'
      },
      description:
        'A podcast by coders for coders about all aspects of life as a developer.',
      hosts: [
        { firstName: 'Will', lastName: 'Gant' },
        { firstName: 'BJ', lastName: 'Burns' }
      ],
      image: 'https://secureimg.stitcher.com/feedimagesplain328/79145.jpg',
      status: 'Active',
      subscription: {
        apple:
          'https://itunes.apple.com/us/podcast/complete-developer-podcast/id1039210992?mt=2',
        breaker: '',
        google:
          'https://www.google.com/podcasts?feed=aHR0cHM6Ly9jb21wbGV0ZWRldmVsb3BlcnBvZGNhc3QuY29tL2ZlZWQvcG9kY2FzdC8',
        overcast: '',
        radioPublic: '',
        rss: 'https://completedeveloperpodcast.com/feed/podcast/',
        spotify: 'https://open.spotify.com/show/6TdLKSIN3n37d8w6REhXfN',
        stitcher: '',
        tuneIn: ''
      },
      title: 'Complete Developer Podcast',
      username: 'CompDev01',
      yearStarted: 2015
    },
    {
      id: 105,
      category: 'Comedy',
      contact: {
        email: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '',
        website: 'https://www.maximumfun.org/shows/my-brother-my-brother-and-me'
      },
      description:
        "Free advice, from three of the world's most qualified experts.",
      hosts: [
        { firstName: 'Justin', lastName: 'McElroy' },
        { firstName: 'Travis', lastName: 'McElroy' },
        { firstName: 'Griffin', lastName: 'McElroy' }
      ],
      image: 'https://secureimg.stitcher.com/feedimagesplain328/16669.jpg',
      status: 'Active',
      subscription: {
        apple: '',
        breaker: '',
        google: '',
        overcast: '',
        radioPublic: '',
        rss: '',
        spotify: '',
        stitcher: '',
        tuneIn: ''
      },
      title: 'My Brother, My Brother and Me',
      username: 'MBMBaM',
      yearStarted: 2011
    },
    {
      id: 106,
      category: 'Arts',
      contact: {
        email: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '',
        website: ''
      },
      description:
        'Nothing fancy here -- just the simple audio diary of a girl in space.',
      hosts: [{ firstName: '', lastName: '' }, { firstName: '', lastName: '' }],
      image: 'https://secureimg.stitcher.com/feedimagesplain328/150375.jpg',
      status: 'Active',
      subscription: {
        apple: '',
        breaker: '',
        google: '',
        overcast: '',
        radioPublic: '',
        rss: '',
        spotify: '',
        stitcher:
          'https://www.stitcher.com/podcast/sarah-rhea-werner/girl-in-space',
        tuneIn: ''
      },
      title: 'Girl In Space',
      username: 'GIS999',
      yearStarted: 2017
    },
    {
      id: 107,
      category: 'Science & Medicine',
      contact: {
        email: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '',
        website: ''
      },
      description: '',
      hosts: [
        { firstName: 'Jason', lastName: 'Cohen' },
        { firstName: 'Lauren', lastName: 'Taylor' }
      ],
      image: 'https://secureimg.stitcher.com/feedimagesplain328/407024.jpg',
      status: 'Active',
      subscription: {
        apple: '',
        breaker: '',
        google: '',
        overcast: '',
        radioPublic: '',
        rss: '',
        spotify: '',
        stitcher:
          'https://www.stitcher.com/podcast/gross-anatomy-podcast-2/gross-anatomy',
        tuneIn: ''
      },
      title: 'Gross Anatomy',
      username: 'gamds18',
      yearStarted: 2018
    },
    {
      id: 108,
      category: 'Society & Culture',
      contact: {
        email: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        twitter: '@lorepodcast',
        website: 'https://www.lorepodcast.com/'
      },
      description:
        'Lore is a bi-weekly podcast (as well as a TV show and book series) about dark historical tales.',
      hosts: [{ firstName: 'Aaron', lastName: 'Mahnke' }],
      image: 'https://secureimg.stitcher.com/feedimagesplain328/67127.jpg',
      status: 'Active',
      subscription: {
        apple: '',
        breaker: '',
        google: '',
        overcast: '',
        radioPublic: '',
        rss: '',
        spotify: '',
        stitcher: '',
        tuneIn: ''
      },
      title: 'Lore',
      username: 'lorepod15',
      yearStarted: 2015
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

  getCategories = () => {
    return this.podcastCategories;
  };

  constructor() {}
}
