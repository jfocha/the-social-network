const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThought);


// // /api/comments/<pizzaId>
// router.route('/:pizzaId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:thoughtId/reactions')
    // This is a PUT route, instead of a POST, because technically we're not creating a new reply resource. Instead, we're just updating the existing comment resource.
    .put(addReaction)
    .delete(removeReaction);

// router.route('/:pizzaId/:commentId/:replyId').delete(removeReaction);

module.exports = router;