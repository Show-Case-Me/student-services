export interface Preset {
  id: string;
  title: string;
  category: string;
  link: string;
  image: string;
  description: string;
}

export const PRESETS: Preset[] = [
  {
    id: "notion-style",
    title: "Notion Style Portfolio",
    category: "Minimalist Preset",
    link: "/presets/notion",
    image: "Notion_Preset_Thumbnail.png",
    description: "A clean, organized design inspired by Notion's aesthetic. Perfect for showcasing projects and experience with simplicity."
  },
  {
    id: "researcher-portfolio",
    title: "Researcher Portfolio",
    category: "Academic Preset",
    link: "/presets/researcher",
    image: "Researcher_Preset_Thumbnail.png",
    description: "A professional, comprehensive design tailored for medical students, researchers, and physicians. Highlights publications, awards, and clinical rotations."
  },
  {
    id: "finance-portfolio",
    title: "Finance & Analyst Portfolio",
    category: "Corporate Preset",
    link: "/presets/finance",
    image: "Finance_Preset_Thumbnail.png",
    description: "A sleek, data-driven design perfect for finance students, analysts, and auditors. Features dark-mode aesthetics, animated charts, and professional timelines."
  },
  // Add more presets here in the future
];
