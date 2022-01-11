export interface Product {
    id?: number;
    name: string;
    images: string[];
    stock?: number;
    available: boolean;
    price: number;
    description: string;
    category: string;
}