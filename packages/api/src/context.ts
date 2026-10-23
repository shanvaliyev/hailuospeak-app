import type { Session } from "@hailuospeak-app/auth";
import type { Database } from "@hailuospeak-app/db";

export type Context = {
  session: Session | null;
  db: Database;
};
