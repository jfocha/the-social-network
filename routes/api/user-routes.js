const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUser);

module.exports = router;

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list