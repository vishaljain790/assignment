/**
 * Abstraction of app file..
 */

const app = require("./app");


/**
 * This end point is default one used to check the health of the server,
 * so that ASG and other required moduels can be set up easily.
 */
app.get('/', (req,res) => {
    res.send("helath is fine!");
    });

/**
 * Simple server calling on port 3000.
 * In prod, better to set it up in env variables or
 * create a script to allow a port at first time...
 */
app.listen(process.env.PORT, () => console.log('Server Started'))