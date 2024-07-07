import { internalMutation ,internalQuery } from "./_generated/server";
import {v} from "convex/values";

export const create = internalMutation({
    args : {
        username : v.string(),
        clerkId : v.string(),
        email : v.string(),
        imageUrl : v.string(),
    } ,
    handler : async (ctx , args ) => {
        await ctx.db.insert("users", args );
    } ,
})
