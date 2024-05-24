"use strict";

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/api/users",
       config: {
           handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID 
                   // (This will be a usernmae and password entered in on front end for you)
                   const userId = "user1234";

                   // execute the query
                   const res = await db.users.getUser( userId );

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );
};