import * as Knex from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries 💀
  return knex("users")
    .del()
    .then(async function () {
      // Inserts seed entries 🌱
      return knex("users").insert([
        {
          id: 1,
          username: "TestUser",
          email: "testUser@gmail.com",
          password: await bcrypt.hash("password", 12),
        },
      ]);
    });
}
