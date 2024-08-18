const router = require("express").Router();
const {
	bookList,
	bookDetail,
	ejsBooks,
	ejsBookDetail,
} = require("../controller/bookController");

router.get("/books", bookList);
router.get("/books/:id", bookDetail);
router.get("/ejs/books", ejsBooks);

module.exports = router;