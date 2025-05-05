import { description } from "../constant";

export const dummyClubs = [
  {
    clubId: "tech-club",
    logoUrl: "/clubs/phoenix.png",
    name: "Phoenix Tech Club",
    description:
      "Explore the world of programming, AI, and cutting-edge technologies through events, projects, and workshops.",
    tags: ["technology", "coding", "AI", "web dev"],
    membersCount: 150,
    postCount: 35,
    rating: 4.6,
    isMember: false,
  },
  {
    clubId: "photography-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Photography Club",
    description:
      "Capture the beauty of campus life. Join us for photo walks, editing sessions, and contests.",
    tags: ["photography", "editing", "media"],
    membersCount: 90,
    postCount: 20,
    rating: 4.2,
    isMember: true,
  },
  {
    clubId: "literary-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Literary Club",
    description:
      "For the poets, writers, and orators. Organizing debates, open mics, and creative writing sessions.",
    tags: ["literature", "debate", "poetry", "writing"],
    membersCount: 120,
    postCount: 25,
    rating: 4.5,
    isMember: false,
  },
  {
    clubId: "art-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Art & Craft Club",
    description:
      "Unleash your creativity with painting, sketching, and DIY projects. Join us for workshops and exhibitions.",
    tags: ["art", "craft", "painting", "sketching"],
    membersCount: 60,
    postCount: 10,
    rating: 4.0,
    isMember: true,
  },
  {
    clubId: "music-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Music Club",
    description:
      "For music lovers! Join  for jamming sessions, music theory workshops, and performances.",
    tags: ["music", "jamming", "performance", "theory"],
    membersCount: 70,
    postCount: 12,
    rating: 4.4,
    isMember: false,
  },
  {
    clubId: "nature-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Nature Club",
    description:
      "Connect with nature through clean-up drives, plantation events, and eco-awareness campaigns.",
    tags: ["nature", "environment", "green"],
    membersCount: 80,
    postCount: 15,
    rating: 4.1,
    isMember: false,
  },
  {
    clubId: "health-club",
    logoUrl: "/clubs/ncc.jpg",
    name: "Health & Wellness Club",
    description:
      "Promoting physical and mental well-being through yoga sessions, fitness challenges, and awareness drives.",
    tags: ["health", "wellness", "fitness", "yoga"],
    membersCount: 100,
    postCount: 18,
    rating: 4.3,
    isMember: true,
  },
];

export const dummyTop4Clubs = [
  {
    clubId: "photography-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Photography Club",
    description:
      "Capture the beauty of campus life. Join us for photo walks, editing sessions, and contests.",
    tags: ["photography", "editing", "media"],
    membersCount: 90,
    postCount: 20,
    rating: 4.2,
    isMember: true,
  },
  {
    clubId: "tech-club",
    logoUrl: "/clubs/phoenix.png",
    name: "Tech Club",
    description:
      "Explore the world of programming, AI, and cutting-edge technologies through events, projects, and workshops.",
    tags: ["technology", "coding", "AI", "web dev"],
    membersCount: 150,
    postCount: 35,
    rating: 4.6,
    isMember: false,
  },
  {
    clubId: "literary-club",
    logoUrl: "/clubs/eco-cultural.png",
    name: "Literary Club",
    description:
      "For the poets, writers, and orators. Organizing debates, open mics, and creative writing sessions.",
    tags: ["literature", "debate", "poetry", "writing"],
    membersCount: 120,
    postCount: 25,
    rating: 4.5,
    isMember: false,
  },
  {
    clubId: "health-club",
    logoUrl: "/clubs/ncc.jpg",
    name: "Health & Wellness Club",
    description:
      "Promoting physical and mental well-being through yoga sessions, fitness challenges, and awareness drives.",
    tags: ["health", "wellness", "fitness", "yoga"],
    membersCount: 100,
    postCount: 18,
    rating: 4.3,
    isMember: true,
  },
];

