/*
* This is a library of example crud request queries for a postgres database.
* I export each value and import it in my middleware functions to make the
* functions cleaner.
* */
/*example query for creating a table*/
const createUserTable = `
CREATE TABLE IF NOT EXISTS users(
            userId varchar PRIMARY KEY NOT NULL,
            nickname varchar NOT NULL,
            picture varchar NOT NULL,
            currentFriendCode varchar
        );`
/*This function takes in an id and builds a request to get a user by that id*/
getUser = (id) => {
    return `
        SELECT  *
        FROM users
        WHERE users.userId = '${id}';`
}
/*
*This function takes in an id generated however you wish and a user post request.
*It then generates an insert request using that information.
*The on conflict do nothing at the end stops the database from creating duplicates
*with this id.
*/
createUser = (id, req, currentFriendCode) => {
    return `
        INSERT INTO users (userId, nickname, picture, currentFriendCode)
        VALUES ('${id}','${req.body.nickname}','${req.body.picture}', '${currentFriendCode}')
        ON CONFLICT DO NOTHING;`
}
/*
*This function takes in the id of a user and uses that id to update a user
*with the data from the second variable.
*/
updateUser = (id, req) => {
    return `
        UPDATE users
        SET userID='${id}',
            nickname='${req.body.nickname}',
            picture='${req.body.picture}'
        WHERE userID = '${id}';`
}

/*This function deletes the user with the given id*/
deleteUser = (id) => {
    return `
        DELETE FROM users
        WHERE userID = '${id}';`
}
/*
This is how you export your values. Const values are exported by their name,
* while functions are exported as exportName:functionName. I use the same name
* for both
*/
module.exports ={
    createUserTable,
    getUser:getUser,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
}