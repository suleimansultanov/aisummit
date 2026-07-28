// ---------------------------------------------------------------------------
// Intelligent EnterprAIse Summit — single source of truth for all page content.
// All names, bios, agenda rows and photos below are the REAL 2025 edition data
// pulled from https://pros.innobiz1.com. Edit here, every page updates.
// ---------------------------------------------------------------------------

// Assets are currently hot-linked from last year's live site so the client can
// see the real thing immediately. Before go-live, download them into
// /public/img and change OLD_SITE to "" + local paths.
const OLD_SITE = "https://pros.innobiz1.com";

export const ASSETS = {
  logo: `${OLD_SITE}/img/logo.png`,
  logoFooter: `${OLD_SITE}/img/footer-logo.png`,
  heroSpeaker: `${OLD_SITE}/img/hero-right.png`,
  michaelWu: `${OLD_SITE}/img/speakers/speaker-1.jpg`,
  member: (n) => `${OLD_SITE}/img/team-member/member-${n}.jpg`,
  imiLogo: `${OLD_SITE}/imi_logo.png`,
};

export const EVENT = {
  name: "Intelligent EnterprAIse Summit",
  shortName: "IES",
  headline: "LLMs, Agents & the Road to AGI",
  subheadline:
    "Mastering LLMs in practice and navigating the Agentic Era for competitive advantage",
  date: "01 October 2025",
  dateShort: "01.10",
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
    "Learn the latest strategies, best practices",
  ],
  venue: {
    name: "National Center of Excellence of Mechatronic and Clean Technologies",
    address: "Sofia State, Bulgaria",
    phone: "(+359) 889 119 100",
    email: "secretariat@innobiz1.com",
    website: "https://pros.innobiz1.com/",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.4069484609804!2d23.351475974870244!3d42.65273097116721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426b64b49a3%3A0x38e4f8d88bf0ebb8!2z0KLQtdGF0L3QuNGH0LXRgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAtINCdLiA4INCx0LvQvtC6!5e0!3m2!1sbg!2sbg!4v1757451495753!5m2!1sbg!2sbg",
  },
};

// Headline numbers for the stats strip
export const STATS = [
  { value: "29", label: "Speakers" },
  { value: "20+", label: "Sessions" },
  { value: "2", label: "Silicon Valley keynotes" },
  { value: "1", label: "Day in Sofia" },
];

// Topic strip that scrolls across the page — pure energy, zero content risk.
export const TOPICS = [
  "Large Language Models",
  "Agentic AI",
  "The Road to AGI",
  "AI in Healthcare",
  "Supercomputing & HPC",
  "Digital Twins",
  "EU AI Act Compliance",
  "Epigenetics & Healthspan",
  "Smart Cities",
  "Investments in AI",
  "Horizon Europe",
  "Enterprise GenAI",
];

// ---------------------------------------------------------------------------
// Organizers & sponsors.
// `logo` is optional: if the image is null or fails to load, the LogoTile
// component renders a branded wordmark instead, so nothing looks broken.
// Drop real logo files into /public/img/logos and point `logo` at them.
// ---------------------------------------------------------------------------
export const ORGANIZERS = [
  {
    name: "IMI · BAS",
    full: "Institute of Mathematics and Informatics, Bulgarian Academy of Sciences",
    url: "https://www.bas.bg/",
    logo: ASSETS.imiLogo,
  },
  { name: "PROS", full: "PROS Holdings (NYSE: PRO)", url: "https://pros.com/", logo: null },
  { name: "VirTech", full: "Virtech", url: "https://virtech.bg/", logo: null },
];

export const SPONSORS = [
  {
    name: "TU-Sofia",
    full: "National Center of Excellence of Mechatronics and Clean Technologies",
    url: "https://tu-sofia.bg/",
    logo: null,
  },
  {
    name: "iNNOBIZ1",
    full: "iNNOBIZ1 Swiss-Global Ecosystem",
    url: "https://innobiz1.com/",
    logo: null,
  },
  { name: "VirTech", full: "Virtech", url: "https://virtech.bg/", logo: null },
];

