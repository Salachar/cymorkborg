import { THE_SNYK_COMMANDS } from "./the_snyk";
import { THE_BASE_COMMANDS } from "./the_base";
import { FOUR_COURT_COMMANDS } from "./four_court";

export const THE_55_LOWER_LEVELS_COMMANDS = {
  ...THE_SNYK_COMMANDS,
  ...THE_BASE_COMMANDS,
  ...FOUR_COURT_COMMANDS
};
