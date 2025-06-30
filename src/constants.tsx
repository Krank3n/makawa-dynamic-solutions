import React from 'react';
import {
  HardHat,
  Settings,
  Phone,
  Mail,
  MapPin,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Newspaper,
  X
} from 'lucide-react';
import { NavLinkItem, ServiceItem, ProjectItem, TestimonialItem, TeamMember, ContactDetails, BlogPostItem } from './types';

// Lucide React Icons
export const ConstructionIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
    <HardHat className={className} />
);

export const MaintenanceIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
    <Settings className={className} />
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <Phone className={className} />
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <Mail className={className} />
);

export const LocationIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
    <MapPin className={className} />
);

export const DarkModeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <Moon className={className} />
);

export const LightModeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <Sun className={className} />
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <ChevronLeft className={className} />
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <ChevronRight className={className} />
);

export const ChatIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <MessageCircle className={className} />
);

export const NewspaperIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <Newspaper className={className} />
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <X className={className} />
);


export const COMPANY_NAME = "Makawa Dynamic Solutions";
export const COMPANY_PHONE = "0487245159";
export const COMPANY_EMAIL = "chargedtm11@gmail.com";
export const COMPANY_LOCATION = "Sunshine Coast, Australia";
export const COMPANY_ADDRESS_DETAIL = "Sunshine Coast QLD, Australia";

export const CONTACT_DETAILS: ContactDetails = {
  phone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  location: COMPANY_ADDRESS_DETAIL,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803129.8038160756!2d152.6288340062888!3d-27.38120486090628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579add261971%3A0x502a35af3deaf70!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus",
  mapViewUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS_DETAIL)}`
};

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  // { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'construction',
    title: 'Precision Construction',
    description: 'From groundbreaking designs to flawless execution, we build robust and innovative structures tailored to your vision. Residential, commercial, and industrial projects.',
    icon: <ConstructionIcon className="w-16 h-16 text-orange-vibrant group-hover:text-white transition-colors duration-300" />,
    imageUrl: '/images/user-image-10.jpg'
  },
  {
    id: 'maintenance',
    title: 'Dynamic Maintenance',
    description: 'Proactive and reactive maintenance solutions to ensure longevity and optimal performance of your properties. We keep your assets in prime condition.',
    icon: <MaintenanceIcon className="w-16 h-16 text-blue-steel group-hover:text-white transition-colors duration-300" />,
    imageUrl: '/images/user-image-9.jpg'
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'Lifestyle Urban Residence',
    category: 'Residential Construction',
    description: 'A stunning contemporary home featuring innovative architectural design and sustainable materials.',
    beforeImageUrl: '/images/hollow-tree.jpg',
    afterImageUrl: '/images/tree-house.jpg',
  },
  {
    id: 'proj2',
    title: 'Commercial Office Fitout',
    category: 'Commercial Development',
    description: 'Complete interior transformation of a corporate office space, enhancing functionality and aesthetics.',
    beforeImageUrl: '/images/building-office-structure.jpg',
    afterImageUrl: '/images/lush-finished-fence-modern-blue-house.jpg',
  },
  {
    id: 'proj3',
    title: 'Industrial Warehouse Upgrade',
    category: 'Industrial Maintenance',
    description: 'Structural upgrades and system modernizations for a large-scale industrial facility.',
    beforeImageUrl: '/images/crane-lifting-kicker.jpg',
    afterImageUrl: '/images/wooden-roof-structure-side-shot-blue-sky.jpg',
  },
  {
    id: 'proj4',
    title: 'Luxury Apartment Complex',
    category: 'Residential Construction',
    description: 'Development of high-end apartment units with premium finishes and amenities.',
    beforeImageUrl: '/images/t-dawg-big-muscles-drill.jpg',
    afterImageUrl: '/images/no-miles.jpg',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test1',
    name: 'Tom Hansen',
    company: 'Hansen Dev',
    quote: 'Makawa Dynamic Solutions delivered our project on time and exceeded our expectations in quality and professionalism. Their attention to detail is unparalleled.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/45204791?v=4&size=64',
  },
  {
    id: 'test2',
    name: 'David Miller',
    company: 'Miller Group Holdings',
    quote: 'The maintenance team is responsive and highly skilled. They\'ve saved us significant costs with their proactive approach. Highly recommend Makawa!',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 'test3',
    name: 'Linda Kim',
    company: 'LK Property Management',
    quote: 'Working with Makawa was a seamless experience. Their communication and project management were top-notch. We are thrilled with the results.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'member1',
    name: 'Taurai Makawa',
    role: 'Founder & CEO',
    imageUrl: '/images/taurai-makawa-full-body-shot.jpg',
    bio: 'With over 10 years in the construction industry, Taurai leads Makawa with a vision for innovation and excellence.'
  },
  // {
  //   id: 'member2',
  //   name: 'Alice Williams',
  //   role: 'Head of Operations',
  //   imageUrl: '/images/user-image-6.jpg',
  //   bio: 'Alice ensures all projects run smoothly, efficiently, and to the highest quality standards.'
  // },
  // {
  //   id: 'member3',
  //   name: 'Robert Davis',
  //   role: 'Chief Engineer',
  //   imageUrl: '/images/user-image-9.jpg',
  //   bio: 'Robert brings cutting-edge engineering solutions to every project, ensuring structural integrity and sustainability.'
  // }
];

export const COMPANY_VALUES = [
  { id: 'val1', title: 'Quality Craftsmanship', description: 'Delivering superior workmanship in every detail.' },
  { id: 'val2', title: 'Client-Centric Approach', description: 'Understanding and exceeding client expectations.' },
  { id: 'val3', title: 'Innovation & Technology', description: 'Utilizing modern techniques for optimal results.' },
  { id: 'val4', title: 'Safety First', description: 'Prioritizing the well-being of our team and stakeholders.' },
  { id: 'val5', title: 'Integrity & Transparency', description: 'Building trust through honest and open communication.' },
  { id: 'val6', title: 'Sustainability', description: 'Implementing eco-friendly practices for a better future.' },
];

export const BLOG_POSTS_DATA: BlogPostItem[] = [
  {
    id: 'blog1',
    title: 'The Future of Sustainable Construction in Australia',
    excerpt: 'Exploring eco-friendly materials and practices that are reshaping the construction landscape down under. How Makawa is leading the charge.',
    imageUrl: '/images/tree-house.jpg',
    publishDate: 'October 26, 2023',
    author: 'John Makawa',
    slug: 'sustainable-construction-australia'
  },
  {
    id: 'blog2',
    title: '5 Key Benefits of Regular Property Maintenance',
    excerpt: 'Discover why proactive maintenance is crucial for preserving property value and preventing costly repairs in the long run.',
    imageUrl: '/images/user-image-5.jpg',
    publishDate: 'November 10, 2023',
    author: 'Alice Williams',
    slug: 'benefits-property-maintenance'
  },
  {
    id: 'blog3',
    title: 'Innovations in Smart Building Technology',
    excerpt: 'A look into how IoT and smart technologies are making buildings more efficient, secure, and comfortable for tomorrow.',
    imageUrl: '/images/user-image-6.jpg',
    publishDate: 'November 28, 2023',
    author: 'Robert Davis',
    slug: 'smart-building-technology'
  },
];