// ---------------------------------------------------------------------------
// Guest lectures from the Silicon Valley AI expert
// ---------------------------------------------------------------------------
export const LECTURES = [
  {
    no: "01",
    speaker: "Dr. Michael Wu",
    time: "09:00",
    length: "~ 90 min",
    accent: "orange",
    title: "Mastering LLMs Within the Enterprise: From Theory to Practice",
    focus:
      "Lecture 1 focuses on our current understanding of how LLMs work and its application within a business enterprise.",
    body:
      "AI tools, such as LLMs, are quickly becoming a standard within a company's tech stack. Yet, many are still experimenting with their use cases as best practices that stand the test of time need time to develop. Therefore, innovative leaders must grasp the inner workings of these AI tools to outpace competitors and seize the enormous first-mover advantages. This session will provide you with a deep understanding of LLM, how it works, and how to use it safely and productively inside an enterprise. Moreover, we will examine several categories of internal GenAI use cases, ranging from creative marketing use cases to technical engineering and IT applications.",
  },
  {
    no: "02",
    speaker: "Dr. Michael Wu",
    time: "14:00",
    length: "~ 90 min",
    accent: "violet",
    title:
      "The Agentic Era: The Bridge from Dumb LLMs to Artificial Super-Intelligence",
    focus:
      "Lecture 2 focuses on the path from LLM to Agents, and how we achieve AGI/ASI and their greater societal impacts.",
    body:
      "Today's LLMs are smart enough to tell you how to perform virtually any imaginable task, yet they can't execute them. This session will show you the ingredients and how to transform dumb LLMs into smart agents capable of autonomously achieving your goals. Although intelligent agents capable of deep reasoning are crucial for problem-solving, they are only the first step towards artificial general intelligence (AGI). We'll explore the blueprint to AGI and examine a new scaling law that drives exponential knowledge generation. Finally, we will get a glimpse of how we'll reach artificial super-intelligence (ASI) post AGI.",
  },
];

