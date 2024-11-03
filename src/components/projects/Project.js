// Project.js
import bvs from "../../assets/projects/bvs.jpg";
import rpr from "../../assets/projects/rpr.jpg";
import ola from "../../assets/projects/olamideolayemi.jpg";

class Project {
  constructor(title, description, url, imagePath, tags) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.imagePath = imagePath;
    this.tags = tags;
  }
}

const projects = [
  new Project(
    "RPR Reparation Arts",
    "E-commerce website  for Reparations Arts, a fashion brand. The website facilitated the sale of fashion items to customers.",
    "https://reparationarts.com/",
    rpr,
    ["Wordpress", "WooCommerce", "DIVI", "HTML", "CSS"]
  ),
  new Project(
    "Biz Vital Signs",
    "Simple Web app for visualizing companies goals and services.",
    "https://bizvitalsigns.com",
    bvs, // Update with actual image paths
    ["Wordpress", "HTML", "CSS", "DIVI",]
  ),
  new Project(
    "olamideolayemi (v1)",
    "My current portfolio site, built with love by yours truly, wink.",
    "https://olamideolayemi.vercel.app",
    ola, // Update with actual image paths
    ["React", "Tailwind CSS"]
  ),
  // Add more projects as needed
];

export { Project, projects };
