import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// Create a new category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    // Ensure name is provided
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    // Create the new category
    const category = await new Category({ name }).save();
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create category" });
  }
});

// Update an existing category
const updateCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { categoryId } = req.params;

    // Find category by ID
    const category = await Category.findOne({ _id: categoryId });

    // If category not found, return 404
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Update category name
    category.name = name;

    // Save updated category
    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update category" });
  }
});

// Delete a category
const removeCategory = asyncHandler(async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Find category by ID
    const category = await Category.findById(categoryId);

    // If category not found, return 404
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Delete the category
    const removed = await Category.findByIdAndRemove(categoryId);
    res.json({ message: "Category deleted", category: removed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete category" });
  }
});

// List all categories
const listCategory = asyncHandler(async (req, res) => {
  try {
    // Fetch all categories from the database
    const allCategories = await Category.find({});

    // If no categories are found, return 404
    if (!allCategories.length) {
      return res.status(404).json({ error: "No categories found" });
    }

    // Return the list of categories
    res.json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// Get details of a single category by ID
const readCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Find category by ID
    const category = await Category.findById(id);

    // If category not found, return 404
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Return category details
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch category details" });
  }
});

export {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
};
