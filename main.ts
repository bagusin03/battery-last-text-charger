// The Battery's Last Text to Its Charger
// One line, at most 200 characters: the phone battery's final message
// to the charger it waited for all day. Deterministic, offline, no network,
// no API keys, no model calls at runtime. Writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Hey. It's me, 1%. I waited all day while you walked past three perfectly good chargers, and now I'm dying mid-text, and yes, I'm doing it on purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
