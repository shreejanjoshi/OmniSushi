// import { NextApiRequest, NextApiResponse } from "next";

// export interface Menu {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   menuType: string;
//   price: string;
// }

// export const menu: Menu[] = [
//   {
//     id: 1,
//     name: "Tempura",
//     description:
//       "Crispy tempura perfection meets the delicate flavors of fresh sushi. Immerse yourself in a tantalizing experience as tempura-battered goodness embraces a variety of delectable ingredients, creating a harmonious blend of texture and taste.",
//     image: "/menu/tempura.png",
//     menuType: "meal",
//     price: "14.99",
//   },
//   {
//     id: 2,
//     name: "Dimsum Scampi",
//     description:
//       "A fusion of Japanese and Chinese flavors, our Dimsum Scampi sushi boasts succulent shrimp, perfectly seasoned rice, and a touch of traditional dim sum flair. This dish is a celebration of flavors that dance on your palate.",
//     image: "/menu/dimsum.png",
//     menuType: "meal",
//     price: "16.99",
//   },
//   {
//     id: 3,
//     name: "Maki Zalm",
//     description:
//       "Maki Zalm is a symphony of freshness, featuring premium salmon delicately rolled with avocado, cucumber, and a hint of our signature sauce. Each bite is a journey into the sublime balance of flavors and textures.",
//     image: "/menu/maki.png",
//     menuType: "meal",
//     price: "18.99",
//   },
//   {
//     id: 4,
//     name: "Sushi King Boot 2p",
//     description:
//       "The Sushi King Boot 2p is a regal indulgence for two, showcasing a chef's selection of our finest sushi creations. From Nigiri to Maki, this royal feast promises an exquisite tasting experience, fit for sushi enthusiasts and royalty alike.",
//     image: "/menu/boot.png",
//     menuType: "meal",
//     price: "42.99",
//   },
//   {
//     id: 5,
//     name: "Matcha - Green Tea",
//     description:
//       "Immerse yourself in the tranquility of Japan with our Matcha Green Tea. Sourced from the finest tea leaves, this ceremonial drink offers a vibrant and earthy flavor, delivering a moment of serenity in every sip.",
//     image: "/menu/green.png",
//     menuType: "drink",
//     price: "4.99",
//   },
//   {
//     id: 6,
//     name: "Sake",
//     description:
//       "Experience the elegance of Japanese tradition with our premium Sake. Carefully selected and crafted, this rice wine boasts a smooth and refined taste, offering a delightful companion to your sushi journey.",
//     image: "/menu/sake.png",
//     menuType: "drink",
//     price: "12.99",
//   },
//   {
//     id: 7,
//     name: "Mushroom Cocktail",
//     description:
//       "Elevate your senses with our unique Mushroom Cocktail. This savory blend combines earthy mushroom essence with a touch of sweetness, creating a sophisticated and intriguing beverage that pairs exceptionally well with our sushi offerings.",
//     image: "/menu/mushroom.png",
//     menuType: "drink",
//     price: "9.99",
//   },
//   {
//     id: 8,
//     name: "The Pimp & Sessions Cocktail",
//     description:
//       "Indulge in the bold flavors of The Pimp & Sessions Cocktail. A fusion of premium Japanese spirits and carefully selected ingredients, this cocktail is a celebration of creativity, offering a symphony of tastes that dance on your palate.",
//     image: "/menu/pimp.png",
//     menuType: "drink",
//     price: "14.99",
//   },
// ];

// export const getMenu = async (): Promise<Menu[]> => {
//   return menu;

//   // try {
//   //   const response = await fetch(`${apiUrl}/your-menu-endpoint`, {
//   //     headers: {
//   //       Authorization: `Bearer ${authToken}`,
//   //     },
//   //   });
//   //   return response.data;
//   // } catch (error) {
//   //   console.error('Error fetching menu data from Strapi:', error);
//   //   throw error; // You can handle the error as needed
//   // }
// };

// export const getMenuById = async (id: number): Promise<Menu | undefined> => {
//   return menu.find((m) => m.id === id);
// };

// export const Handler = (req: NextApiRequest, res: NextApiResponse) => {};
