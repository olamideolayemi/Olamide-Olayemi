// Archive.js

class Archive {
  constructor(title, url, year, tags) {
    this.title = title;
    this.url = url;
    this.year = year;
    this.tags = tags;
  }
}

const archives = [
  new Archive(
    "Olamide Olayemi (v2)",
    "https://olamideolayemi.vercel.app",
    '2024',
    ["React", "JavaScript", "Tailwind CSS"]
  ),
  new Archive(
    "Eazzy Mart Store",
    "https://ezm.productkitchen.tech",
    '2024',    
    ["Wordpress", "Woo-Commerce", "DIVI", "HTML", "CSS", "PHP", "J-Query"]
  ),
  new Archive(
    "Talent Republic (update)",
    "https://talentrepublic.org.ng",
    '2024',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Seun Martinson",
    "https://seunmartinson.com",
    '2024',
    ["Wordpress", "Divi", "HTML", "CSS"]
  ),
  new Archive(
    "333 Operations Admin Dashboard",
    "",
    '2024',
    ["React", "Next.js", "TypeScript", "JavaScript", "Sass", "Tailwind"]
  ),
  new Archive(
    "Browse Point Billing Admin Dashboard",
    "",
    '2024',
    ["React", "JavaScript", "Sass",]
  ),
  new Archive(
    "Biz Vital Signs",
    "https://bizvitalsigns.com",
    '2023',
    ["Wordpress", "HTML", "CSS", "DIVI",]
  ),
  new Archive(
    "olamideolayemi (v1)",
    "https://olamideolayemi.github.io/Olamide-Olayemi-Portfolio/",
    '2023',
    ["HTML", "CSS", "JavaScript"]
  ),
  new Archive(
    "Amoula Ventures Ltd.",
    "https://amoulaventures.com",
    '2023',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Talent Republic",
    "https://talentrepublic.org.ng",
    '2023',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Zenith Plus Business Solutions",
    "https://zenithplusbs.com",
    '2023',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Laideluxe Signatures",
    "https://laideluxe.com",
    '2023',    
    ["Wordpress", "Woo-Commerce", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "RPR Reparation Arts",
    "https://reparationarts.com",
    '2022',    
    ["Wordpress", "Woo-Commerce", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Yinka Samuels",
    "https://yinkasamuels.com",
    '2022',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Funmilayo Fashina Foundation",
    "https://fffoundation.org.ng",
    '2021',
    ["Wordpress", "HTML", "CSS", "DIVI",]
  ),
  new Archive(
    "Giving Light Foundation",
    "https://givinglightfoundation.com.ng",
    '2021',    
    ["Wordpress", "DIVI", "HTML", "CSS"]
  ),
  new Archive(
    "Rugged Brand",
    "",
    '2020',    
    ["Wordpress", "Woo-Commerce", "DIVI", "HTML", "CSS"]
  ),
  
];

export { Archive, archives };
