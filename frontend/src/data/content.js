// All real content from the Intelligent EnterprAIse Summit. Editable in one place.

export const EVENT = {
  name: "Intelligent EnterprAIse Summit",
  shortName: "IES",
  date: "01 October 2025",
  dateISO: "2025-10-01T08:30:00",
  city: "Sofia, Bulgaria",
  tagline:
    "Where the city's timeless wisdom meets today's cutting-edge technology to shape the future of intelligent enterprises.",
  about:
    "Intelligent Enterprise Summit is the event for business leaders, innovators, and AI experts to come together to shape the future of the intelligent enterprise in Sofia. It is for anyone looking to understand and capitalize on the latest AI trends.",
  closing:
    "Don't just watch the AI revolution — be part of it, in Sofia, where the city's timeless wisdom meets today's cutting-edge technology to shape the future of intelligent enterprises.",
  opportunities: [
    "Advance your career and business opportunities",
    "Be inspired by visionary keynotes and success stories",
    "Connect with leaders, innovators, and peers",
    "Discover cutting-edge technologies and solutions",
    "Learn the latest strategies and best practices",
  ],
  venue: {
    name: "National Center of Excellence of Mechatronic and Clean Technologies",
    address: "Sofia State, Bulgaria",
    phone: "(+359) 889 119 100",
    email: "secretariat@innobiz1.com",
    website: "https://pros.innobiz1.com/",
    mapsEmbed:
      "https://www.google.com/maps?q=Technical+University+of+Sofia+Block+8&output=embed",
  },
};

export const ORGANIZERS = ["IMI · BAS", "PROS", "VirTech"];
export const SPONSORS = ["TU-Sofia", "iNNOBIZ1", "VirTech"];

// Guest lectures from Silicon Valley AI Expert
export const LECTURES = [
  {
    no: "01",
    speaker: "Dr. Michael Wu",
    length: "~ 90 min",
    title: "Mastering LLMs Within the Enterprise: From Theory to Practice",
    focus:
      "Lecture 1 focuses on our current understanding of how LLMs work and its application within a business enterprise.",
    body:
      "AI tools, such as LLMs, are quickly becoming a standard within a company's tech stack. Yet, many are still experimenting with their use cases as best practices that stand the test of time need time to develop. Therefore, innovative leaders must grasp the inner workings of these AI tools to outpace competitors and seize the enormous first-mover advantages. This session will provide you with a deep understanding of LLM, how it works, and how to use it safely and productively inside an enterprise. Moreover, we will examine several categories of internal GenAI use cases, ranging from creative marketing use cases to technical engineering and IT applications.",
  },
  {
    no: "02",
    speaker: "Dr. Michael Wu",
    length: "~ 90 min",
    title: "The Agentic Era: The Bridge from Dumb LLMs to Artificial Super-Intelligence",
    focus:
      "Lecture 2 focuses on the path from LLM to Agents, and how we achieve AGI/ASI and their greater societal impacts.",
    body:
      "Today's LLMs are smart enough to tell you how to perform virtually any imaginable task, yet they can't execute them. This session will show you the ingredients and how to transform LLMs into smart agents capable of autonomously achieving your goals. We'll explore the blueprint to AGI and examine a new scaling law that drives exponential knowledge generation. As we race towards AGI, we must also understand its business and societal implications. Finally, we will get a glimpse of how we'll reach artificial super-intelligence (ASI) post AGI — a fascinating journey from LLMs to ASI.",
  },
];

// Photos are editorial placeholders — replace with official speaker portraits.
export const SPEAKERS = [
  {
    name: "Dr. Michael Wu",
    role: "Silicon Valley AI Expert · Guest Lecturer",
    image:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    bio: "Michael is a globally recognized authority on artificial intelligence, large language models, and the path toward AGI. Drawing on years at the frontier of Silicon Valley, he translates the inner workings of generative AI into practical strategy for enterprise leaders — covering everything from safe internal GenAI adoption to the emerging agentic era and its profound business and societal implications.",
  },
  {
    name: "Alexander I. Iliev, PhD",
    role: "Scholar · AI/ML, Smart Systems, Signal Processing",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    bio: "Alex is an eminent scholar in AI/ML, Smart Systems, Signal Processing, and Emotion Recognition. He is affiliated with the Institute of Mathematics and Informatics (Bulgarian Academy of Sciences), SRH Berlin University as Academic Head of Big Data and AI, and UC Berkeley as a Lead Lecturer. A Co-Founder of Innovatia Valley, he has worked across Gracenote, Labcyte, and Stealth Media Labs, and contributed to Horizon Europe HealthyW8, H2020 ACTIVAGE, Cross4Health, and WE-TRANSFORM.",
  },
  {
    name: "Prof. Dr. Eng. Georgi Todorov",
    role: "Dean, Faculty of Industrial Technology · TU-Sofia",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    bio: "Georgi is a prominent Bulgarian engineer and academic leader holding master's degrees in Mechanical Engineering and Applied Mathematics from TU-Sofia, where he is Professor and Doctor of Science. He has served as Dean of the Faculty of Mechanical Engineering and Technology and now leads the Faculty of Industrial Technology and a Centre of Excellence at TU-Sofia. He holds 7 international patents plus 19 registered in Bulgaria and has lectured in Chile and China.",
  },
  {
    name: "Roumen Nikolov, PhD",
    role: "CEO of Virtech · Former UNESCO Chairholder",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    bio: "Roumen is CEO of Virtech and Co-CEO of Innova Living, a professor and former UNESCO Chairholder. His expertise spans the Internet of Things, Smart City applications, AI, Big Data, and Living Labs methodologies. A member of the Management Board of ACTIVAGE.ORG and Co-Chair of the AIOTI Health Working Group, he has contributed to over 100 EU Framework Programme projects including ENACT, HealthyW8, WE-TRANSFORM, AI4EU, and ACTIVAGE, and authored more than 100 publications.",
  },
];

// Program for 01 October 2025 (draft schedule — editable)
export const AGENDA = [
  { time: "08:30", title: "Registration & Welcome Coffee", note: "Doors open · networking" },
  { time: "09:15", title: "Opening Remarks", note: "Welcome to the Summit" },
  {
    time: "09:30",
    title: "Mastering LLMs Within the Enterprise: From Theory to Practice",
    note: "Keynote · Dr. Michael Wu · ~90 min",
  },
  { time: "11:00", title: "Networking Break", note: "Coffee & connections" },
  { time: "11:30", title: "Panel: Shaping the Intelligent Enterprise", note: "Leaders & innovators" },
  { time: "13:00", title: "Lunch & Networking", note: "" },
  {
    time: "14:00",
    title: "The Agentic Era: From LLMs to Artificial Super-Intelligence",
    note: "Keynote · Dr. Michael Wu · ~90 min",
  },
  { time: "15:30", title: "Coffee & Connect", note: "" },
  { time: "16:00", title: "Fireside Chat with the Speakers", note: "Open Q&A" },
  { time: "17:00", title: "Closing Remarks & Cocktail", note: "Until the next idea" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Speakers", to: "/speakers" },
  { label: "Agenda", to: "/agenda" },
];
