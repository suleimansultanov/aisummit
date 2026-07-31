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
  member: (n) => `${OLD_SITE}/img/team-member/member-${n}.jpg`,
  imiLogo: `${OLD_SITE}/imi_logo.png`,
  // Save the Sofia University crest here and the sponsor tile picks it up
  // automatically. Until then it renders as a styled wordmark.
  suLogo: `${process.env.PUBLIC_URL || ""}/img/logos/sofia-university.png`,
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
  { name: "VirTech", full: "Virtech", url: "https://virtech.bg/", logo: null },
];

export const SPONSORS = [
  {
    name: "Sofia University",
    full: 'Sofia University "St. Kliment Ohridski" — Faculty of Mathematics and Informatics',
    url: "https://www.fmi.uni-sofia.bg/en",
    logo: ASSETS.suLogo,
  },
  {
    name: "TU-Sofia",
    full: "National Center of Excellence of Mechatronics and Clean Technologies",
    url: "https://tu-sofia.bg/",
    logo: null,
  },
  { name: "VirTech", full: "Virtech", url: "https://virtech.bg/", logo: null },
];

// ---------------------------------------------------------------------------
// Featured lectures.
//
// ⚠️  TITLES AND ABSTRACTS BELOW ARE DRAFTS written from Prof. Stefanov's
// published research areas (UNITe Centre of Excellence — Big Data, AI and HPC;
// technology-enhanced learning). They are NOT confirmed talks. Replace with the
// real titles/abstracts once he supplies them.
// ---------------------------------------------------------------------------
export const LECTURES = [
  {
    no: "01",
    speaker: "Prof. Krasen Stefanov, PhD",
    time: "09:00",
    length: "~ 90 min",
    accent: "amber",
    title:
      "Big Data, AI and High-Performance Computing for the Intelligent Enterprise",
    focus:
      "Lecture 1 looks at how national-scale research infrastructure translates into practical AI capability for business.",
    body:
      "Bulgaria now hosts serious compute and data infrastructure through the UNITe Centre of Excellence and the wider European HPC landscape. This session explains what that infrastructure actually makes possible for an enterprise: where large-scale data processing and model training genuinely change what a company can attempt, and where they do not. We will look at how organisations gain access to these resources, how academic and industrial partnerships are structured in practice, and what a realistic first project looks like for a company beginning to build AI capability on top of shared national infrastructure.",
  },
  {
    no: "02",
    speaker: "Prof. Krasen Stefanov, PhD",
    time: "14:00",
    length: "~ 90 min",
    accent: "indigo",
    title: "From Models to Competence: AI, Learning and the Adaptive Organisation",
    focus:
      "Lecture 2 focuses on competency-based approaches and technology-enhanced learning as AI reshapes the workforce.",
    body:
      "Adopting AI is far less a tooling problem than an organisational learning problem. Drawing on two decades of research in technology-enhanced learning and competency-based education, this session examines how enterprises can map the competences they actually need, use AI systems to close the gaps, and build the internal feedback loops that keep pace with the technology. We will cover competence modelling, the role of intelligent tutoring and recommendation systems inside organisations, and what European research projects have learned about making these approaches work at scale.",
  },
];

// ---------------------------------------------------------------------------
// Speakers — 4 featured + the full 2025 line-up
// ---------------------------------------------------------------------------
export const FEATURED_SPEAKERS = [
  {
    name: "Prof. Krasen Stefanov, PhD",
    role: 'Head of Department of Information Technologies · Sofia University "St. Kliment Ohridski"',
    tag: "Featured Keynote",
    accent: "violet",
    // No official portrait available yet — the Avatar component falls back to
    // gradient initials until one is supplied.
    image: null,
    linkedin: "https://www.fmi.uni-sofia.bg/en/faculty/krasen-stefanov-stefanov",
    bio:
      'Krasen Stefanov is Professor and Head of the Department of Information Technologies at the Faculty of Mathematics and Informatics, Sofia University "St. Kliment Ohridski", where he also heads the Information Services Laboratory. He is the coordinator and director of UNITe — the Centre of Excellence for Big Data, Artificial Intelligence and High-Performance Computing, whose new research complex opened at the Lozenets Campus in December 2023. His research spans big data, artificial intelligence, high-performance computing, the Internet of Things, competency-based education and technology-enhanced learning, and he has led and contributed to a long series of European and national research projects across e-learning systems, knowledge management and digital libraries.',
  },
  {
    name: "Alexander I. Iliev, PhD",
    role: "Academic Head of Big Data & AI, SRH Berlin · Lead Lecturer, UC Berkeley",
    tag: "Official Opening",
    accent: "amber",
    image: ASSETS.member(2),
    linkedin: "https://www.linkedin.com/in/ailiev/",
    bio:
      "Alex is an eminent scholar in the fields of AI/ML, Smart Systems, Signal Processing, and Emotion Recognition. He is affiliated with the Institute of Mathematics and Informatics (Bulgarian Academy of Sciences), the Center of Excellence in Informatics and ICT, SRH Berlin University as Academic Head of Big Data and AI, University of California Berkeley as a Lead Lecturer, University of Miami, and University of Wisconsin Stevens Point. He is a Co-Founder of Innovatia Valley, a Digital Innovation Hub, and was previously Product Manager for Gracenote and a consultant for Labcyte and Stealth Media Labs. Dr. Iliev has been involved in Horizon Europe HealthyW8, H2020 BOWI, ACTIVAGE, Cross4Health, EIT Climate KIC TRANSFORM and WE-TRANSFORM.",
  },
  {
    name: "Roumen Nikolov, PhD",
    role: "CEO of Virtech · Former UNESCO Chairholder",
    tag: "Panel Moderator",
    accent: "teal",
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
    title:
      "Big Data, AI and High-Performance Computing for the Intelligent Enterprise",
    speakers: "Krasen Stefanov",
  },
  { time: "10:30", kind: "admin", title: "Q&A", speakers: "" },
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
    title: "From Models to Competence: AI, Learning and the Adaptive Organisation",
    speakers: "Krasen Stefanov",
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

// Headline numbers for the stats strip — derived, so they can never drift out
// of sync when speakers or agenda rows are added/removed.
export const STATS = [
  { value: String(ALL_SPEAKERS.length), label: "Speakers" },
  {
    value: `${AGENDA.filter((a) => ["talk", "keynote", "panel"].includes(a.kind)).length}`,
    label: "Sessions",
  },
  { value: String(LECTURES.length), label: "Featured keynotes" },
  { value: "1", label: "Day in Sofia" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Speakers", to: "/speakers" },
  { label: "Agenda", to: "/agenda" },
  { label: "Registration", to: "/registration" },
];
