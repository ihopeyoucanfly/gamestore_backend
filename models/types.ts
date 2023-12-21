// Types

import { ObjectId } from "mongoose";

export type RegistrationRequestBody = {
    number: string;
    password: string;
    username: string;
};

export type LoginRequestBody = {
    number: string;
    password: string;
};

export type ProductType = {
    id: string;
    title: string;
    desc: string;
    characteristic: string;
    category: string;
    price: number;
    oldPrice: number;
    hit: boolean;
    discount: boolean;
    inStock: boolean;
    urlImages: string[];
};
