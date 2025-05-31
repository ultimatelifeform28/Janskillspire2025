let recipes = [

    { 
        id: 1,
        title: 'Spaghetti Bolognese',
        ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
        instructions: 'Cook spaghetti. In a separate pan, brown the beef with onion and garlic. Add tomato sauce and simmer. Serve over spaghetti.',
        completed: false
    },
    {
        id: 2,
        title: 'Chicken Curry',
        ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'rice'],
        instructions: 'Sauté onion, add chicken and curry powder. Pour in coconut milk and simmer. Serve with rice.',
        completed: true
    },
    {
        id: 3,
        title: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing'],
        instructions: 'Toss lettuce with croutons, cheese, and dressing. Serve chilled.',
        completed: false
    },
    {
        id: 4,
        title: 'Beef Tacos',
        ingredients: ['taco shells', 'ground beef', 'lettuce', 'tomato', 'cheese'],
        instructions: 'Cook beef, fill taco shells with beef and toppings. Serve with salsa.',
        completed: false
    },
    {
        id: 5,
        title: 'Vegetable Stir Fry',
        ingredients: ['mixed vegetables', 'soy sauce', 'ginger', 'garlic'],
        instructions: 'Stir fry vegetables with ginger and garlic. Serve with rice or noodles.',
        completed: true
    },
    {
        id: 6,
        title: 'Pancakes',
        ingredients: ['flour', 'milk', 'eggs', 'sugar'],
        instructions: 'Mix ingredients, pour batter on skillet, flip when bubbles form. Serve with syrup.',
        completed: false
    },
    {
        id: 7,
        title: 'Grilled Cheese Sandwich',
        ingredients: ['bread', 'cheese', 'butter'],
        instructions: 'Butter bread, place cheese between slices, grill until golden brown.',
        completed: false
    },
];

// Get all recipes
const getAllRecipes = (req, res) => {
    res.send(recipes);
};

// Get a specific recipe by ID
const getRecipeById = (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (recipe) {
        res.send(recipe);
    } else {
        res.status(404).send({ message: 'Recipe not found' });
    }
};

// Add a new recipe
const addRecipe = (req, res) => {
    const { title, ingredients, instructions, completed } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).send({ message: 'Title, ingredients, and instructions are required' });
    }

    const newRecipe = {
        id: recipes.length + 1,
        title,
        ingredients,
        instructions,
        completed: completed || false,
    };

    recipes.push(newRecipe);
    res.status(201).send(newRecipe);
};

// Update a recipe by ID
const updateRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex === -1) {
        return res.status(404).send({ message: 'Recipe not found' });
    }

    const { title, ingredients, instructions, completed } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.status(400).send({ message: 'Title, ingredients, and instructions are required' });
    }

    recipes[recipeIndex] = {
        id,
        title,
        ingredients,
        instructions,
        completed: completed || false,
    };

    res.send(recipes[recipeIndex]);
};

// Delete a recipe by ID
const deleteRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex === -1) {
        return res.status(404).send({ message: 'Recipe not found' });
    }

    recipes.splice(recipeIndex, 1);
    res.send({ message: 'Recipe deleted successfully' });
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe,
};