// ---------------------------------------------------------------------------
// Speakers — 4 featured + the full 2025 line-up
// ---------------------------------------------------------------------------
export const FEATURED_SPEAKERS = [
  {
    name: "Dr. Michael Wu",
    role: "Chief AI Strategist, PROS (NYSE: PRO)",
    tag: "Silicon Valley Keynote",
    accent: "pink",
    image: ASSETS.michaelWu,
    linkedin: "https://www.linkedin.com/in/michaelwuphd/",
    bio:
      "Dr. Michael Wu is currently the Chief AI Strategist at PROS (NYSE: PRO), an AI-powered SaaS provider that helps companies monetize more efficiently in the digital economy. He's been appointed as a Senior Research Fellow at the Ecole des Ponts Business School for his work in Data Science, and he serves as an advisor and a lecturer for UC Berkeley Extension's AI programs. Prior to PROS, Michael was the Chief Scientist at Lithium for a decade, developing predictive and prescriptive algorithms to extract insights from social media big data. His R&D won him recognition as an Influential Leader by CRM Magazine alongside Mark Zuckerberg and Marc Benioff. Michael served as a DOE fellow at Los Alamos National Lab, holds a triple major in Applied Math, Physics and Molecular & Cell Biology, and a Ph.D. from UC Berkeley's Biophysics program.",
  },
  {
    name: "Alexander I. Iliev, PhD",
    role: "Academic Head of Big Data & AI, SRH Berlin · Lead Lecturer, UC Berkeley",
    tag: "Official Opening",
    accent: "orange",
    image: ASSETS.member(2),
    linkedin: "https://www.linkedin.com/in/ailiev/",
    bio:
      "Alex is an eminent scholar in the fields of AI/ML, Smart Systems, Signal Processing, and Emotion Recognition. He is affiliated with the Institute of Mathematics and Informatics (Bulgarian Academy of Sciences), the Center of Excellence in Informatics and ICT, SRH Berlin University as Academic Head of Big Data and AI, University of California Berkeley as a Lead Lecturer, University of Miami, and University of Wisconsin Stevens Point. He is a Co-Founder of Innovatia Valley, a Digital Innovation Hub, and was previously Product Manager for Gracenote and a consultant for Labcyte and Stealth Media Labs. Dr. Iliev has been involved in Horizon Europe HealthyW8, H2020 BOWI, ACTIVAGE, Cross4Health, EIT Climate KIC TRANSFORM and WE-TRANSFORM.",
  },
  {
    name: "Prof. Dr. Eng. Georgi Todorov",
    role: "Dean, Faculty of Industrial Technology · TU-Sofia",
    tag: "Host Institution",
    accent: "violet",
    image: ASSETS.member(9),
    linkedin: "https://www.researchgate.net/profile/Georgi-Todorov-2",
    bio:
      "Georgi is a prominent Bulgarian engineer and academic leader. He holds master's degrees in Mechanical Engineering and Applied Mathematics from the Technical University of Sofia, where he is now Professor and Doctor of Science. Over his career he served as Deputy Dean (2008–2010), Dean of the Faculty of Mechanical Engineering and Technology (2010–2019), Deputy Dean for Research & International Integration (2019–2022) and, since 2022, Dean of the Faculty of Industrial Technology. He also heads a Centre of Excellence at TU-Sofia, is a Member of the Managing Board of the Bulgarian Industrial Association and Chairman of the General Assembly of TU-Sofia. He holds 7 international patents plus 19 registered in Bulgaria.",
  },
  {
    name: "Roumen Nikolov, PhD",
    role: "CEO of Virtech · Former UNESCO Chairholder",
    tag: "Panel Moderator",
    accent: "cyan",
    image: ASSETS.member(19),
    linkedin: "https://www.linkedin.com/in/roumen-nikolov-382942/",
    bio:
      "Roumen is CEO of Virtech and Co-CEO of Innova Living, a professor and former UNESCO Chairholder. His expertise spans the Internet of Things, Smart City applications, AI, Big Data and the use of Living Labs methodologies and tools for creating innovative products and services. He has trained in the USA, UK and the Netherlands, among other countries. Roumen is a member of the Management Board of ACTIVAGE.ORG and part of AIOTI, where he serves as Co-Chair of the Health Working Group. He has contributed to over 100 EU Framework Programme projects, including ENACT, HealthyW8, WE-TRANSFORM, AI4EU and ACTIVAGE, and is author or co-author of more than 100 publications.",
  },
];

