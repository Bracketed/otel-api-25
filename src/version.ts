import { readPackageUpSync } from "read-package-up";

export const VERSION = readPackageUpSync()!.packageJson.version