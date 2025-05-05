// types/user.ts

export type UserDataType = {
  id: string;
  email: string;
  name: string;
  username: string;
  profilePic: string;
  bio: string;
  isAdmin: boolean;
};

export type ActivityPointType = {
  userId: string;
  points: number;
};
