export interface BlogPost {
  id: string;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string; en: string };
  category: string;
  author: string;
  date: string;
  image: string;
}

export interface Event {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  content: { fr: string; en: string };
  date: string;
  endDate?: string;
  location: { fr: string; en: string };
  image: string;
  status: "upcoming" | "past";
  program?: { time: string; title: { fr: string; en: string } }[];
}

export interface Member {
  name: string;
  role: { fr: string; en: string };
  bio: { fr: string; en: string };
  image: string;
  category: "board" | "committee" | "volunteer";
}

export interface Partner {
  name: string;
  category: "institutional" | "media" | "sponsor";
  logo: string;
  url?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "bilan-salon-2026",
    title: { fr: "Bilan du Salon du Livre 2026 : une édition exceptionnelle", en: "2026 Book Fair Review: An exceptional edition" },
    excerpt: { fr: "Retour sur une édition qui a accueilli plus de 15 000 visiteurs et 120 auteurs venus de 8 pays.", en: "A look back at an edition that welcomed over 15,000 visitors and 120 authors from 8 countries." },
    content: { fr: "Le Salon du Livre de l'Enfant de Sfax 2026 a marqué un tournant dans l'histoire de notre association. Avec plus de 15 000 visiteurs sur cinq jours, cette édition a battu tous les records de participation. 120 auteurs et illustrateurs, venus de 8 pays différents, ont partagé leur passion avec les jeunes lecteurs sfaxiens.\n\nLes ateliers de lecture ont accueilli plus de 3 000 enfants, tandis que les rencontres avec les auteurs ont suscité un enthousiasme remarquable. Le programme culturel, riche et varié, comprenait des spectacles de conte, des expositions d'illustrations originales et des tables rondes sur l'avenir de la littérature jeunesse en Tunisie.\n\nNous remercions chaleureusement tous nos partenaires, bénévoles et visiteurs qui ont fait de cette édition un succès retentissant.", en: "The 2026 Sfax Children's Book Fair marked a turning point in our association's history. With over 15,000 visitors over five days, this edition broke all participation records. 120 authors and illustrators from 8 different countries shared their passion with young readers from Sfax.\n\nReading workshops welcomed over 3,000 children, while author meetings generated remarkable enthusiasm. The cultural program, rich and varied, included storytelling shows, exhibitions of original illustrations, and panel discussions on the future of children's literature in Tunisia.\n\nWe warmly thank all our partners, volunteers, and visitors who made this edition a resounding success." },
    category: "events",
    author: "Équipe rédactionnelle",
    date: "2026-03-20",
    image: "/placeholder.svg",
  },
  {
    id: "auteurs-internationaux",
    title: { fr: "Des auteurs internationaux à Sfax : rencontres et échanges", en: "International authors in Sfax: meetings and exchanges" },
    excerpt: { fr: "Cette année, nous avons eu l'honneur d'accueillir des auteurs de renommée internationale.", en: "This year, we had the honor of welcoming internationally renowned authors." },
    content: { fr: "Notre salon a eu le privilège d'accueillir des auteurs de renom venus du monde entier pour partager leur amour de la littérature jeunesse avec nos jeunes lecteurs. Parmi les moments forts, les ateliers d'écriture créative ont permis aux enfants de découvrir les secrets de la narration.\n\nLes auteurs ont été impressionnés par l'enthousiasme et la curiosité des enfants sfaxiens, soulignant l'importance de tels événements pour le développement culturel des jeunes générations.", en: "Our fair had the privilege of welcoming renowned authors from around the world to share their love of children's literature with our young readers. Among the highlights, creative writing workshops allowed children to discover the secrets of storytelling.\n\nThe authors were impressed by the enthusiasm and curiosity of Sfax's children, emphasizing the importance of such events for the cultural development of young generations." },
    category: "news",
    author: "Amira Ben Salah",
    date: "2026-03-15",
    image: "/placeholder.svg",
  },
  {
    id: "importance-lecture",
    title: { fr: "Pourquoi la lecture est essentielle pour les enfants", en: "Why reading is essential for children" },
    excerpt: { fr: "La lecture développe l'imagination, le vocabulaire et la pensée critique chez les enfants.", en: "Reading develops imagination, vocabulary, and critical thinking in children." },
    content: { fr: "La lecture est bien plus qu'une activité de loisir pour les enfants — c'est un pilier fondamental de leur développement. Des études montrent que les enfants qui lisent régulièrement développent un vocabulaire plus riche, une meilleure capacité de concentration et une pensée critique plus aiguisée.\n\nÀ l'Association du Salon du Livre de l'Enfant de Sfax, nous croyons fermement que chaque enfant mérite d'avoir accès à des livres de qualité et à des espaces de lecture stimulants. C'est pourquoi nous organisons tout au long de l'année des ateliers, des rencontres et des événements qui mettent le livre au cœur de l'apprentissage.", en: "Reading is much more than a leisure activity for children — it's a fundamental pillar of their development. Studies show that children who read regularly develop richer vocabulary, better concentration skills, and sharper critical thinking.\n\nAt the Association du Salon du Livre de l'Enfant de Sfax, we firmly believe that every child deserves access to quality books and stimulating reading spaces. That's why we organize workshops, meetings, and events throughout the year that put books at the heart of learning." },
    category: "reading",
    author: "Dr. Fatma Gharbi",
    date: "2026-02-28",
    image: "/placeholder.svg",
  },
  {
    id: "coulisses-salon",
    title: { fr: "Les coulisses de l'organisation du salon", en: "Behind the scenes of organizing the fair" },
    excerpt: { fr: "Découvrez le travail remarquable de notre équipe de bénévoles.", en: "Discover the remarkable work of our volunteer team." },
    content: { fr: "Organiser le Salon du Livre de l'Enfant de Sfax est un défi logistique et humain que notre équipe relève chaque année avec passion. Des mois avant l'ouverture, bénévoles et organisateurs travaillent main dans la main pour préparer un événement mémorable.\n\nDe la sélection des auteurs invités à l'aménagement des espaces, en passant par la coordination des ateliers et la communication, chaque détail est pensé pour offrir aux enfants et aux familles une expérience enrichissante et joyeuse.", en: "Organizing the Sfax Children's Book Fair is a logistical and human challenge that our team takes on every year with passion. Months before the opening, volunteers and organizers work hand in hand to prepare a memorable event.\n\nFrom selecting invited authors to setting up spaces, coordinating workshops, and communications, every detail is designed to offer children and families an enriching and joyful experience." },
    category: "life",
    author: "Mohamed Trabelsi",
    date: "2026-02-10",
    image: "/placeholder.svg",
  },
  {
    id: "nouveaux-partenariats",
    title: { fr: "Nouveaux partenariats pour la culture des enfants", en: "New partnerships for children's culture" },
    excerpt: { fr: "De nouvelles collaborations prometteuses pour enrichir nos programmes.", en: "Promising new collaborations to enrich our programs." },
    content: { fr: "Nous sommes fiers d'annoncer de nouveaux partenariats qui vont renforcer notre action en faveur de la culture des enfants. Grâce à ces collaborations avec des institutions éducatives et culturelles locales et internationales, nous pourrons élargir notre offre d'ateliers et toucher davantage d'enfants.\n\nCes partenariats reflètent la confiance grandissante que les acteurs culturels et éducatifs accordent à notre association et à sa mission.", en: "We are proud to announce new partnerships that will strengthen our action in favor of children's culture. Thanks to these collaborations with local and international educational and cultural institutions, we will be able to expand our workshop offerings and reach more children.\n\nThese partnerships reflect the growing trust that cultural and educational stakeholders place in our association and its mission." },
    category: "news",
    author: "Équipe rédactionnelle",
    date: "2026-01-25",
    image: "/placeholder.svg",
  },
];

