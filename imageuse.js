import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置参数
const imageDir = "docs/public"; // 图片目录
const projectDir = "docs"; // 项目目录
const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"];

// 获取所有图片文件
function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(file));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        results.push(file);
      }
    }
  });

  return results;
}

// 检查图片是否被引用
function checkImageUsage(images, projectDir) {
  const unusedImages = [];

  images.forEach((image) => {
    const imageName = path.basename(image);
    let isUsed = false;

    // 递归检查项目文件
    function checkDirectory(dir) {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          checkDirectory(fullPath);
        } else if (stat.isFile()) {
          // 排除图片文件自身
          if (!images.includes(fullPath)) {
            const content = fs.readFileSync(fullPath, "utf-8");
            if (content.includes(imageName)) {
              isUsed = true;
            }
          }
        }
      });
    }

    checkDirectory(projectDir);

    if (!isUsed) {
      unusedImages.push(image);
    }
  });

  return unusedImages;
}

// 执行检查
const allImages = getAllImages(path.join(__dirname, imageDir));
const unusedImages = checkImageUsage(
  allImages,
  path.join(__dirname, projectDir)
);

console.log("未使用的图片:");
console.log(unusedImages);
