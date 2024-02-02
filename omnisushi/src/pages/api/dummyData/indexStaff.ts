// export interface StaffMember {
//   id: number;
//   name: string;
//   role: string;
//   department: string;
//   description: string;
//   image: string;
// }

// export const staff: StaffMember[] = [
//   {
//     id: 1,
//     name: "Emi Suzuki",
//     role: "General Manager",
//     department: "Management",
//     description:
//       "Oversees seamless restaurant operations, setting the tone for service excellence.",
//     image: "/staff/m1.png",
//   },
//   {
//     id: 2,
//     name: "Kenji Nakamura",
//     role: "Assistant Manager",
//     department: "Management",
//     description:
//       "Supports day-to-day operations, ensuring a smooth and enjoyable dining atmosphere.",
//     image: "/staff/m2.png",
//   },
//   {
//     id: 3,
//     name: "Hiroshi Tanaka",
//     role: "Executive Chef",
//     department: "Kitchen",
//     description:
//       "Culinary mastermind with decades of experience, ensuring every dish is a work of art.",
//     image: "/staff/k1.png",
//   },
//   {
//     id: 4,
//     name: "Aya Takahashi",
//     role: "Sushi Artisan",
//     department: "Kitchen",
//     description:
//       "Meticulously crafts visually stunning and delicious sushi creations with precision.",
//     image: "/staff/k2.png",
//   },
//   {
//     id: 5,
//     name: "Takeshi Yamamoto",
//     role: "Head Server",
//     department: "Front of House",
//     description:
//       "Leads the service team with warmth and professionalism, ensuring guest satisfaction.",
//     image: "/staff/s1.png",
//   },
//   {
//     id: 6,
//     name: "Yuki Matsuda",
//     role: "Mixologist",
//     department: "Bar",
//     description:
//       "Expert mixologist crafting signature cocktails and perfectly paired sake for guests.",
//     image: "/staff/b1.png",
//   },
// ];

// export const getStaff = async (): Promise<StaffMember[]> => {
//   return staff;
// };

// export const getStaffMemberById = async (
//   id: number
// ): Promise<StaffMember | undefined> => {
//   return staff.find((member) => member.id === id);
// };
