// Experience.js

class Experience {
  constructor(title, role, description, url, year, tags) {
    this.title = title;
    this.role = role;
    this.description = description;
    this.year = year;
    this.url = url;
    this.tags = tags;
  }
}

const experience = [
  new Experience(
    "Taavetti Digital",
    "Front-end Web Developer",
    "Design and develop websites on WordPress platform, utilizing HTML, CSS, and JavaScript to create visually appealing and responsive interfaces",
    "https://taavetti.digital/",
    "2021 - 2024",
    ["Wordpress", "WooCommerce", "UI/UX", "HTML", "CSS"]
  ),
  new Experience(
    "Rugged Brand",
    "Website Designer, Product Manager, and Product Designer",
    "Spearheaded website design and management initiatives, overseeing the development and maintenance of the company's online e-commerce platform to enhance brand visibility and customer engagement.",
    "https://ruggedbrand.ng",
    "2021 - 2022",
    ["Wordpress", "Microsoft Packages"]
  ),
  // Add more experience as needed
];

export { Experience, experience };
