export const blogs = [
  {
    id: 1,
    title: "Blog 1",
    content:
      "This is the content of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Author 1",
    date: "2023-10-01",
    imageUrl: "/images/blog1.jpg",
    description: "This is a short description of Blog 1",
    tags: ["tag1", "tag2"],
    comments: [
      {
        id: 1,
        content: "This is a comment on Blog 1",
        writer: "Commenter 1",
        date: "2023-10-02",
      },
      {
        id: 2,
        content: "This is another comment on Blog 1",
        writer: "Commenter 2",
        date: "2023-10-03",
      },
    ],
  },
  {
    id: 2,
    title: "Blog 2",
    content:
      "This is the content of Blog 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    author: "Author 2",
    date: "2023-10-02",
    imageUrl: "/images/blog2.jpg",
    description: "This is a short description of Blog 2",
    tags: ["tag3", "tag4"],
    comments: [
      {
        id: 1,
        content: "This is a comment on Blog 2",
        writer: "Commenter 3",
        date: "2023-10-04",
      },
      {
        id: 2,
        content: "This is another comment on Blog 2",
        writer: "Commenter 4",
        date: "2023-10-05",
      },
    ],
  },
];

export const suggestedBlogs = [
  {
    id: 1,
    title: "Suggested Blog 1",
    date: "2023-10-03",
  },
  {
    id: 2,
    title: "Suggested Blog 2",
    date: "2023-10-04",
  },
  {
    id: 3,
    title: "Suggested Blog 3",
    date: "2023-10-05",
  },
  {
    id: 4,
    title: "Suggested Blog 4",
    date: "2023-10-06",
  },
];
