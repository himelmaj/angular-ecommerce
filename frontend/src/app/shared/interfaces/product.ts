export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    featured: boolean;
    category: Category;
}

export type Category = 'man' | 'woman' | 'unisex'