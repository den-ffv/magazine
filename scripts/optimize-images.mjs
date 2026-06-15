import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();

const staticImages = [
  'src/img/big-post.png',
  'src/img/magazin-cover.jpg',
  'src/img/podcast-cover.jpg',
  'src/img/author.jpg',
];

async function ensureDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function writeWebpFromRaster(inputPath, outputPath, quality = 82, resizeOptions) {
  const inputBuffer = await fs.readFile(inputPath);
  let image = sharp(inputBuffer, { failOn: 'none' });

  if (resizeOptions) {
    image = image.resize(resizeOptions.width, resizeOptions.height, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  await ensureDirectory(outputPath);
  await image.webp({ quality }).toFile(outputPath);
}

async function writeWebpFromSvg(inputPath, outputPath, quality = 82, resizeOptions) {
  const input = await fs.readFile(inputPath, 'utf8');
  const embeddedBitmap = input.match(/data:image\/[a-z0-9.+-]+;base64,([A-Za-z0-9+/=\s]+)/i);
  const sourceBuffer = embeddedBitmap
    ? Buffer.from(embeddedBitmap[1].replace(/\s+/g, ''), 'base64')
    : Buffer.from(input);

  let image = sharp(sourceBuffer, { failOn: 'none' });

  if (resizeOptions) {
    image = image.resize(resizeOptions.width, resizeOptions.height, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  await ensureDirectory(outputPath);
  await image.webp({ quality }).toFile(outputPath);
}

async function collectFiles(directory, predicate) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && predicate(entry.name))
    .map((entry) => path.join(directory, entry.name));
}

async function optimizeStaticImages() {
  for (const relativePath of staticImages) {
    const inputPath = path.join(projectRoot, relativePath);
    const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');

    const resizeMap = {
      'src/img/big-post.png': { width: 1520, height: 800 },
      'src/img/magazin-cover.jpg': { width: 369, height: 462 },
      'src/img/podcast-cover.jpg': { width: 408, height: 408 },
      'src/img/author.jpg': { width: 150, height: 151 },
    };

    await writeWebpFromRaster(inputPath, outputPath, 82, resizeMap[relativePath]);
    console.log(`optimized ${relativePath} -> ${path.relative(projectRoot, outputPath)}`);
  }
}

async function optimizeUploadedPosts() {
  const uploadsDir = path.join(projectRoot, 'public/uploads');
  const postImages = await collectFiles(uploadsDir, (name) => /^post\d+\.(jpe?g|png)$/i.test(name));

  for (const inputPath of postImages) {
    const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');
    await writeWebpFromRaster(inputPath, outputPath, 82, { width: 407, height: 407 });
    console.log(`optimized ${path.relative(projectRoot, inputPath)} -> ${path.relative(projectRoot, outputPath)}`);
  }
}

async function optimizeUserIcons() {
  const iconsDir = path.join(projectRoot, 'public/uploads/usersIcon');
  const svgIcons = await collectFiles(iconsDir, (name) => name.endsWith('.svg'));

  for (const inputPath of svgIcons) {
    const outputPath = inputPath.replace(/\.svg$/i, '.webp');
    await writeWebpFromSvg(inputPath, outputPath, 82, { width: 150, height: 151 });
    console.log(`optimized ${path.relative(projectRoot, inputPath)} -> ${path.relative(projectRoot, outputPath)}`);
  }
}

async function main() {
  await optimizeStaticImages();
  await optimizeUploadedPosts();
  await optimizeUserIcons();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