export const events: Event[] = [
  {
    id: "salon-2026",
    title: { fr: "31ème Salon du Livre de l'Enfant de Sfax", en: "31st Sfax Children's Book Fair" },
    description: { fr: "La plus grande célébration de la littérature jeunesse en Tunisie revient pour sa 31ème édition.", en: "Tunisia's largest celebration of children's literature returns for its 31st edition." },
    content: { fr: "Le 31ème Salon du Livre de l'Enfant de Sfax promet d'être une édition exceptionnelle. Pendant cinq jours, le Centre Culturel de Sfax accueillera des centaines d'auteurs, illustrateurs et éditeurs du monde entier.\n\nAu programme : des ateliers de lecture et d'écriture, des spectacles de contes, des expositions, des rencontres avec des auteurs, et bien sûr, des milliers de livres à découvrir.\n\nCette édition mettra particulièrement en avant la littérature jeunesse africaine et méditerranéenne, avec des invités d'honneur venus du Sénégal, du Maroc et de France.", en: "The 31st Sfax Children's Book Fair promises to be an exceptional edition. For five days, the Sfax Cultural Center will welcome hundreds of authors, illustrators, and publishers from around the world.\n\nOn the program: reading and writing workshops, storytelling shows, exhibitions, author meetings, and of course, thousands of books to discover.\n\nThis edition will particularly highlight African and Mediterranean children's literature, with guests of honor from Senegal, Morocco, and France." },
    date: "2026-10-15",
    endDate: "2026-10-20",
    location: { fr: "Centre Culturel de Sfax", en: "Sfax Cultural Center" },
    image: "/placeholder.svg",
    status: "upcoming",
    program: [
      { time: "09:00", title: { fr: "Ouverture officielle", en: "Official opening" } },
      { time: "10:00", title: { fr: "Ateliers de lecture pour enfants", en: "Children's reading workshops" } },
      { time: "14:00", title: { fr: "Rencontres avec les auteurs", en: "Author meetings" } },
      { time: "16:00", title: { fr: "Spectacle de contes", en: "Storytelling show" } },
      { time: "18:00", title: { fr: "Table ronde : L'avenir du livre pour enfants", en: "Panel: The future of children's books" } },
    ],
  },
  {
    id: "atelier-ete-2026",
    title: { fr: "Ateliers d'été : Lire et créer", en: "Summer workshops: Read and create" },
    description: { fr: "Un programme estival d'ateliers créatifs autour du livre pour les 6-14 ans.", en: "A summer program of creative book-related workshops for ages 6-14." },
    content: { fr: "Cet été, rejoignez-nous pour une série d'ateliers créatifs qui combinent lecture, écriture et arts visuels. Les enfants de 6 à 14 ans pourront explorer leur créativité tout en développant leur goût pour la lecture.\n\nChaque semaine sera consacrée à un thème différent : aventure, science-fiction, contes traditionnels, et bien plus encore.", en: "This summer, join us for a series of creative workshops combining reading, writing, and visual arts. Children aged 6-14 will be able to explore their creativity while developing their love of reading.\n\nEach week will be dedicated to a different theme: adventure, science fiction, traditional tales, and much more." },
    date: "2026-07-01",
    endDate: "2026-08-31",
    location: { fr: "Bibliothèque municipale de Sfax", en: "Sfax Municipal Library" },
    image: "/placeholder.svg",
    status: "upcoming",
  },
  {
    id: "salon-2025",
    title: { fr: "30ème Salon du Livre de l'Enfant de Sfax", en: "30th Sfax Children's Book Fair" },
    description: { fr: "L'édition anniversaire qui a célébré 30 ans de promotion de la lecture.", en: "The anniversary edition celebrating 30 years of reading promotion." },
    content: { fr: "L'édition du 30ème anniversaire a été un moment historique pour notre association. Plus de 20 000 visiteurs ont participé à cette célébration exceptionnelle de la littérature jeunesse.\n\nL'événement a accueilli 150 auteurs de 12 pays et proposé plus de 100 ateliers pour les enfants.", en: "The 30th anniversary edition was a historic moment for our association. Over 20,000 visitors participated in this exceptional celebration of children's literature.\n\nThe event welcomed 150 authors from 12 countries and offered over 100 workshops for children." },
    date: "2025-10-10",
    endDate: "2025-10-15",
    location: { fr: "Centre Culturel de Sfax", en: "Sfax Cultural Center" },
    image: "/placeholder.svg",
    status: "past",
  },
];

