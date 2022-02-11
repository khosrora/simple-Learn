const path = require('path');
require('dotenv').config({
    path: "./app/config/.env"
});
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
var cors = require('cors');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('./app/config/swagger');


const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();

// ! cors policy
app.use(cors())

// !passport Config
require('./app/config/passport');

// ! cookie parser
app.use(cookieParser())

//!DATABASE
const connectDB = require('./app/config/db');
connectDB();

// ! Body Parser 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ! flash
app.use(flash());
// ! session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

// ! session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    unset: "destroy",
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

// !passport
app.use(passport.initialize());
app.use(passport.session());

// !VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "./layout/layouts.ejs");
app.use(expressLayouts);
app.set("layout extractScripts", true)
// !Public Routes
app.use(express.static(path.join(__dirname, "public")))

// *Routes Web
app.use("/admin", require('./app/src/web/users/userRouter'))
app.use("/admin", require('./app/src/web/dashboard/home/dashboardRouter'))
app.use("/admin", require('./app/src/web/dashboard/user/userRouter'))
app.use("/admin", require('./app/src/web/dashboard/categories/categoryRouter'))
// * Routes Api
app.use("/api", require('./app/src/api/users/userRouterAPI'))
app.use("/api", require('./app/src/api/categories/categoryRouterAPI'))
app.use("/api", require('./app/src/api/channel/channelRouterAPI'))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})