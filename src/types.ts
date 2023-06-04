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

export interface IImage {
  data: {
    id: 1;
    attributes: {
      name: string;
      width: number;
      height: number;
      formats: null;
      size: number;
      url: string;
    }
  }
}

export interface IPromo {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    link: string;
    img: IImage;
  };
}

export interface IAdditional {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    img: IImage;
  };
}

export interface IPopular {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    link: string;
    img: IImage;
  };
}

export interface IAdvantage {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    icon: IImage;
  };
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