export const members: Member[] = [
  { name: "Dr. Ahmed Kammoun", role: { fr: "Président", en: "President" }, bio: { fr: "Professeur de littérature à l'Université de Sfax, passionné par la promotion de la lecture chez les jeunes.", en: "Literature professor at the University of Sfax, passionate about promoting reading among youth." }, image: "/placeholder.svg", category: "board" },
  { name: "Mme Leila Bouaziz", role: { fr: "Vice-présidente", en: "Vice President" }, bio: { fr: "Éditrice et auteure de livres pour enfants, engagée dans la démocratisation de l'accès à la lecture.", en: "Publisher and children's book author, committed to democratizing access to reading." }, image: "/placeholder.svg", category: "board" },
  { name: "M. Karim Sfar", role: { fr: "Trésorier", en: "Treasurer" }, bio: { fr: "Expert-comptable et mécène culturel, il assure la gestion financière transparente de l'association.", en: "Chartered accountant and cultural patron, ensuring transparent financial management of the association." }, image: "/placeholder.svg", category: "board" },
  { name: "Mme Sonia Meddeb", role: { fr: "Secrétaire générale", en: "Secretary General" }, bio: { fr: "Bibliothécaire et coordinatrice d'événements culturels, elle orchestre les activités de l'association.", en: "Librarian and cultural events coordinator, she orchestrates the association's activities." }, image: "/placeholder.svg", category: "board" },
  { name: "M. Youssef Hajri", role: { fr: "Responsable des partenariats", en: "Partnerships Manager" }, bio: { fr: "Spécialiste en relations institutionnelles et développement de partenariats culturels.", en: "Specialist in institutional relations and cultural partnership development." }, image: "/placeholder.svg", category: "committee" },
  { name: "Mme Amira Ben Salah", role: { fr: "Responsable communication", en: "Communications Manager" }, bio: { fr: "Journaliste culturelle et responsable de la stratégie de communication de l'association.", en: "Cultural journalist and manager of the association's communication strategy." }, image: "/placeholder.svg", category: "committee" },
  { name: "M. Nabil Gharbi", role: { fr: "Coordinateur des ateliers", en: "Workshops Coordinator" }, bio: { fr: "Éducateur spécialisé dans l'animation d'ateliers de lecture et d'écriture pour enfants.", en: "Educator specializing in reading and writing workshop facilitation for children." }, image: "/placeholder.svg", category: "committee" },
  { name: "Mme Fatma Trabelsi", role: { fr: "Responsable logistique", en: "Logistics Manager" }, bio: { fr: "Experte en organisation événementielle, elle coordonne la logistique du salon.", en: "Event organization expert, she coordinates the fair's logistics." }, image: "/placeholder.svg", category: "committee" },
];

export const partners: Partner[] = [
  { name: "Ministère de la Culture", category: "institutional", logo: "/placeholder.svg" },
  { name: "Municipalité de Sfax", category: "institutional", logo: "/placeholder.svg" },
  { name: "Institut Français de Tunisie", category: "institutional", logo: "/placeholder.svg" },
  { name: "UNESCO", category: "institutional", logo: "/placeholder.svg" },
  { name: "Université de Sfax", category: "institutional", logo: "/placeholder.svg" },
  { name: "Radio Sfax", category: "media", logo: "/placeholder.svg" },
  { name: "La Presse de Tunisie", category: "media", logo: "/placeholder.svg" },
  { name: "Tunisie Télécom", category: "sponsor", logo: "/placeholder.svg" },
  { name: "Banque de Tunisie", category: "sponsor", logo: "/placeholder.svg" },
  { name: "Cérès Éditions", category: "sponsor", logo: "/placeholder.svg" },
];
