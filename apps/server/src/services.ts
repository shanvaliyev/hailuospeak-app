import { createAuth } from "@hailuospeak-app/auth";
import { createDb } from "@hailuospeak-app/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
