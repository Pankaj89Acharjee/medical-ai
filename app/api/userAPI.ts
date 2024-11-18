"use server"

import { neon } from "@neondatabase/serverless"

const sql = neon(`${process.env.DATABASE_URL}`)

export async function getData() {
    const data = await sql`SELECT id, name, email, phone, userid FROM users`
    return data
}


export const createUser = async (user: CreateUserParams) => {
    //console.log("User data", user.name, user.email, user.phone, user.userid)

    try {
        await sql`INSERT INTO users 
        (
            name,
            email,
            phone,
            userid
        ) VALUES (
            ${user.name},
            ${user.email},
            ${user.phone},
            ${user.userid} 
        )`;

        const getUserByEmail = await sql`SELECT id, name, email, phone, userid FROM users WHERE email = ${user.email}`

        //console.log("User fetched data", getUserByEmail)
        return { data: getUserByEmail[0].userid, status: 201 }
    } catch (error) {
        console.log("Error in user creation", error)
    }
}