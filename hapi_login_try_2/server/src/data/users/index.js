"use strict";

const utils = require("../utils");

const register = async ({ sql, getConnection }) => {
    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries("users");

    const getUser = async (userId) => {
        // get a connection to PostgreSQL
        const pool = await getConnection();

        // execute the query with the provided userId
        const result = await pool.query(sqlQueries.getUser, [userId]);

        return result.rows; // assuming you want to return the rows of the result
    };
    const createUser = async (userName, userPassword, email) => {
        // Get a connection to PostgreSQL
        const pool = await getConnection();
    
        // Execute the query to create a new user
        const result = await pool.query(sqlQueries.createUser, [userName, userPassword, email]);
    
        return result;
      };

    return {
        getUser
    };
};

module.exports = { register };