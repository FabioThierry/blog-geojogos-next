// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const gamesDirectory = path.join(process.cwd(), "games");

// export async function getGameData(slug: string) {
//   const fullPath = path.join(gamesDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const { data, content } = matter(fileContents);

//   const processedContent = await remark().use(html).process(content);
//   const contentHtml = processedContent.toString();

//   return {
//     slug,
//     contentHtml,
//     title: data.title,
//     description: data.description,
//     coverImage: data.coverImage,
//     gallery: data.gallery,
//   };
// }

// // export function getAllGameSlugs() {
// //   const fileNames = fs.readdirSync(gamesDirectory);
// //   return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
// // }
