import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createResponse = mutation({
  args: {
    response_1: v.string(),
    response_2: v.string(),
    response_3: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("responses", {
      response_1: args.response_1,
      response_2: args.response_2,
      response_3: args.response_3,
    });
  },
});