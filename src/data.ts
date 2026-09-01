import ringImage from "./assets/ring.png";
import paintImage from "./assets/paint.png";
import doorImage from "./assets/door.png";
import poisonImage from "./assets/poision.png";
import cipherImage from "./assets/Chiper.png";
export interface Suspect {
  name: string;
  role: string;
  image: string;
}

export interface Evidence {
  title: string;
  description: string;
}

export interface Solution {
  culprit: string;
  explanation: string;
}

export interface Case {
  id: number;
  title: string;
  image: string;
  type: string;
  location: string;
  description: string;
  suspects: Suspect[];
  evidence: Evidence[];
  timeline: string[];
  solution: Solution;
}

export const cases: Case[] = [
  {
    id: 1,
    title: "The Missing Ring",
    image: ringImage,
    type: "Theft",
    location: "Hawthorne Estate",
    description:
      "An irreplaceable 18-karat diamond ring vanished from Lady Eleanor's private safe during the annual masquerade ball. The vault had no signs of forced entry, suggesting internal access.",
    suspects: [
      {
        name: "Arthur Pendelton",
        role: "Butler",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Eleanor Vance",
        role: "Rival Heiress",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Julian Knox",
        role: "Jewelry Appraiser",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
      }
    ],
    evidence: [
      {
        title: "Fingerprint on Safe Glass",
        description: "A partial smudged fingerprint matching a leather butler glove."
      },
      {
        title: "Torn Silk Fabric",
        description: "A piece of black silk snagged on the velvet display cushion inside the vault."
      }
    ],
    timeline: [
      "8:00 PM — Guests arrived at the ballroom.",
      "9:15 PM — Power went out briefly for 3 minutes.",
      "9:20 PM — Ring was noticed missing from the open safe."
    ],
    solution: {
      culprit: "Arthur Pendelton",
      explanation:
        "Arthur used his master key during the engineered power blackout to access the vault, accidentally tearing his silk-lined gloves on the display stand."
    }
  },
  {
    id: 2,
    title: "The Missing Painting",
    image: paintImage,
    type: "Art Theft",
    location: "Metropolitan Art Gallery",
    description:
      "A priceless Renaissance painting disappeared from a heavily guarded gallery without triggering the alarm system during peak hours.",
    suspects: [
      {
        name: "Damian Cole",
        role: "Lead Restorer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Sarah Lin",
        role: "Gallery Guard",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Hugo Frost",
        role: "Art Collector",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
      }
    ],
    evidence: [
      {
        title: "Paint Residue",
        description: "Fresh paint residue was discovered on the empty frame surrounding the missing artwork."
      },
      {
        title: "Disabled Camera",
        description: "Camera 4 stopped recording for exactly two minutes during the disappearance."
      }
    ],
    timeline: [
      "2:00 PM — Visitors gathered around the Renaissance collection.",
      "2:15 PM — Camera 4 stopped recording.",
      "2:17 PM — Security system returned to normal.",
      "3:00 PM — Curator discovered the painting was missing."
    ],
    solution: {
      culprit: "Damian Cole",
      explanation:
        "Damian used his restoration access to remove the painting during the camera blackout and replaced it with a realistic replica."
    }
  },
  {
    id: 3,
    title: "The Locked Door",
    image: doorImage,
    type: "Mystery",
    location: "Blackwood Manor",
    description:
      "A valuable antique was stolen from a locked study. The door was locked from the inside, and every window was secured.",
    suspects: [
      {
        name: "Edgar Blackwood",
        role: "Owner's Brother",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Martha Gray",
        role: "Housekeeper",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Thomas Reed",
        role: "Gardener",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80"
      }
    ],
    evidence: [
      {
        title: "Broken Clock",
        description: "A broken wall clock was found on the floor, stopped at exactly 11:45 PM."
      },
      {
        title: "Wet Footprints",
        description: "Small wet footprints were discovered near the study window despite the window being locked."
      }
    ],
    timeline: [
      "11:00 PM — Edgar entered the study.",
      "11:30 PM — Martha heard a loud noise from inside.",
      "11:45 PM — The clock stopped.",
      "12:00 AM — The study was found locked from the inside."
    ],
    solution: {
      culprit: "Thomas Reed",
      explanation:
        "Thomas entered through the study window before it was locked, hid inside the room, and escaped through the same window after creating the illusion of a locked-room mystery."
    }
  },
  {
    id: 4,
    title: "Midnight Murmur",
    image: poisonImage,
    type: "Murder",
    location: "Blackwood Manor Library",
    description:
      "Lord Blackwood was found slumped over his desk, poisoned by a rare botanical toxin added to his evening tea.",
    suspects: [
      {
        name: "Dr. Henry Sterling",
        role: "Personal Physician",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Clara Blackwood",
        role: "Eldest Daughter",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Victor Vance",
        role: "Business Partner",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
      }
    ],
    evidence: [
      {
        title: "Empty Vial",
        description: "A tiny glass vial concealed behind a leather book was found near the desk."
      },
      {
        title: "Altered Will",
        description: "A draft of a new will cutting Clara out of the family inheritance."
      }
    ],
    timeline: [
      "10:00 PM — Lord Blackwood retired to his study with fresh tea.",
      "10:30 PM — Dr. Sterling entered to deliver daily medication.",
      "11:15 PM — Maid discovered the body."
    ],
    solution: {
      culprit: "Clara Blackwood",
      explanation:
        "Clara poisoned the tea earlier in the kitchen after discovering that her father planned to disinherit her."
    }
  },
  {
    id: 5,
    title: "The Vanishing Cipher",
    image: cipherImage,
    type: "Espionage",
    location: "Grand Central Hotel - Room 407",
    description:
      "A top-secret military decoder device was stolen from a briefcase while the diplomat was away for dinner.",
    suspects: [
      {
        name: "Agent Maya Reed",
        role: "Security Detail",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Evelyn Thorne",
        role: "Hotel Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
      },
      {
        name: "Marcus Brody",
        role: "Room Service Attendant",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
      }
    ],
    evidence: [
      {
        title: "Master Keycard Logs",
        description: "Room keycard logs show an unauthorized access at 7:42 PM."
      },
      {
        title: "Dropped Matchbox",
        description: "A matchbox originating from a waterfront bar known for espionage contacts."
      }
    ],
    timeline: [
      "7:00 PM — Diplomat left the room for dinner downstairs.",
      "7:42 PM — Unauthorized entry recorded on electronic door log.",
      "8:30 PM — Diplomat returned and discovered the vault was emptied."
    ],
    solution: {
      culprit: "Marcus Brody",
      explanation:
        "Marcus used a cloned master key card while delivering extra towels to steal the briefcase for a rival intelligence syndicate."
    }
  }
];