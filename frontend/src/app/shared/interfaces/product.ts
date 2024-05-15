export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: Category;
}

export type Category = 'man' | 'woman' | 'unisex'