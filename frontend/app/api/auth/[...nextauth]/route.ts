// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/app/config/authOptions"; // Adjust the path as necessary

const handler = NextAuth(authOptions);

// Export the NextAuth handler for GET and POST methods
export { handler as GET, handler as POST };
