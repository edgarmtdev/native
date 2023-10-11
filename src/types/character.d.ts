export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginOrLocation;
    location: OriginOrLocation;
    image: string;
    episode?: (null)[] | null;
    url: string;
    created: string;
  }
  export interface OriginOrLocation {
    name: string;
    url: string;
  }
  