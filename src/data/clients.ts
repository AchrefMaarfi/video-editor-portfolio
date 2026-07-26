import { Check } from "lucide-react";
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
import client5 from "../assets/Images/Clients/client_5.png";
import client6 from "../assets/Images/Clients/client_6.jpg";
import client7 from "../assets/Images/Clients/client_7.jpg";
import client8 from "../assets/Images/Clients/client_8.jpg";
import client9 from "../assets/Images/Clients/client_9.jpg";
import client10 from "../assets/Images/Clients/client_10.jpg";
import client11 from "../assets/Images/Clients/client_11.jpg";
import client12 from "../assets/Images/Clients/client_12.jpg";

export interface ClientItem {
  id: string;
  /** Brand or creator name shown next to the avatar. */
  name: string;
  /** Short proof stat, e.g. "800K Followers". Optional. */
  stats?: string;
  /** Imported image — the avatar in the strip. */
  img: string;
}

// PLACEHOLDER — names and stats are invented. Replace each with the real
// client name and metric before launch; the images themselves are real.
export const CLIENTS: ClientItem[] = [
  { id: "c1", name: "Client One", stats: "1.2M Subs", img: client1 },
  { id: "c2", name: "Golden Shoes", stats: "800K Followers", img: client2 },
  { id: "c3", name: "Client Three", stats: "450K Subs", img: client3 },
  { id: "c4", name: "Client Four", stats: "2.1M Views/mo", img: client4 },
  { id: "c5", name: "Client Five", stats: "650K Followers", img: client5 },
  { id: "c6", name: "Client Six", stats: "3.4M Subs", img: client6 },
  { id: "c7", name: "Client Seven", stats: "900K Views/mo", img: client7 },
  { id: "c8", name: "Client Eight", stats: "1.1M Followers", img: client8 },
  { id: "c9", name: "Client Nine", stats: "520K Subs", img: client9 },
  { id: "c10", name: "Client Ten", stats: "750K Followers", img: client10 },
  { id: "c11", name: "Client Eleven", stats: "2.8M Views/mo", img: client11 },
  { id: "c12", name: "Client Twelve", stats: "4.2M Subs", img: client12 },
];
