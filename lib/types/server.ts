import { Chronicle } from "./chronicle";
import { Project } from "./project";
import { User } from "./user";

export type ServerVote = {
  id: number;
  url_slug: string;
  announce_name: string;
  rating_name: string;
  meta_title: string;
  meta_description: string;
  website_url: string;
  rate: string;
  server_type_id: number;
  launch_date: string;
  short_description: string;
  full_description: string;
  logo: string;
  votes_count: number;
  weighted_votes: number;
  rating_stars: number;
  reviews_count: number;
  status: string;
  display_date: string;
  rating_position: number;
  project: Project;
  chronicle: Chronicle;
  has_vip_background: boolean;
  has_bold_font: boolean;
  has_vip_icon: boolean;
  created_at: string;
};

export type ServerResponse = {
  data: Server[];
  meta?: ServerMeta;
  links?: ServerLinks;
};

export type GroupedServersResponse = {
  data: {
    coming_soon: Server[];
    tomorrow: Server[];
    today: Server[];
    yesterday: Server[];
    opened: Server[];
    next_seven_days?: Server[];
    previous_seven_days?: Server[];
    next_week_and_later?: Server[];
    last_week_and_earlier?: Server[];
  };
};

export type ServerBlockIcon = {
  id: number;
  name: string;
  icon: string;
};

export type ServerBlock = {
  id: number;
  title: string;
  subtitle?: string | null;
  icon?: ServerBlockIcon | null;
  side: "left" | "right";
  sort_order: number;
  is_active: boolean;
  servers_count: number;
};

export type ServerBlocksResponse = {
  data: ServerBlock[];
};

export type Server = {
  id: number;
  side?: "left" | "right" | null;
  url_slug: string;
  announce_name: string;
  assembly_type: string;
  rating_name: string;
  meta_title: string;
  meta_description: string;
  website_url: string;
  rate: string;
  server_type_id: number;
  server_type_data: ServerType;
  launch_date: string;
  short_description: string;
  full_description: string;
  logo: string;
  icons: ServerIcon[];
  votes_count: number;
  weighted_votes: number;
  vote_coefficient: number;
  rating_stars: number;
  reviews_count: number;
  status: string;
  display_date: string;
  created_at: string;
  moderation_status: string;
  moderation_comment: string;
  ranking_position: number;
  project: {
    id: number;
    name: string;
    slug: string;
    user_id: number;
    average_rating: number;
    reviews_count: number;
    total_votes: number;
  };
  chronicle: Chronicle;
  user: User;
  premium_features: PremiumFeature[];
  has_vip_background: boolean;
  has_bold_font: boolean;
  has_vip_icon: boolean;
};

export type ServerType = {
  id: number;
  name: string;
  slug: string;
  h1_tag: string;
  h2_tag: string;
  footer_description: string;
  meta_title: string;
  meta_description: string;
  servers_count: number;
};

export type ServerTypesResponse = {
  data: ServerType[];
};

type ServerMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
};

type ServerLinks = {
  first: string;
  last: string;
  prev: string;
  next: string;
};

type PremiumFeature = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  duration_days: number;
};

type ServerIcon = {
  icon: string;
  title: string;
};

export type CreateServerRequest = FormData | {
  announce_name: string;
  rating_name: string;
  website_url: string;
  rate: number | string;
  server_type_id: number;
  launch_date: string;
  short_description: string;
  full_description: string;
  project_id: number;
  chronicle_id: number;
  logo?: File | string;
};
