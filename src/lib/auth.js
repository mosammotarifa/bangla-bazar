import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_BD_BETTER_AUTH_URL);
const db = client.db("bangla-bazar");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_ID_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_ID_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
