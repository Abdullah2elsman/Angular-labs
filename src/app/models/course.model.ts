import { Review } from "./review.model";

export interface Course{
    id: number;
    title: string;
    instructor: string;
    price: number;
    seats: number;
    image: string;
    catId: number;
    desc: string;
    roadmap: string[];
    reviews: Review[];
}