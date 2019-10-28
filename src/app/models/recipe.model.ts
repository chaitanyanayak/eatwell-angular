export interface IRecipe {
    id: number;
    name: string;
    description?: string;
    servingsize?: string;
    instructions?: string[];
    ingredients?: IIngredient[]
}

export interface IIngredient {
    ingredient: string;
    quantity: string;
}