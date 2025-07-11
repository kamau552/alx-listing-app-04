export interface PillProps {
  title: string;
  styles?: string;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: string | string[] | undefined;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: number;
}



export interface PropertyCardProps {
  data: PropertyProps;
}


export interface Review {
  id: string;
  comment: string;
  reviewer: string;
  rating: number;
}