// Set `image` to a path in /public/assets (e.g. "/assets/aura-sql.png").
// When image is null, a styled placeholder with the project monogram renders instead.
export const projects = [
  {
    title: "AURA SQL — Relational Database Engine",
    description:
      "A relational database engine built from scratch in a three-person team. I own the storage layer and an MVCC transaction system for safe concurrent reads and writes, with clean interfaces to the SQL parser, planner, and B-tree execution engine.",
    tech: ["Go", "SQL", "MVCC", "B-trees"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "crimson",
  },
  {
    title: "AURA-KG — Personal Knowledge Graph Assistant",
    description:
      "A personal knowledge management system that combines a graph database with LLM-driven RAG search across notes, emails, and documents, so scattered information becomes one queryable knowledge graph.",
    tech: ["Python", "Graph DB", "RAG", "LLM APIs"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "gold",
  },
  {
    title: "AI Government Grant Form Assistant",
    description:
      "An end-to-end team-built tool that auto-fills government grant application forms from user inputs. LLM APIs interpret form fields and generate accurate, context-aware responses grounded in the user's data, cutting manual paperwork.",
    tech: ["Python", "LLM APIs", "React", "Supabase"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "crimson",
  },
  {
    title: "LLM Chatbot with RAG",
    description:
      "A multi-turn chatbot with custom system prompts and conversational memory on the OpenAI and Claude APIs. A Retrieval-Augmented Generation pipeline grounds answers in custom knowledge sources, benchmarked against local models via Ollama.",
    tech: ["Python", "Claude API", "OpenAI API", "Ollama"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "gold",
  },
  {
    title: "AI Traffic Violation Detection",
    description:
      "A computer-vision tool that analyses road imagery to detect and classify rule-breaking, automating what would otherwise be slow manual review. Currently in progress as a solo project.",
    tech: ["Python", "Computer Vision", "OpenCV"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "crimson",
  },
  {
    title: "Smart Animal Monitoring System",
    description:
      "An AI image-recognition model that detects and classifies wildlife from camera images — the software core of a farmland crop-protection concept designed to drive real-time alerts to farmers.",
    tech: ["Python", "Image Recognition", "AI"],
    github: "https://github.com/Aniketh-Alladi",
    demo: null,
    image: null,
    accent: "gold",
  },
];
