import "module-alias/register";
import "dotenv/config";

import { helloWorld } from "@utils/helloWorld";

const main = async () => {
  await helloWorld(process.env.ENV_TEST!);
};

main();
