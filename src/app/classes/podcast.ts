import { Host } from './host';

export class Podcast {
  id: number;
  category: string;
  contact: {
    email: string;
    facebook: string;
    instagram: string;
    linkedIn: string;
    twitter: string;
    website: string;
  };
  description: string;
  hosts: Host[];
  image: string;
  status: string;
  subscription: {
    apple: string;
    google: string;
    radioPublic: string;
    rss: string;
    stitcher: string;
  };
  title: string;
  username: string;
  yearStarted: number;
}