export const SPEAKERS = [
  {
    name: "Alexandre Chikalanov, PhD",
    role: "CTO, Virtech",
    image: ASSETS.member(1),
    linkedin: "https://www.linkedin.com/in/alexandre-chikalanov-94b836204/",
    bio:
      "Alex is CTO of Virtech with 30+ years of experience in the software industry. He has led many industrial projects developing large enterprise systems operating with databases containing over 100 million records, several mobile technology systems, and a system for audiovisual digital rights protection, with expertise in platforms for data acquisition from remote sensing devices and interactive TV. He has been involved in European RTD projects including ENACT, HealthyW8, WE-TRANSFORM, AI4EU and ACTIVAGE.",
  },
  {
    name: "Andrey Bachvarov, PhD",
    role: "Co-Founder & General Counsel, EPIX.AI",
    image: ASSETS.member(3),
    linkedin: "https://www.linkedin.com/in/andreybachvarov/",
    bio:
      "Andrey is Co-Founder and General Counsel of EPIX.AI, a startup at the intersection of AI, epigenetics, and healthspan extension. He holds a PhD in Informatics from Sofia University “St. Kliment Ohridski.” Over 14 years he has been a serial entrepreneur in energy and IT, managing over €100 million in renewable-energy projects. He founded or invested in ventures such as Power Drone, served as Director of Digital Transformation at the Digital National Coalition, and was co-founder of Anthill.one, acquired by Exadel in 2025.",
  },
  {
    name: "Boris Dichev",
    role: "Social Innovation Lead · HealthyW8 & ENACT",
    image: ASSETS.member(4),
    linkedin: "https://www.linkedin.com/in/boris-dichev-bb8248b/",
    bio:
      "Boris is a seasoned expert in applied mathematics and modeling with wide international experience. He has served as CEO of ALIENO Hypercar and KIBERTRON. Today he coordinates the Public Council of the association “Convalescent Plasma for Treatment of COVID-19” and leads Social Innovation in the Horizon Europe projects HealthyW8 and ENACT, as well as co-leading Innova Living. He is a leader in iNNObizACADEMIA.org, developing the “Live Social Cell” methodology to integrate academia, business, and community.",
  },
  {
    name: "Boyan Jekov, PhD",
    role: "National Coordinator for Horizon Europe · ULSIT",
    image: ASSETS.member(5),
    linkedin: "https://www.linkedin.com/in/jekov/",
    bio:
      "Boyan is an Associate Professor and leading Bulgarian academic and innovation policy expert at the University of Library Studies and Information Technologies (ULSIT) in Sofia. He is also the National Coordinator for Horizon Europe in Bulgaria, bridging research, education, and public administration to maximise national participation in EU research funding. He specialises in information system management, digital transformation, IoT, AI and public policy, and has published over 30 works.",
  },
  {
    name: "Bozhidar Vidinov",
    role: "Head of Strategic Development, The Revenues Factory",
    image: ASSETS.member(24),
    linkedin: "",
    bio:
      "Bozhidar is Head of Strategic Development at The Revenues Factory, focusing on growth strategy, market positioning, partnership development, and scaling AI-powered sales solutions. Previously he was Senior Wealth Advisor and Chief Expert in Strategic Analysis and Development in the public sector. He helps Series A & B startups accelerate go-to-market efforts and is part of the core team behind StartUp Bulgaria's flagship Crossroads conference.",
  },
  {
    name: "Dr. Chavdar Botev",
    role: "Hematologist & Public Health Advocate",
    image: ASSETS.member(6),
    linkedin: "",
    bio:
      "Chavdar is a Bulgarian hematologist and public health advocate, known for his expertise in immune response, vaccine science, and post-COVID recovery issues. He has spoken on the necessity of mucosal vaccines that stimulate IgA antibodies and T lymphocytes to better counter evolving strains of COVID-19. Dr. Botev contributes to health policy discussions and media outreach, bridging scientific insights and public understanding.",
  },
  {
    name: "Denislav Mladenov",
    role: "DevOps Engineer, Discoverer Petascale Supercomputer",
    image: ASSETS.member(25),
    linkedin: "",
    bio:
      "Denislav is a DevOps Engineer at the Discoverer Petascale Supercomputer in Sofia, having joined the team in December 2021. He oversees the health, performance, configuration, and monitoring of Discoverer's large-scale computing infrastructure. He earned a diploma in Systems Programming from the National High School of Computer Technologies & Systems in Pravets and a bachelor's degree in Computer Systems and Networks from New Bulgarian University.",
  },
  {
    name: "Desislava Petrova-Antonova, PhD",
    role: "Research Leader, Data Management Unit · GATE Institute",
    image: ASSETS.member(7),
    linkedin: "https://www.linkedin.com/in/dessislava-petrova-antonova/",
    bio:
      "Dessislava is professor and research leader of the Data Management Research Unit at the GATE Institute, Sofia University “St. Kliment Ohridski”. She holds an engineering degree in Computer Systems & Technologies and a PhD in System Programming from TU-Sofia. Her current research focuses on semantic data enrichment and interoperability, and she leads the City Digital Twin pilot project, developing an advanced 3D city information model of Sofia. She has co-authored over 70 peer-reviewed works and participates in more than 30 national and European R&D projects.",
  },
  {
    name: "Eng. Rosalia Leykauf",
    role: "Founder & Developer, iNNOBIZ1 Ecosystem",
    image: ASSETS.member(18),
    linkedin: "https://www.linkedin.com/in/rosalia-leykauf-86369018/",
    bio:
      "Rosalia is the Founder and Developer of the iNNOBIZ1 Ecosystem and Partner Support Network and a Permanent Member of the Secretariat of the iNNOBIZ1 Economic & Social Impact Investment Forum. With an MSc in Innovation and Digital Transformation of Agribusiness and a strong engineering background, she builds sustainable, future-oriented solutions. Under her leadership the ecosystem is expanding with its flagship solution, the iNNOHub-in-Cube.",
  },
  {
    name: "Georgi Kirov",
    role: "CEO & Managing Partner, Crisp Labs",
    image: ASSETS.member(8),
    linkedin: "https://www.linkedin.com/in/georgikirov/",
    bio:
      "Georgi is CEO & Managing Partner at Crisp Labs, an Applied AI advisory specializing in advanced analytics and custom AI solutions. He has 13 years of experience in advanced analytics research, including leading a pioneering medical-imaging computer-vision prototype for Siemens. He has worked across quantitative finance, manufacturing, and business process optimization, combining expertise in reinforcement learning, algorithmic modeling and AI strategy.",
  },
  {
    name: "Hristo Djidjev, PhD",
    role: "Quantum Computing & AI/ML Scholar · IICT-BAS",
    image: ASSETS.member(10),
    linkedin: "https://www.linkedin.com/in/hristo-djidjev-20b16b71/",
    bio:
      "Hristo is an eminent scholar in Quantum Computing and AI/ML — quantum annealing, problem embedding, combinatorial and graph algorithms, unsupervised learning, tensor networks, and bioinformatics. He is affiliated with the Institute of Information and Communication Technologies, Bulgarian Academy of Sciences. He was a lead researcher with the Information Sciences Group at Los Alamos National Laboratory, and previously Assistant Professor at Rice University and Senior Lecturer at the University of Warwick.",
  },
  {
    name: "Ilian Georgiev",
    role: "Partner, Crisp Labs",
    image: ASSETS.member(11),
    linkedin: "https://www.linkedin.com/in/iliangeorgiev/",
    bio:
      "Ilian is Partner at Crisp Labs, bringing over 15 years of experience leading AI-powered products from zero to nine-figure scale across gaming, fintech, real estate, and venture capital. He combines strong technical understanding with business acumen, having driven product roadmaps, growth strategy, and market expansion in high-velocity environments. At Crisp Labs he helps deliver scalable AI & data science solutions for clients.",
  },
  {
    name: "Prof. Ivo Petrov, MD, PhD",
    role: "Medical Director, Acibadem City Clinic Cardiovascular Center",
    image: ASSETS.member(26),
    linkedin: "",
    bio:
      "Professor Ivo Petrov, MD, PhD, FACC, FESC, is Medical Director and Head of the Cardiology & Angiology Department at Acibadem City Clinic Cardiovascular Center in Sofia. A graduate of Sofia Medical University, he earned specialties in Internal Medicine, Cardiology and Angiology, and completed a fellowship in invasive cardiology and radiology at the Favaloro Foundation, Buenos Aires. He is recognised for pioneering endovascular therapies in Bulgaria.",
  },
  {
    name: "Dr. Kamen Stoychev",
    role: "Co-owner & Manager, Membrain Technologies",
    image: ASSETS.member(27),
    linkedin: "",
    bio:
      "Kamen graduated from Sofia Medical University in 1997 and completed USMLE-board-level courses at UC Davis. He founded a pharmaceutical and natural health products research company, served as medical director of DKC “Dr. J.S. Greenberg,” and acted as consultant for the World Bank on labour-adjustment strategy for Bulgaria. Since 2014 he has been co-owner and manager of Membrain Technologies, with extensive experience in clinical trials and entrepreneurial healthcare innovation.",
  },
  {
    name: "Kiril Kirilov",
    role: "COO, PetaScale Supercomputer Bulgaria (Discoverer)",
    image: ASSETS.member(12),
    linkedin: "https://www.linkedin.com/in/kiril-kirilov-8226b715/",
    bio:
      "Kiril is COO of the “PetaScale Supercomputer – Bulgaria” consortium, guiding the operation and development of the Discoverer supercomputer at Sofia Tech Park — a EuroHPC joint-initiative petascale infrastructure supporting advanced scientific, industrial, and business workloads. He also plays a key role in the AI Factory BRAIN++ project, set to establish Bulgaria as a regional hub for trustworthy, large-scale AI.",
  },
  {
    name: "Lyubomir Gotsev, PhD",
    role: "Chief Assistant Professor, Computer Science · ULSIT",
    image: ASSETS.member(13),
    linkedin: "https://www.linkedin.com/in/lyubomir-gotsev-b9aa0360",
    bio:
      "Lyubomir is Chief Assistant Professor in the Department of Computer Science at ULSIT, Sofia. His research spans applied artificial intelligence, deep learning, big data analytics and knowledge discovery, with work in IoT security, GANs/LLMs, requirements engineering and data mining. He has published 15–20 peer-reviewed papers, including on quantum computing applications to climate & pollution, ransomware detection, and COVID-19 CT analysis.",
  },
  {
    name: "Mariyan Familiyanov",
    role: "Development Manager, Global Analytics · Louis Dreyfus Company",
    image: ASSETS.member(14),
    linkedin: "https://www.linkedin.com/in/mariyan-familiyanov/",
    bio:
      "Mariyan leads analytics development for global operations at Louis Dreyfus Company. He also lectures part-time in SQL & Power BI at Skillo IT Academy. He is pursuing a PhD in Computer and Information Sciences at ULSIT, building on his Master's in Data Science. Previously he was a BW/BI Consultant at KPMG and an SAP/Hybris consultant and business analyst at firms such as Atos.",
  },
  {
    name: "Martin Klosi",
    role: "Data & AI Engineer, EPIX.AI",
    image: ASSETS.member(23),
    linkedin: "",
    bio:
      "Martin is a Data and AI Engineer whose path into biotech began building large-scale data systems for e-commerce. Inspired by a passion for longevity and the “code of life,” he transitioned into genomics at 23andMe and epigenetics at Grail. Today, Martin applies that journey at EPIX.AI, developing AI-driven epigenetic clocks for polygenic risk score pipelines to advance human healthspan.",
  },
  {
    name: "Miglena Dimitrova",
    role: "Founder & CEO, LawMindedAI",
    image: ASSETS.member(15),
    linkedin: "https://www.linkedin.com/in/miglena-dimitrova/",
    bio:
      "Miglena is the Founder & CEO of LawMindedAI, a deep-tech venture dedicated to bridging law and technology for trustworthy, compliant AI. A corporate, IP & regulatory lawyer and mediator since 2005, she holds a law degree from the University of National and World Economy, Sofia, and an LL.M. in European Law from the University of Hamburg. Her current focus is EU AI regulation, RegTech and building audit-ready frameworks that help organizations embed trust, accountability and governance into innovation.",
  },
  {
    name: "Milena Georgieva, PhD",
    role: "Co-Founder & CSO, EPIX.AI · Professor, BAS",
    image: ASSETS.member(16),
    linkedin: "https://www.linkedin.com/in/milena-georgieva/",
    bio:
      "Milena is a Bulgarian molecular biologist, genetics and epigenetics expert, and Co-Founder & Chief Scientific Officer at EPIX.AI. She is a full Professor at the Bulgarian Academy of Sciences, where she heads research in molecular biology, aging, and epigenetic regulation. At EPIX.AI she leads R&D efforts to understand the molecular drivers of aging and design interventions to slow age-related decline. She has co-authored 100+ peer-reviewed publications.",
  },
  {
    name: "Nikolay Vasev, PhD",
    role: "Chief Operating Officer, EPIX.AI",
    image: ASSETS.member(22),
    linkedin: "https://www.linkedin.com/in/nikolay-v-3a12a67b/",
    bio:
      "Nikolay has long experience with European healthcare. His PhD from the University of Copenhagen focused on Court of Justice of the European Union adjudication in patients' rights cases. He worked at DG SANTE at the European Commission on health-related dossiers and published a report on Antimicrobial Resistance in Europe. Since February 2023 he has been Chief Operating Officer at EPIX.AI, getting the company ready for its market launch.",
  },
  {
    name: "Dr. Pavlina Mihaylova",
    role: "Chairwoman & Co-Founder, Convalescent Plasma Association",
    image: ASSETS.member(17),
    linkedin: "",
    bio:
      "Pavlina is the chairwoman and co-founder of the association “Convalescent Plasma for Treatment of COVID-19”, registered for public benefit in 2020. She has been at the forefront of advocating for and organizing national campaigns to promote convalescent plasma treatment. She is co-author of the Protocol for the domestic treatment of COVID-19 and the Approach to diagnosis and treatment of long COVID. She is also a journalist, author of four books, and a documentary scriptwriter.",
  },
  {
    name: "Sergey Vichev, PhD",
    role: "Co-Founder & Chief Scientific Officer, Crisp Labs",
    image: ASSETS.member(20),
    linkedin: "https://www.linkedin.com/in/sergeyvichev/",
    bio:
      "Sergey is co-founder and Chief Scientific Officer at Crisp Labs, leading advanced AI research and development with a focus on transformative and scalable solutions. He has implemented 15+ ML projects for business enterprises and public sector clients. His research includes contributions in large language models, text-to-SQL systems, Retrieval-Augmented Generation (RAG), and LLM agentic behaviour. He is a final-year PhD candidate at Sofia University.",
  },
  {
    name: "Sylvia Ilieva, PhD",
    role: "Director, GATE Institute · Professor, Sofia University",
    image: ASSETS.member(21),
    linkedin: "https://www.linkedin.com/in/sylvia-ilieva/",
    bio:
      "Sylvia is a professor and academic leader. She earned her M.Sc. in Electronics and a Ph.D. in Informatics from TU-Sofia, and has been Professor in the Faculty of Mathematics and Informatics at Sofia University since 2012. In 2019 she became Director of the GATE Institute and head of the European project GATE. Her research covers software platforms, software engineering for AI, and data management. She has led over 30 European research projects and supervised more than 200 master's theses.",
  },
  {
    name: "Dr. Teodor Atanasov",
    role: "Nephrologist · UMBBAL Plovdiv",
    image: ASSETS.member(28),
    linkedin: "",
    bio:
      "Teodor is a nephrologist based in Plovdiv with over 31 years of medical experience. He graduated from the Medical University of Plovdiv in 1994, specializing in Toxicology, Internal Medicine and Nephrology, and earned a Master's degree in Medical Management in 2023. In 2023 he served as a representative to the UN and WHO via the Ukraine – Support & Renewal Foundation, and is the official representative of Biruni University Hospital in Istanbul.",
  },
];

