exports.swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "simple Learn",
            description: "Customer API Information",
            "contact": {
                "name": "khosro RA",
                "email": "khosrora153333@gmail.com",
            },
            servers: [process.env.url]
        } 
    },
    // ['.routes/*.js']
    apis: [
        "./app/src/api/users/userRouterAPI.js",
        "./app/src/api/categories/categoryRouterAPI.js",
        "./app/src/api/channel/channelRouterAPI.js",
    ]
};

