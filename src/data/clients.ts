// Client logos / creator avatars shown in the marquee strip under the hero.
//
// Vite resolves these imports at build time, so the images get hashed,
// optimized filenames and are guaranteed to exist (a typo fails the build
// rather than rendering a broken image at runtime).
//
// TO ADD A CLIENT: drop the image in src/assets/Images/Clients/, import it
// below, and add an entry to CLIENTS.
import client1 from "../assets/Images/Clients/client_1.jpeg";
import client2 from "../assets/Images/Clients/client_2.jpg";
import client3 from "../assets/Images/Clients/client_3.png";
import client4 from "../assets/Images/Clients/client_4.jpg";
import client5 from "../assets/Images/Clients/client_5.webp";
import client6 from "../assets/Images/Clients/client_6.jpg";
import client7 from "../assets/Images/Clients/client_7.jpg";
import client8 from "../assets/Images/Clients/client_8.jpg";
import client9 from "../assets/Images/Clients/client_9.jpg";
import client10 from "../assets/Images/Clients/client_10.jpg";
import client11 from "../assets/Images/Clients/client_11.jpg";
import client12 from "../assets/Images/Clients/client_12.jpg";
import client13 from "../assets/Images/Clients/client_13.jpg";
import client14 from "../assets/Images/Clients/client_14.jpg";

export interface ClientItem {
  id: string;
  /** Brand or creator name shown next to the avatar. */
  name: string;
  /** Short proof stat, e.g. "800K Followers". Optional. */
  stats?: string;
  /** Imported image — the avatar in the strip. */
  img: string;
}

// Wisscom, Client Ten, Client Eleven, Client Twelve, and Special Two are
// still PLACEHOLDER — real name/stat/image pending.
export const CLIENTS: ClientItem[] = [
  { id: "c1", name: "Spotna", stats: "12.7K Followers", img: client1 },
  {
    id: "c2",
    name: "ameny.crochet.creations",
    stats: "6,998 Followers",
    img: client2,
  },
  { id: "c3", name: "Wisscom", stats: "750K Followers", img: client3 },
  { id: "c4", name: "Golden Shoes", stats: "34.9K Followers", img: client4 },
  { id: "c5", name: "Studio.nauvi", stats: "98.1K Followers", img: client5 },
  { id: "c6", name: "yassine_alouuii", stats: "10.7K Followers", img: client6 },
  { id: "c7", name: "Teachcode", stats: "6,350 Followers", img: client7 },
  {
    id: "c8",
    name: "Marketingwithedam",
    stats: "4,094 Followers",
    img: client8,
  },
  { id: "c9", name: "noor.pharmatn", stats: "12K Followers", img: client9 },
  { id: "c10", name: "Aura Herbs", stats: "18K Followers", img: client10 },
  { id: "c11", name: "Special Two", stats: "TBD Followers", img: client11 },
];