export const ALL_SPEAKERS = [...FEATURED_SPEAKERS, ...SPEAKERS];

// ---------------------------------------------------------------------------
// Real event programme, 01 October 2025
// kind: keynote | talk | panel | break | admin
// ---------------------------------------------------------------------------
export const AGENDA = [
  { time: "08:30", kind: "admin", title: "Registration", speakers: "" },
  { time: "09:00", kind: "admin", title: "Official Opening", speakers: "Alexander Iliev" },
  {
    time: "09:00",
    kind: "keynote",
    title: "Mastering LLMs Within the Enterprise: From Theory to Practice",
    speakers: "Michael Wu",
  },
  { time: "10:30", kind: "admin", title: "Q&A", speakers: "" },
  {
    time: "10:45",
    kind: "talk",
    title:
      "AI-Powered Innovation in Mechatronics & Clean Technologies at CoE Mechatronics & Clean Technologies",
    speakers: "Georgi Todorov",
  },
  { time: "11:00", kind: "break", title: "Coffee Break", speakers: "" },
  {
    time: "11:15",
    kind: "talk",
    title:
      "Empowering AI Through HPC: Bulgaria's Discoverer Supercomputer and AI Factory under EuroHPC JU",
    speakers: "Kiril Kirilov",
  },
  {
    time: "11:30",
    kind: "talk",
    title:
      "GATE Institute (Sofia University): Pioneering AI for Smart Society, Policy, and Digital Twins",
    speakers: "Sylvia Ilieva, Desislava Petrova-Antonova",
  },
  {
    time: "11:45",
    kind: "talk",
    title:
      "EPIX.AI: Harnessing AI and Epigenetics to Decode and Extend Human Healthspan",
    speakers: "Milena Georgieva, Nikolay Vasev, Andrey Bachvarov, Martin Klosi",
  },
  {
    time: "12:00",
    kind: "talk",
    title:
      "Bridging Law and Tech: LawMindedAI's Platform for Automated AI Act Compliance",
    speakers: "Miglena Dimitrova, Alexander Iliev, Roumen Nikolov",
  },
  {
    time: "12:15",
    kind: "talk",
    title: "ThorAI: Science-Driven AI for Actionable Insights",
    speakers: "Hristo Djidjev",
  },
  {
    time: "12:30",
    kind: "talk",
    title: "Crisp Labs: Precision AI for Evaluation & Annotation",
    speakers: "Sergey Vichev, Georgi Kirov, Ilian Georgiev",
  },
  { time: "12:45", kind: "break", title: "Lunch Break", speakers: "" },
  {
    time: "13:15",
    kind: "talk",
    title:
      "Virtech: Advancing AI, Digital Health, and Smart City Innovation through EU Projects",
    speakers: "Alexander Iliev, Roumen Nikolov, Alexandre Chikalanov",
  },
  {
    time: "13:30",
    kind: "talk",
    title: "Shaping Tomorrow: AI-led Research and Innovation under Horizon Europe",
    speakers: "Boyan Jekov",
  },
  {
    time: "13:45",
    kind: "talk",
    title: "Sustainable AI for Sustainable Smart Cities",
    speakers: "Lyubomir Gotsev, Mariyan Familiyanov",
  },
  {
    time: "14:00",
    kind: "keynote",
    title:
      "The Agentic Era: The Bridge from Dumb LLMs to Artificial Super-Intelligence",
    speakers: "Michael Wu",
  },
  { time: "15:30", kind: "admin", title: "Q&A", speakers: "" },
  { time: "15:45", kind: "break", title: "Coffee Break", speakers: "" },
  {
    time: "16:00",
    kind: "panel",
    title: "PANEL: AI in Healthcare",
    speakers: "Moderator: Milena Georgieva",
  },
  {
    time: "17:00",
    kind: "panel",
    title: "PANEL: Investments in AI",
    speakers: "Moderator: Roumen Nikolov",
  },
  { time: "17:45", kind: "admin", title: "Closing Session", speakers: "" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Speakers", to: "/speakers" },
  { label: "Agenda", to: "/agenda" },
  { label: "Registration", to: "/registration" },
];
