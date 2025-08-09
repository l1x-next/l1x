import { writeFileSync, readdirSync } from "fs";
import { join } from "path";

const PUBLIC_DIR = join(process.cwd(), "public");
const OUTPUT_FILE = join(process.cwd(), "lib/generated/image-paths.ts");

const getImagePaths = (dir: string) => {
  return readdirSync(join(PUBLIC_DIR, dir))
    .filter((file) => /\.(png|jpe?g|svg|webp|avif)$/i.test(file))
    .map((file) => `/${dir}/${file}`);
};

const imagePaths = {
  portfolio: getImagePaths("portfolio"),
  hero: getImagePaths("hero"),
  clients: getImagePaths("clients"),
};

const fileContent = `// Auto-generated at build time
export const imagePaths = ${JSON.stringify(imagePaths, null, 2)};
`;

writeFileSync(OUTPUT_FILE, fileContent);
console.log("Generated image paths at:", OUTPUT_FILE);
