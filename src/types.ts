
import React from 'react';

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id:string;
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  company?: string;
  quote: string;
  avatarUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  location: string;
  mapEmbedUrl: string;
  mapViewUrl: string; // Added mapViewUrl
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishDate: string;
  author?: string;
  slug: string;
}
