const queryLibrary = require('./queryLibrary');

//this function is used to add a user to the postgres database
getUser = (pool, id, callback) =>{
    //first we take the pool object and open a connection.
    pool.connect((err,client,done) => {
        //make sure to throw the error if you plan to catch it
        if(err) throw err;
        /*
        * Here we call client.query and pass it the query string from our library.
        * The callback function handles both the success and error states.
        * In this instance I am logging the id and query if there is an error.
        * On a success I am passing the callback function a custom response object with a
        * http status code, a message and the row the query retrieved.
        */
        client.query(queryLibrary.getUser(id.toString()),
            (err,res) => {
                if(err) {
                    console.log("Error reading Id: ", id)
                    console.log("Error with Query:", queryLibrary.getUser(id.toString()))
                }
                else{
                    console.log("User fetched successfully");
                    callback({
                        msg:"User fetched successfully",
                        status:200,
                        data:res.rows[0],
                    });
                }
                done();
            });
    })
}

//this is an example of a post request. I pass in both the id and the request data used in the insert request
createUser = (pool,id,req, callback) => {

    pool.connect((err,client,done) => {
        if (err) throw err;

        /*
        * In this instance I am logging the request body and query if there is an error.
        * On a success I am passing the callback function a custom response object with a
        * http status code, a message and the original request in case the client needs to update data on
        * a success.
        */
        client.query(queryLibrary.createUser(id, req), (err, res) => {
            if (err) {
                console.log("Error with request:", req.body)
                console.log("Error with Query:", queryLibrary.createUser(id, req))
            } else {
                console.log("User created successfully");
                callback({
                    msg:"User created successfully",
                    status:200,
                    data:{
                        userId:id,
                        ...req.body,
                    },
                });
            }
        });
        done();
    })
}

//this is an example of a put request. I pass in both the id and the request data used in the insert request
updateUser = (pool,id,req, callback) => {

    pool.connect((err,client,done) => {
        if (err) throw err;

       /*
       * In this instance I am logging the request body and query if there is an error.
       * On a success I am passing the callback function a custom response object with a
       * http status code, a message and the original request in case the client needs to update data on
       * a success.
       */
        client.query(queryLibrary.updateUser(id, req), (err, res) => {
            if (err) {
                console.log("Error with request:", req.body);
                console.log("Error with Query:", queryLibrary.createUser(id, req));
            } else {
                console.log("User updated successfully");
                callback({
                    msg:"User updated successfully",
                    status:200,
                    data:{
                        userId:id,
                        ...req.body,
                    },
                });
            }
        });

        done();
    })
}

//this is an example of a delete request. I pass in the id of the user to be deleted but I could pass in a req body if
// something else needed to be deleted

deleteUser = (pool, id, callback) => {

    pool.connect((err,client,done) => {
        if (err) throw err;

       /*
       * In this instance I am logging the id for if there is an error.
       * On a success I am passing the callback function a custom response object with a
       * http status code, a message and the id in case the client needs to update data on
       * a success.
       */
        client.query(queryLibrary.deleteUser(id), (err, res) => {
            if (err) {
                console.log("Error deleting user with id:", `${id}}`)
                console.log("Error with Query:", queryLibrary.deleteUser(id))
            } else {
                console.log("Users deleted successfully");
                callback({
                    msg:"User deleted successfully",
                    status:200,
                    data:{
                        userId:id,
                    },
                })
            }
        });

        done();
    })
}


// this is how you export all the functions in node
module.exports = {
    getUser:getUser,
    createUser:createUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
}