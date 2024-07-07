import { defineSchema , defineTable } from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    users : defineTable({
        username : v.string(),
        clerkId : v.string(),
        email : v.string(),
        imageUrl : v.string(),
    }) .index("by email" ,["email"])
    .index("by clerkId" ,  ["clerkId"])
});