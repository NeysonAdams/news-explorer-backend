const router = require("express").Router();
const { createUser, login } = require("../controllers/users");
const userRouter = require("./users");
const articles = require("./articles");
const { NotFoundError } = require("../utils/errors");
const auth = require('../middlewares/auth');

const { validateCreateUser, validateLogin } = require('../middlewares/validation');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);

router.use(auth);
router.use("/users", userRouter);
router.use("/articles", articles);

router.use((req, res, next) => {
  next(new NotFoundError('Requested resource not found'));
});

module.exports = router;