export const dummyUser = {
  name: "Shwet Prakash",
  email: "shwet.prakash@college.edu",
  profile: {
    picture: "/avatars/dev.jpg",
    bio: "Engineering student passionate about building web apps and smart interfaces.",
    studentId: "CSE2025-0923",
    interests: [
      "Web Development",
      "3D Design",
      "React",
      "UI/UX",
      "Open Source",
    ],
    idcardUrl: "https://example.com/idcard.pdf",
    resumeUrl: "https://example.com/resume.pdf",
  },
  clubs: [
    {
      _id: "club1",
      name: "Tech Club",
      coverImage: "/clubs/banner-tech.jpg",
      logo: "/clubs/phoenix.png",
      tags: ["Technology", "Innovation", "AI"],
      memberCount: 120,
      announcements: [
        { id: "a1", title: "Hackathon 2025 Registration Open!" },
        { id: "a2", title: "Weekly Code & Coffee Meetup on Friday" },
      ],
    },
    {
      _id: "club2",
      name: "Eco-Culture Club",
      coverImage: "/clubs/banner-culture.jpg",
      logo: "/clubs/eco-cultural.png",
      tags: ["Creativity", "Design", "Exhibition"],
      memberCount: 87,
      announcements: [
        { id: "a1", title: "Annual Art Expo Submission Deadline Extended" },
        { id: "a2", title: "Workshop: Digital Illustration with Procreate" },
        { id: "a3", title: "Join us for the Sketch & Chill weekend!" },
      ],
    },
    {
      _id: "club3",
      name: "Green Earth Society",
      coverImage: "/clubs/banner-green.jpg",
      logo: "clubs/rotoract.png",
      tags: ["Environment", "Sustainability", "Eco-Friendly"],
      memberCount: 65,
      announcements: [],
    },
  ],
  registeredEvents: [
    {
      name: "Campus Code Carnival",
      ticketUrl: "https://example.com/ticket/ccc123",
    },
    {
      name: "Art Fusion Fest",
      ticketUrl: "https://example.com/ticket/aff456",
    },
    {
      name: "Campus Code Carnival",
      ticketUrl: "https://example.com/ticket/ccc123",
    },
    {
      name: "Art Fusion Fest",
      ticketUrl: "https://example.com/ticket/aff456",
    },
  ],
  blogs: [
    {
      title: "Why I Love Building UI with Tailwind",
      id: "blog-ui-tailwind",
    },
    {
      title: "3D in the Browser – My Journey with Three.js",
      id: "blog-3d-threejs",
    },
  ],
};
