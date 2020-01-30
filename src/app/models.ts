export class Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  photograph: string;
  address: string;
  latlng: LatLng;
  cuisineType: string;
  operatingHours: OperatingHours;
  reviews: Review[];
}

export class LatLng {
  lat: number;
  lng: number;
}

export class OperatingHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export class Review {
  name: string;
  date: string;
  rating: number;
  comments: string;
}
