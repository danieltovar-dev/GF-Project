import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  responses: defineTable({
    response_1: v.string(),
    response_2: v.string(),
    response_3: v.string(),
  }),
});

