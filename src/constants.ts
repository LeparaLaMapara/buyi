import { NavItem, Project, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Films', path: '/' },
  { label: 'Photography', path: '/photography' },
  { label: 'Contact', path: '/contact' },
];

// Set to a YouTube video ID (e.g., 'Way9Dexny3w') to enable the showreel.
// Leave empty ('') to display "COMING SOON".
export const SHOWREEL_ID = ''; 

export const BRAND = { name: 'Zibuyile Gumede', 
  tagline: 'Director of Photography' };

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/abntu_',
  linkedin: 'https://www.linkedin.com/in/zibuyile-gumede-23ab84242',
  youtube: 'https://www.youtube.com/@zibuyilegumede6367',
  email: 'zibuyilegumede360@gmail.com',
  imdb: 'https://www.imdb.com/name/nm15806204/',
  phone: '+27 (0)79 531 4422'
  
};


// --- DYNAMIC PROJECT LOADING ---
// Scans /public/images/{Category}/*.jpg (and other formats)
// The folder name becomes the 'category', the filename becomes the 'title'.
// Casting import.meta to any to avoid TypeScript error if vite types are not configured
const globFiles = (import.meta as any).glob('/public/media/images/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });



// Cinematic placeholder images
// NOTE: Replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs (the part after v= in the URL)
// https://youtu.be/x_a_hH_zTpE?si=
export const FILMS: Project[] = [
  { id: 1, title: 'Pixels over people', category: 'Monologue ', image: '', youtubeId: 'vCiflrPaWcg' },
  { id: 2, title: 'See You Soon', category: 'Short Film', image: '', youtubeId: 'x_a_hH_zTpE' },
  { id: 3, title: 'Yonela Mnana - Rato La ', category: 'Music Video', image: '', youtubeId: 'MwLGJyWfR24' },
  { id: 4, title: 'Quick Face', category: 'Short Cinematic', image: '', youtubeId: 'xw8zzZpWauc' },
  { id: 5, title: 'MVV EP 1: ', category: 'BTS', image: '', youtubeId: 'MoOOP7j873g' },
];


export const PHOTOS: Project[] = Object.keys(globFiles).map((path, index) => {
  // Path example: "/public/images/Narrative/Dune Part Two.jpg"
  const parts = path.split('/');
  const filename = parts.pop() || '';
  const folderName = parts.pop() || 'Uncategorized';
  
  // Format Title: remove extension and replace hyphens/underscores with spaces
  const title = filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, '')
    .replace(/[-_]/g, ' ');

  // Format URL: remove '/public' prefix so it works in the browser
  // (Vite serves public files at the root)
  const imageUrl = path.replace(/^\/public/, '');

  return {
    id: 1000 + index, // Start IDs at 1000 to avoid conflicts with static items
    title: title,
    category: folderName,
    image: imageUrl,
    // Dynamic files from folders don't have YouTube IDs by default
    // youtubeId: undefined 
  };
});

// export const PHOTOS: Project[] = [
//   { 
//     id: 1, 
//     title: 'Portrait Study', 
//     category: 'Portrait', 
//     image: 'https://www.instagram.com/p/DTcEwSUCJYY/?igsh=OWcyN3g3azEzcTZ3', 
//     externalLink: 'https://instagram.com' 
//   },
//   { 
//     id: 2, 
//     title: 'Landscape I', 
//     category: 'Landscape', 
//     image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop', 
//     // externalLink: 'https://instagram.com' 
//   },
//   { 
//     id: 3, 
//     title: 'Backstage', 
//     category: 'BTS', 
//     image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop', 
//     externalLink: 'https://instagram.com' 
//   },
//   { 
//     id: 4, 
//     title: 'Studio Light', 
//     category: 'Studio', 
//     image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop', 
//     externalLink: 'https://instagram.com' 
//   },
//   { 
//     id: 5, 
//     title: 'Street Level', 
//     category: 'Street', 
//     image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop', 
//     externalLink: 'https://instagram.com' 
//   },
//   { 
//     id: 6, 
//     title: 'Film Set', 
//     category: 'BTS', 
//     image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop', 
//     externalLink: 'https://instagram.com' 
//   },
// ];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Zibuyile has an incredible eye for lighting and composition. Every frame tells a story.", author: "Mnqondisi", role: "CEO OF MADSHO" },
  { quote: "Professional, creative, and efficient. A true master of the craft.", author: "Mocke Jansen van Vuren", role: "MA SUPERVISOR" },
  { quote: "Transforms ordinary locations into cinematic masterpieces.", author: "Vuyiswa Tshangela", role: "PRODUCTION MANAGER" },
  { quote: "The best cinematographer we've had the pleasure of working with on our campaign.", author: "Lethabo Masisi", role: "DIRECTOR OF PHOTOGRAPHY" },
];

// export const CLIENT_LIST_STR = "Adobe, Apple, Atelier Swarovski, Audible, Booking.Com, England Rugby, Gamble Aware, Many Pets, PepsiCo, Premier Jouet, Revolut, Sony Music, Vice";

export const CLIENT_LIST: Client[] = [
  { name: 'MADSHO', link: 'https://madsho.co.za/' },
  { name: 'SEAMLESS CUT', link: 'https://www.instagram.com/seamlesscut' },
  { name: 'BASE CAMP COMMUNITY', link: '#' },
  { name: 'BOLLECTIVE STUDIOS', link: 'https://www.instagram.com/bollective.studios' },
  { name: 'COOLER BOX BROS', link: 'https://www.instagram.com/coolerbox_brothers' },
  { name: 'RED HIT  OPS', link: 'https://www.instagram.com/redhotops_official' },
  { name: 'TWO FOLDS', link: 'https://www.instagram.com/twofoldza' },
  { name: 'OUTRE STUDIO', link: 'https://www.instagram.com/outrestudios' },
  { name: 'LEWATLE MAGAZINE', link: 'https://www.instagram.com/lewatlemagazine' },
];

export const ON_SET_IMAGES = [
  'public/media/others/me_1.jpg',
  'public/media/others/me_2.jpg',
  'public/media/others/me_3.jpg',
  'public/media/others/me_4.jpg'
];