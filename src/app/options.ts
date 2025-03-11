import { AuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";

const options: AuthOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid profile",
          redirect_uri:
            process.env.NODE_ENV === "production"
              ? "https://your-production-url.com/api/auth/callback/line"
              : "https://localhost:3000/",
        },
        request(context) {
          console.log(context);
        },
      },
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,

          email: profile.email,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
};

export { options };
