export interface IProps {
  categories: string;
  slug: string;
}

export interface IParams {
  params: IProps;
}

export interface IDataItem {
  [key: string]: string;
}

export interface IDropdownComponentProps {
  data: IDataItem[];
}

export interface IData {
  id: string;
  data: IDataItem[];
}

export interface ILink {
  id: number;
  title: string;
  href: false | string;
}

export interface IImage {
  id: 1;
  attributes: {
    name: string;
    width: number;
    height: number;
    formats: null;
    size: number;
    url: string;
  };
}

export interface IPromo {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    link: string;
    img: {
      data: IImage;
    };
  };
}

export interface IAdditional {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    img: {
      data: IImage;
    };
  };
}

export interface IPopular {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    link: string;
    img: {
      data: IImage;
    };
  };
}

export interface IAdvantage {
  id: number;
  attributes: {
    sortID: string;
    title: string;
    content: string;
    icon: {
      data: IImage;
    };
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
    imgs: {
      data: IImage[];
    };
  };
}

export interface IProduct {
  id: number;
  attributes: {
    title: string;
    type: string;
    description: string;
    content: string;
    slug: string;
    sortID: number;
    tableID: string;
    categories: {
      data: ICategory[];
    };
    sorts: {
      data: ISort[];
    };
    img: {
      data: IImage[];
    };
    profile: {
      data: IImage;
    };
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
    };
  };
}

export interface ICategory {
  id: number;
  attributes: {
    title: string;
    sortID: number;
    products: {
      data: IProduct[];
    };
  };
}

export interface IMenu {
  id: number;
  attributes: {
    title: string;
    link: string;
    mainMenu: boolean;
  };
}

export interface ITranslate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