export const dummyClubData = {
  clubId: "club-1",
  presidentId: "student-3",
  name: "Health & Wellness Club",
  logoUrl: "/clubs/ncc.jpg",
  bannerUrl: "/clubs/banner-sport.jpeg",
  description: `The Sports Club is the heartbeat of athletic life on campus. We
          promote fitness, sportsmanship, and the spirit of healthy competition
          through various sporting events, regular practice sessions, and
          intercollegiate tournaments. Whether you're a seasoned athlete or a
          beginner, the club fosters a supportive environment where everyone can
          grow.`,
  presidentMessage:
    "Our club is where passion meets discipline. We not only train hard but celebrate every achievement, big or small. Together, we push boundaries and stay united",
  announcements: [
    {
      announcer: "President",
      message:
        "Carrom Intercollege Competition is live. Check for participation.",
      date: "07 Apr, 2025",
    },
    {
      announcer: "Club Ambassador",
      message: "New Joinees having any doubt, ask it in the query section",
      date: "03 Apr, 2025",
    },
  ],
  coreMembers: [
    {
      id: "user-1",
      role: "President",
      name: "Rahul Sharm",
      profile: "/avatars/boy1.jpeg",
    },
    {
      id: "user-2",
      role: "Vice President",
      name: "Alok Nath",
      profile: "/avatars/boy2.jpg",
    },
    {
      id: "user-3",
      role: "Club Ambassador",
      name: "Alok Nath",
      profile: "/avatars/boy2.jpg",
    },
    {
      id: "user-4",
      role: "Treasurer",
      name: "Smriti Anand",
      profile: "/avatars/girl1.jpg",
    },
    {
      id: "user-5",
      role: "General Secretary",
      name: "Tufaan Baid",
      profile: "/avatars/boy1.jpeg",
    },
  ],
  members: [
    {
      id: "user-1",
      role: "Club Member",
      name: "Smriti Anand",
      profile: "/avatars/girl1.jpg",
      clubPoints: 78,
    },
    {
      id: "user-2",
      role: "Club Member",
      name: "Kunal Verma",
      profile: "/avatars/girl1.jpg",
      clubPoints: 92,
    },
    {
      id: "user-3",
      role: "Club Member",
      name: "Ishita Rao",
      profile: "/avatars/girl1.jpg",
      clubPoints: 61,
    },
    {
      id: "user-4",
      role: "Club Member",
      name: "Ritvik Singh",
      profile: "/avatars/girl1.jpg",
      clubPoints: 84,
    },
    {
      id: "user-5",
      role: "Club Member",
      name: "Megha Dey",
      profile: "/avatars/girl1.jpg",
      clubPoints: 73,
    },
    {
      id: "user-6",
      role: "Club Member",
      name: "Aditya Thakur",
      profile: "/avatars/girl1.jpg",
      clubPoints: 95,
    },
    {
      id: "user-7",
      role: "Club Member",
      name: "Priya Kapoor",
      profile: "/avatars/girl1.jpg",
      clubPoints: 88,
    },
    {
      id: "user-8",
      role: "Club Member",
      name: "Rajeev Menon",
      profile: "/avatars/girl1.jpg",
      clubPoints: 67,
    },
    {
      id: "user-9",
      role: "Club Member",
      name: "Tanvi Mishra",
      profile: "/avatars/girl1.jpg",
      clubPoints: 82,
    },
    {
      id: "user-10",
      role: "Club Member",
      name: "Devansh Gupta",
      profile: "/avatars/girl1.jpg",
      clubPoints: 76,
    },
    {
      id: "user-11",
      role: "Club Member",
      name: "Naina Shah",
      profile: "/avatars/girl1.jpg",
      clubPoints: 89,
    },
  ],
  applicants: ["user-1", "user-2", "user-3"],
  blogs: ["blogs-1", "blog-2", "blog-3"],
  events: ["event-1", "event-2", "event-3"],
};

export const dummyJoinRequest = [
  {
    id: "jr-124",
    name: "Ravi Verma",
    studentId: "ECE21078",
    streamYear: "ECE-2021",
    profile: "/avatars/boy1.jpeg",
    email: "ravi.verma@college.edu",
  },
  {
    id: "jr-125",
    name: "Megha Patel",
    studentId: "IT21032",
    streamYear: "IT-2021",
    profile: "/avatars/girl2.jpg",
    email: "megha.patel@college.edu",
  },
  {
    id: "jr-123",
    name: "Ankita Sharma",
    studentId: "CSE21045",
    streamYear: "CSE-2021",
    profile: "/avatars/girl1.jpg",
    email: "ankita.sharma@college.edu",
  },
];
