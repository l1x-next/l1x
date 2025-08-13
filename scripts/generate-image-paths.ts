import { writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = join(process.cwd(), "public");
const OUTPUT_FILE = join(process.cwd(), "lib/generated/image-paths.ts");
const TARGET_DIRS = ["portfolio", "hero", "clients"];

const getImagePaths = (dir: string) => {
  const fullPath = join(PUBLIC_DIR, dir);

  if (!existsSync(fullPath)) return [];
  return readdirSync(join(PUBLIC_DIR, dir))
    .filter((file) => /\.(png|jpe?g|svg|webp|avif)$/i.test(file))
    .map((file) => `/${dir}/${file}`);
};

const imagePaths = TARGET_DIRS.reduce((acc, dir) => {
  acc[dir] = getImagePaths(dir);

  return acc;
}, {} as Record<string, string[]>);

const fileContent = `// Auto-generated at build time
export const imagePaths = ${JSON.stringify(imagePaths, null, 2)};
`;

writeFileSync(OUTPUT_FILE, fileContent);
console.log("Generated image paths at:", OUTPUT_FILE);
