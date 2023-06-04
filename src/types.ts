export interface IProps {
  categories: string;
  slug: string;
}

export interface IParams {
  params: IProps;
}

export interface ILink {
  id: number;
  title: string;
  href: false | string;
}

export interface IPage {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    content: string;
    contentAdditional: string;
  };
}

export interface IProduct {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    sortID: number;
    categories: {
      data: ICategory[];
    };
    sorts: {
      data: ISort[];
    }
  };
}

export interface ISort {
  id: number;
  attributes: {
    title: string;
    anchor: string;
    sortID: number;
    products: {
      data: IProduct[];
    }
  };
}

export interface ICategory {
  id: number;
  attributes: {
    title: string;
    slug: string;
    sortID: number;
    products: {
      data: IProduct[];
    }
  };
}
