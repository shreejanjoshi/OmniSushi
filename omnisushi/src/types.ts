// Menu
export interface Menu {
  id?: number;
  name: string;
  description?: string;
  image: string;
  menuType: string;
  price: string;
}

export interface MenuApiListItem {
  id: number;
  attributes: {
    name: string;
    description: string;
    image: string;
    menuType: string;
    price: string;
  };
}

export interface MenuApiAllList {
  data: MenuApiListItem[];
}

export interface MenuApiSingleLists {
  data: MenuApiListItem;
}

//staff
export interface Staff {
  id?: number;
  name: string;
  role: string;
  department?: string;
  description?: string;
  image: string;
}

export interface StaffApiListItem {
  id: number;
  attributes: {
    name: string;
    role: string;
    department: string;
    description: string;
    image: string;
  };
}

export interface StaffApiAllMember {
  data: StaffApiListItem[];
}

export interface StaffApiSingleMember {
  data: StaffApiListItem;
}

//blog
export interface Blog {
  id?: number;
  title: string;
  short?: string;
  image: string;
  fullText?: string;
  author?: StaffApiSingleMember;
  createdAt: Date;
}

export interface BlogApiListItem {
  id: number;
  attributes: {
    title: string;
    short: string;
    fullText: string;
    image: string;
    author: StaffApiSingleMember;
    createdAt: Date;
  };
}

export interface BlogApiAllList {
  data: BlogApiListItem[];
}

export interface BlogApiSingleList {
  data: BlogApiListItem;
}
