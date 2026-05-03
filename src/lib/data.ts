export interface Event {
  id: string;
  title: { fr: string; en: string; ar?: string };
  description: { fr: string; en: string; ar?: string };
  content: { fr: string; en: string; ar?: string };
  date: string;
  endDate?: string;
  location: { fr: string; en: string; ar?: string };
  image: string;
  programImage?: string;
  author?: string;
  status: "upcoming" | "past";
  program?: { time: string; title: { fr: string; en: string; ar?: string } }[];
}

export interface Member {
  name: string;
  role: { fr: string; en: string };
  bio: { fr: string; en: string };
  image: string;
  category: "board" | "committee" | "volunteer";
}

export interface Partner {
  name: { fr: string; en: string; ar: string };
  category: "institutional" | "media" | "sponsor";
  logo: string;
  url?: string;
}

export const events: Event[] = [
  {
    id: "salon-2026",
    title: {
      fr: "31ème Salon du Livre de l'Enfant de Sfax",
      en: "31st Sfax Children's Book Fair",
      ar: "الدورة الحادية والثلاثون من معرض صفاقس لكتاب الطفل",
    },
    description: {
      fr: "La 31ème édition du Salon du Livre de l'Enfant de Sfax s'est tenue du 23 au 30 mars 2026 à la Foire de Sfax, sous le signe « الكتاب صديق... إمتاع وتوثيق ».",
      en: "The 31st edition of the Sfax Children's Book Fair was held from March 23–30, 2026 at the Sfax Exhibition Center, under the theme 'The Book, a Friend... Pleasure and Memory.'",
      ar: "انطلقت الدورة الحادية والثلاثون من معرض صفاقس لكتاب الطفل خلال الفترة من 23 إلى 30 مارس 2026 بقصر المعارض بصفاقس تحت شعار «الكتاب صديق... إمتاع وتوثيق».",
    },
    content: {
      fr: "La 31ème édition du Salon du Livre de l'Enfant de Sfax s'est tenue du 23 au 30 mars 2026 à la Foire de Sfax, sous le beau signe « الكتاب صديق... إمتاع وتوثيق » — « Le livre, un ami... plaisir et mémoire ».\n\nPendant huit jours, cet événement phare de la littérature jeunesse en Tunisie a réuni auteurs, éditeurs, illustrateurs et jeunes lecteurs dans un espace vibrant de culture et de créativité. Des dizaines de maisons d'édition tunisiennes et étrangères ont exposé leurs dernières parutions, offrant aux familles un panorama riche et varié de la production éditoriale jeunesse.\n\nLe programme a été particulièrement dense : ateliers de lecture et d'écriture créative animés par des auteurs reconnus, spectacles de contes et représentations théâtrales, expositions d'illustrations originales, séances de dédicaces, tables rondes sur l'avenir du livre pour enfants, et compétitions culturelles et artistiques pour les jeunes participants.\n\nCette édition a mis en lumière la thématique du livre comme compagnon de vie, source de plaisir, de connaissance et de mémoire collective. Des établissements scolaires, des bibliothèques publiques et des associations culturelles de Sfax et de l'ensemble du territoire tunisien ont pris part à cette grande fête du livre.\n\nLe Salon a également honoré plusieurs personnalités du monde culturel et éducatif pour leur contribution à la promotion de la lecture chez les jeunes générations.\n\nCet événement est organisé par l'Association du Salon du Livre de l'Enfant de Sfax, avec le soutien de la Direction Régionale des Affaires Culturelles, de la Foire Internationale de Sfax et de l'ensemble de ses partenaires institutionnels et médiatiques.",
      en: "The 31st edition of the Sfax Children's Book Fair was held from March 23 to 30, 2026, at the Sfax Exhibition Center, under the theme 'The Book, a Friend... Pleasure and Memory.'\n\nFor eight days, this landmark children's literature event in Tunisia brought together authors, publishers, illustrators, and young readers in a vibrant space of culture and creativity. Dozens of Tunisian and international publishing houses showcased their latest titles, offering families a rich and varied panorama of children's publishing.\n\nThe program was packed: reading and creative writing workshops led by established authors, storytelling performances and theatrical shows, exhibitions of original illustrations, book signing sessions, panel discussions on the future of children's publishing, and cultural and artistic competitions for young participants.\n\nThis edition shone a spotlight on the book as a lifelong companion — a source of joy, knowledge, and collective memory. Schools, public libraries, and cultural associations from Sfax and across Tunisia took part in this great celebration of literature.\n\nThe Fair also honoured several cultural and educational figures for their contribution to promoting reading among younger generations.\n\nThis event is organized by the Association du Salon du Livre de l'Enfant de Sfax, with support from the Regional Directorate of Cultural Affairs, the Sfax International Fair, and all its institutional and media partners.",
      ar: "انطلقت الدورة الحادية والثلاثون من معرض صفاقس لكتاب الطفل خلال الفترة الممتدة من 23 إلى 30 مارس 2026 بقصر المعارض بصفاقس، تحت شعار: «الكتاب صديق... إمتاع وتوثيق».\n\nلثمانية أيام متواصلة، جمع هذا الحدث الثقافي البارز كتّاباً وناشرين ورسّامين وقرّاء شباباً في فضاء إبداعي متميز يجمع بين المتعة والمعرفة. وعرضت عشرات دور النشر التونسية والأجنبية أحدث إصداراتها، مقدّمةً للعائلات صورة ثرية ومتنوعة من الإنتاج الأدبي الموجّه للطفل.\n\nاحتضن المعرض برنامجاً حافلاً شمل: ورش القراءة والكتابة الإبداعية بإشراف كتّاب متمرّسين، وعروض الحكي والمسرح، ومعارض الرسوم التوضيحية الأصلية، وأنشطة التوقيع مع المؤلفين، وندوات فكرية حول مستقبل أدب الطفل، فضلاً عن مسابقات ثقافية وفنية موجّهة للأطفال والمراهقين.\n\nأبرزت هذه الدورة مكانة الكتاب بوصفه رفيقاً للحياة، ومصدراً للمتعة والمعرفة والتوثيق الجماعي. وشارك فيها مؤسسات تعليمية ومكتبات عامة وجمعيات ثقافية من صفاقس وكامل أرجاء تونس.\n\nكرّم المعرض كذلك عدداً من الشخصيات الثقافية والتربوية تقديراً لإسهاماتهم في تعزيز ثقافة القراءة لدى الأجيال الناشئة.\n\nتنظّم هذا الحدث جمعيةُ معرض صفاقس لكتاب الطفل، بدعم من المندوبية الجهوية للشؤون الثقافية ومعرض صفاقس الدولي وسائر شركائها المؤسسيين والإعلاميين.",
    },
    date: "2026-03-23",
    endDate: "2026-03-30",
    location: {
      fr: "Foire de Sfax",
      en: "Sfax Exhibition Center",
      ar: "قصر المعارض بصفاقس",
    },
    image: featuredEventImage,
    programImage: salon2026ProgrammeImage,
    status: "past",
    program: [
      {
        time: "Lun 23/03",
        title: {
          fr: "Inauguration — Carnaval avec percussions (Ammo Sahbi & Kamal Jribi) + Spectacle de Salah Eddine Turki (Algérie)",
          en: "Opening — Drum carnival (Ammo Sahbi & Kamal Jribi) + Show by Salah Eddine Turki (Algeria)",
          ar: "الافتتاح — كرنفال قرع الطبول (عمو الصحبي وكمال الجريبي) + مسرحية صلاح الدين تركي (الجزائر)",
        },
      },
      {
        time: "Mar 24/03",
        title: {
          fr: "Chorales d'écoles + Expression corporelle (Ahmed Qmiha) + Spectacle de Salah Eddine Turki (Algérie)",
          en: "School choirs + Physical expression (Ahmed Qmiha) + Show by Salah Eddine Turki (Algeria)",
          ar: "كورالات مدارس + تعبير جسماني (أحمد قميحة) + مسرحية صلاح الدين تركي (الجزائر)",
        },
      },
      {
        time: "Mer 25/03",
        title: {
          fr: "Chorales d'écoles + Expression corporelle (Ahmed Qmiha) + Conte d'Ahmed Dhahrachi (Maroc)",
          en: "School choirs + Physical expression (Ahmed Qmiha) + Storytelling by Ahmed Dhahrachi (Morocco)",
          ar: "كورالات مدارس + تعبير جسماني (أحمد قميحة) + حكاية لأحمد الدحرشي (المغرب)",
        },
      },
      {
        time: "Jeu 26/03",
        title: {
          fr: "Chorales d'écoles + Conte de Salah Eddine Turki (Algérie) + Conte d'Ahmed Dhahrachi (Maroc)",
          en: "School choirs + Storytelling by Salah Eddine Turki (Algeria) + Ahmed Dhahrachi (Morocco)",
          ar: "كورالات مدارس + حكاية صلاح الدين تركي (الجزائر) + حكاية أحمد الدحرشي (المغرب)",
        },
      },
      {
        time: "Ven 27/03",
        title: {
          fr: "Chorales d'écoles + Animation de l'espace par l'Organisation Tunisienne des Vacances et Tourisme",
          en: "School choirs + Space animation by the Tunisian Vacations & Tourism Organisation",
          ar: "كورالات مدارس + تنشيط الساحة من طرف المنظمة التونسية للمصائف والجولات",
        },
      },
      {
        time: "Sam 28/03",
        title: {
          fr: "Académie Internationale des Arts (Henda Derbal) + Club du conte — Collège Habib Achour + Animation Délégation Régionale Femme & Enfance",
          en: "International Arts Academy (Henda Derbal) + Storytelling Club — Habib Achour School + Regional Delegation for Women & Children",
          ar: "كورال الأكاديمية الدولية للفنون (هندة دربال) + نادي الحكاية بإعدادية الحبيب عاشور + تنشيط المندوبية الجهوية للمرأة والأسرة والطفولة",
        },
      },
      {
        time: "Dim 29/03",
        title: {
          fr: "Théâtre (Anatole France) + Club du conte École Bouch-ra + Théâtre Youssef Brek Allah (Mahres) + Contes + Jeux populaires dans l'espace",
          en: "Theatre (Anatole France School) + Storytelling Club + Theatre Youssef Brek Allah (Mahres) + Tales + Traditional games in the plaza",
          ar: "مسرحية مدرسة أناطول فرانس + نادي الحكاية بمدرسة البشرى + مسرحية يوسف برك الله (المحرس) + حكايات + ألعاب شعبية في الساحة",
        },
      },
    ],
  },
  {
    id: "concours-livre-creation-2026",
    title: {
      fr: "Concours « Livre & Création » — Première édition",
      en: "\"Book & Creation\" Competition — First Edition",
      ar: "مسابقة «كتاب وإبداع» — الدورة الأولى",
    },
    description: {
      fr: "La première édition du concours de théâtre scolaire organisé par l'Association du Salon du Livre de l'Enfant de Sfax, réunissant cinq établissements autour de grandes œuvres littéraires.",
      en: "The first edition of the scholastic theater competition organized by the Sfax Children's Book Fair Association, bringing together five institutions around major literary works.",
      ar: "الدورة الأولى من مسابقة المسرح المدرسي التي نظّمتها جمعية معرض صفاقس لكتاب الطفل، جمعت خمسة مؤسسات تربوية حول روائع الأدب.",
    },
    content: {
      fr: "Publié par Chems El Janoub Électronique — article de M. Anis El Baqloutî.\n\nL'Association du Salon du Livre de l'Enfant de Sfax a organisé la première édition des représentations théâtrales du concours « Livre & Création », le dimanche 15 mars 2026, à la Maison de la Culture Bab Bhar, sous la direction du poète Ahmed Chaïeb, à partir de 21h.\n\nQuatre collèges et une bibliothèque publique ont présenté des pièces de théâtre adaptées de romans historiques, travaillées sur les plans du texte, du jeu et de la mise en scène. Le jury était présidé par Hatem Hachîcha, accompagné de Rafik Wardé et Ilyes Ismaïl. La soirée était animée par Ahmed Ben Nasr, réputé pour son éloquence et son esprit vif.\n\nLes pièces présentées :\n\n« Carthage entre le rêve d'Elissa et Hannibal » — Collège Ahmed Mellam, encadrement : Leïla Ben Masoud, d'après les romans Elissa d'Ahmed Kasraoui et Hannibal d'Abdelaziz Belkhoja.\n\n« La Jazia et ses cousines » — Collège Sadeq Fki, encadrement : Bouthaina Mansouri, d'après les contes des Beni Hilal d'Abderrahmane Guiga.\n\n« Hannibal » — Bibliothèque publique Ben Halima, encadrement : Chihab Jarbouî, d'après le roman de Taoufik Madani.\n\n« L'orange ne pleure pas » — Collège Habib Achour, encadrement : Chadhlia Bacha, d'après Terre des oranges tristes de Ghassan Kanafani.\n\n« La voix de la vérité » — Collège Ali Belhouane, encadrement : Hayat Ayoub, Mohamed Souissi et Amine Souissi, d'après Le Mûrier amer de Mohamed Aroussy Matwi.\n\nUne large assistance d'enseignants et de parents a suivi les représentations, aux côtés des représentants de la délégation régionale de l'éducation de Sfax 2, de la bibliothèque régionale, de la délégation régionale des affaires culturelles, et des membres du bureau de l'association. Les jeunes acteurs ont révélé des talents prometteurs, acclamés pour la dimension patriotique et humaniste de leurs interprétations.\n\nChaque représentation s'est clôturée par une haie d'honneur et la remise de certificats de participation aux acteurs, ainsi que de diplômes de reconnaissance aux établissements et encadreurs. Des distinctions ont également été remises au directeur Ahmed Chaïeb pour son soutien généreux, au metteur en scène Rami Charni, et aux responsables régionaux des Scouts tunisiens pour leur organisation exemplaire.\n\nPalmarès :\n\n1ère place (ex-æquo) : Collège Sadeq Fki et Bibliothèque publique Ben Halima.\n\n2ème place : Collège Ali Belhouane.\n\nMeilleur texte : Collège Sadeq Fki.\n\nMeilleure interprétation (ex-æquo) : Narmine Hattab (Collège Ali Belhouane) et Yosr Houidi (Bibliothèque Ben Halima).\n\nLa remise des prix aura lieu lors de la cérémonie de clôture du Salon le 29 mars 2026. Rendez-vous pour la deuxième édition l'an prochain.",
      en: "Published by Chems El Janoub Electronic Journal — article by Mr. Anis El Baqloutî.\n\nThe Sfax Children's Book Fair Association organized the first edition of the 'Book & Creation' Competition theatrical performances on Sunday, March 15, 2026, at the Bab Bhar Cultural Center, under the direction of poet Ahmed Chaïeb, starting at 9 PM.\n\nFour middle schools and a public library presented theatrical performances adapted from historical novels. The jury was chaired by Hatem Hachîcha, alongside Rafik Wardé and Ilyes Ismaïl. The evening was hosted by Ahmed Ben Nasr, known for his eloquence and quick wit.\n\nParticipating plays:\n\n'Carthage: Between Elissa's Dream and Hannibal' — Ahmed Mellam Middle School, supervised by Leïla Ben Masoud, based on the novels Elissa by Ahmed Kasraoui and Hannibal by Abdelaziz Belkhoja.\n\n'La Jazia and Her Cousins' — Sadeq Fki Middle School, supervised by Bouthaina Mansouri, based on the Tales of Beni Hilal by Abderrahmane Guiga.\n\n'Hannibal' — Ben Halima Public Library, supervised by Chihab Jarbouî, based on the novel by Taoufik Madani.\n\n'The Orange Doesn't Cry' — Habib Achour Middle School, supervised by Chadhlia Bacha, based on Sad Oranges Land by Ghassan Kanafani.\n\n'The Voice of Justice' — Ali Belhouane Middle School, supervised by Hayat Ayoub, Mohamed Souissi, and Amine Souissi, based on The Bitter Mulberry by Mohamed Aroussy Matwi.\n\nA large audience of parents and teachers attended, alongside representatives from the Sfax 2 regional education delegation, the regional library, the regional cultural affairs delegation, and members of the association's board. The young performers revealed remarkable talents and were praised for the patriotic and humanistic spirit of their performances.\n\nEach show concluded with an honour guard and the presentation of participation certificates to performers, and recognition diplomas to institutions and supervisors. Special honours were awarded to Ahmed Chaïeb for his generous support, to theatre artist Rami Charni as the evening's maestro, and to the Tunisian Scout leaders for their exemplary organisation.\n\nResults:\n\n1st place (tied): Sadeq Fki Middle School and Ben Halima Public Library.\n\n2nd place: Ali Belhouane Middle School.\n\nBest text: Sadeq Fki Middle School.\n\nBest performance (tied): Narmine Hattab (Ali Belhouane) and Yosr Houidi (Ben Halima Library).\n\nPrizes will be awarded at the Book Fair closing ceremony on March 29, 2026. See you at the second edition next year.",
      ar: "نشرت جريدة شمس الجنوب الإلكترونية هذا المقال بقلم الأستاذ أنيس البقلوطي.\n\nنظّمت جمعية معرض صفاقس لكتاب الطفل تظاهرة العروض المسرحية لمسابقة «كتاب وإبداع» في دورتها الأولى، مساء الأحد 15 مارس 2026، بدار الثقافة باب البحر بإدارة الأستاذ الشاعر أحمد الشايب، انطلاقًا من الساعة التاسعة ليلاً.\n\nشاركت في المسابقة أربع إعداديات ومكتبة عمومية بمسرحيات اشتغلت على روايات تاريخية نصًّا وتمثيلاً وإخراجًا. تولّت التحكيم لجنة مكوّنة من الأستاذ حاتم الحشيشة رئيسًا، بمعية الأستاذين رفيق واردة وإلياس إسماعيل. ونشّط السهرة المسرحية الأستاذ أحمد بن نصر المعروف بفصاحته وحضور بديهته.\n\nالمسرحيات المشاركة:\n\n«قرطاج بين حلم عليسة وحنبعل» — المدرسة الإعدادية أحمد ملام، بتأطير الأستاذة ليلى بن مسعود، انطلاقًا من روايتَي «عليسة» لأحمد الكسراوي و«حنبعل» لعبد العزيز بالخوجة.\n\n«الجازية وبنات عمّها» — المدرسة الإعدادية الصادق الفقي، بتأطير الأستاذة بثينة المنصوري، انطلاقًا من أقاصيص بني هلال للأديب عبد الرحمان ڨيڨة.\n\n«حنبعل» — المكتبة العمومية مركز بن حليمة، بتأطير الأستاذ شهاب الجربوعي، انطلاقًا من رواية «حنبعل» لتوفيق المدني.\n\n«البرتقال لا يبكي» — المدرسة الإعدادية الحبيب عاشور، بتأطير الأستاذة شاذلية الباش، انطلاقًا من رواية «أرض البرتقال الحزين» لغسّان كنفاني.\n\n«صوت الحق» — المدرسة الإعدادية علي البلهوان، بتأطير الأساتذة حياة أيوب ومحمد السويسي وأمين السويسي، انطلاقًا من رواية «التوت المرّ» لمحمد العروسي المطوي.\n\nحضر العروض جمع غفير من الأولياء والأساتذة، إلى جانب السيد محمود دمق ممثلاً عن مندوبية التربية صفاقس 2، والسيدة أميرة التواتي من المكتبة الجهوية بصفاقس، والسيد رضا بوكثير من المندوبية الجهوية للشؤون الثقافية، وأعضاء هيئة جمعية معرض صفاقس لكتاب الطفل. قُدّمت العروض تباعًا في مدد زمنية احترمها الجميع، واكتشف الحاضرون طاقات واعدة من الممثلين الأطفال واليافعين، وتفاعلوا معها بالتركيز والتصفيق والتماهي مع المواقف الدرامية لما فيها من حسٍّ وطني وإنساني.\n\nاختُتم كل عرض بتحية الجمهور وتقديم الممثلين لأنفسهم، ثم مُنحت شهادات مشاركة للممثلين وشهادات شكر وتقدير للمؤسسات التربوية والمؤطرين. كما نالت شهادات تكريم: الأستاذ أحمد الشايب مدير دار الثقافة لدعمه السخي وحضوره جميع العروض، والفنان المسرحي رامي الشارني مايسترو التظاهرة، والكشافة التونسية التي أشرفت على التنظيم وقائدها الجهوي محمد مهدي الشعري.\n\nالنتائج النهائية:\n\nالجائزة الأولى (مناصفة): إعدادية الصادق الفقي والمكتبة العمومية مركز بن حليمة.\n\nالجائزة الثانية: إعدادية علي البلهوان.\n\nجائزة أحسن نص: إعدادية الصادق الفقي.\n\nجائزة أحسن أداء (مناصفة): نرمين الحطاب من إعدادية علي البلهوان، ويسر الهويدي من المكتبة العمومية مركز بن حليمة.\n\nتُمنح الجوائز لمستحقيها في حفل اختتام فعاليات المعرض يوم 29 مارس 2026. والموعد مع الدورة الثانية العام القادم إن شاء الله.",
    },
    date: "2026-03-15",
    location: {
      fr: "Maison de la Culture Bab Bhar, Sfax",
      en: "Bab Bhar Cultural Center, Sfax",
      ar: "دار الثقافة باب البحر، صفاقس",
    },
    image: concoursLivreCreationImage,
    author: "شفيق بن البشير غربال",
    status: "past",
    program: [
      {
        time: "21:00",
        title: { fr: "Ouverture de la soirée", en: "Opening ceremony", ar: "افتتاح السهرة" },
      },
      {
        time: "21:15",
        title: { fr: "«Carthage entre le rêve d'Elissa et Hannibal» — Collège Ahmed Mellam", en: "'Carthage: Between Elissa's Dream and Hannibal' — Ahmed Mellam School", ar: "«قرطاج بين حلم عليسة وحنبعل» — إعدادية أحمد ملام" },
      },
      {
        time: "21:45",
        title: { fr: "«La Jazia et ses cousines» — Collège Sadeq Fki", en: "'La Jazia and Her Cousins' — Sadeq Fki School", ar: "«الجازية وبنات عمها» — إعدادية الصادق الفقي" },
      },
      {
        time: "22:15",
        title: { fr: "«Hannibal» — Bibliothèque publique Ben Halima", en: "'Hannibal' — Ben Halima Public Library", ar: "«حنبعل» — المكتبة العمومية مركز بن حليمة" },
      },
      {
        time: "22:45",
        title: { fr: "«L'orange ne pleure pas» — Collège Habib Achour", en: "'The Orange Doesn't Cry' — Habib Achour School", ar: "«البرتقال لا يبكي» — إعدادية الحبيب عاشور" },
      },
      {
        time: "23:15",
        title: { fr: "«La voix de la vérité» — Collège Ali Belhouane", en: "'The Voice of Justice' — Ali Belhouane School", ar: "«صوت الحق» — إعدادية علي البلهوان" },
      },
      {
        time: "23:45",
        title: { fr: "Délibérations et proclamation du palmarès", en: "Jury deliberations and prize announcements", ar: "المداولات وإعلان النتائج" },
      },
    ],
  },
  {
    id: "concours-imla-2026",
    title: {
      fr: "Concours de Dictée en Langue Arabe — 17ème Édition",
      en: "Arabic Dictation Competition — 17th Edition",
      ar: "مسابقة الإملاء باللغة العربية — الدورة السابعة عشرة",
    },
    description: {
      fr: "La 17ème édition du concours de dictée en langue arabe, organisée par l'Association du Salon du Livre de l'Enfant de Sfax, avec un tour préliminaire le 1er février et une finale le 15 février 2026.",
      en: "The 17th edition of the Arabic language dictation competition organized by the Sfax Children's Book Fair Association, with a preliminary round on February 1 and the grand final on February 15, 2026.",
      ar: "الدورة السابعة عشرة من مسابقة الإملاء باللغة العربية التي نظّمتها جمعية معرض صفاقس لكتاب الطفل، بدور تمهيدي في 1 فيفري ودور نهائي في 15 فيفري 2026.",
    },
    content: {
      fr: "La 17ème édition du Concours de Dictée en Langue Arabe, organisée par l'Association du Salon du Livre de l'Enfant de Sfax, s'est déroulée en deux phases.\n\nTour préliminaire — Dimanche 1er février 2026 :\nLe tour préliminaire s'est tenu à la salle de réunions de la Délégation Régionale de l'Éducation de Sfax 1, dans une atmosphère remarquable sublimée par la présence de M. Sami Sahloul et Mme Rim Atia. La délégation régionale de l'éducation a mis toutes ses infrastructures à la disposition de l'association, lui apportant un soutien continu et encourageant la réussite de cette compétition. Les lauréats du tour préliminaire ont été invités à participer à la finale le 15 février à 9h00.\n\nFinale — Dimanche 15 février 2026 :\nLa grande finale s'est tenue au Centre Régional de Formation et de Développement des Compétences de Sfax, avec 19 participants (1 absent).\n\nÉquipe d'organisation : Lecture du texte de dictée — Pr. Ahmed Ben Nasr. Dictée — Pr. Nawal Tunisi. Surveillance — Chafik Ghorbel, Pr. Najah Ssamet, Pr. Taher Ssamet. Supervision juridique — Pr. Lassaad Ssamawi et Pr. Wajdi Atitallah. Supervision organisationnelle — Pr. Mohamed Karmazi. Correction — Pr. Sara Charfi, Pr. Najah Ssamet, Pr. Taher Ssamet, Chafik Ghorbel.\n\nLe texte de la dictée de la finale a été extrait du roman « Bab Al-Amoud » de Samir Jundi.\n\nUn remerciement particulier est adressé aux responsables de la Délégation Régionale de l'Éducation de Sfax 1, qui ont permis l'accès au Centre Régional de Formation et de Développement des Compétences par le couloir de la délégation, ouvrant spécialement leurs portes pour la compétition.",
      en: "The 17th edition of the Arabic Language Dictation Competition, organized by the Sfax Children's Book Fair Association, took place in two phases.\n\nPreliminary Round — Sunday, February 1, 2026:\nThe preliminary round was held at the meeting room of the Sfax 1 Regional Education Delegation, in a wonderful atmosphere graced by the presence of Mr. Sami Sahloul and Mrs. Rim Atia. The regional education delegation provided the association with all its facilities and continuous support, contributing to the success of this competition. Qualifying students were invited to attend the final on February 15 at 9:00 AM.\n\nFinal Round — Sunday, February 15, 2026:\nThe grand final took place at the Regional Training and Skills Development Center in Sfax, with 19 competitors (1 absent).\n\nOrganization Team: Text reading — Prof. Ahmed Ben Nasr. Dictation — Prof. Nawal Tunisi. Supervision — Chafik Ghorbel, Prof. Najah Ssamet, Prof. Taher Ssamet. Legal oversight — Prof. Lassaad Ssamawi and Prof. Wajdi Atitallah. Organizational oversight — Prof. Mohamed Karmazi. Correction — Prof. Sara Charfi, Prof. Najah Ssamet, Prof. Taher Ssamet, Chafik Ghorbel.\n\nThe final round dictation text was drawn from the novel \"Bab Al-Amoud\" by Samir Jundi.\n\nSpecial thanks go to the officials of the Sfax 1 Regional Education Delegation, who provided access to the Regional Training Center through the delegation's corridor, opening their doors especially for this competition.",
      ar: "نظّمت جمعية معرض صفاقس لكتاب الطفل الدورة السابعة عشرة من مسابقة الإملاء باللغة العربية على مرحلتين.\n\nالدور التمهيدي — الأحد 1 فيفري 2026 :\nانطلق الدور التمهيدي بقاعة الاجتماعات بمندوبية صفاقس 1 للتربية، في أجواء رائعة عمّت القاعة وزادها ألقًا حضور السيد سامي سهلول والسيدة ريم عطية. وقد وضعت المندوبية كل إمكاناتها تحت تصرف الجمعية، وأسدت إليها دعمًا متواصلًا وتشجيعًا على إنجاح هذه المسابقة. ودُعي الفائزون في الدور التمهيدي للحضور يوم الأحد 15 فيفري على الساعة التاسعة صباحًا.\n\nالدور النهائي — الأحد 15 فيفري 2026 :\nأُقيم الدور النهائي بالفرع الجهوي للتكوين وتطوير الكفاءات بصفاقس، وشارك فيه 19 متسابقًا (وواحد متغيّب).\n\nفريق التنظيم : قراءة نص الإملاء — الأستاذ أحمد بن نصر. الإملاء — الأستاذة نوال التونسي. المراقبة — شفيق غربال والأستاذة نجاح الصامت والأستاذ الطاهر الصامت. الإشراف القانوني — الأستاذان لسعد السماوي ووجدي عطية الله. الإشراف التنظيمي — الأستاذ محمد القرمازي. الإصلاح — الأساتذة سارة الشرفي ونجاح الصامت والطاهر الصامت وشفيق غربال.\n\nاقتُبس نصّ إملاء الدور النهائي من كتاب «باب العامود» للأديب سمير الجندي.\n\nشكر خاص إلى المسؤولين في المندوبية الجهوية للتربية بصفاقس 1 الذين مكّنوا الجمعية من العبور إلى الفرع الجهوي للتكوين وتطوير الكفاءات من رواق المندوبية، وفتحوا أبوابهم خصيصًا لإنجاح هذه المسابقة.",
    },
    date: "2026-02-01",
    endDate: "2026-02-15",
    location: {
      fr: "Délégation Régionale de l'Éducation de Sfax 1 & Centre de Formation de Sfax",
      en: "Sfax 1 Regional Education Delegation & Regional Training Center",
      ar: "مندوبية التربية صفاقس 1 والفرع الجهوي للتكوين وتطوير الكفاءات بصفاقس",
    },
    image: concoursImla2026Image,
    status: "past",
    program: [
      {
        time: "01/02",
        title: {
          fr: "Dour préliminaire — Délégation Régionale de l'Éducation Sfax 1",
          en: "Preliminary Round — Sfax 1 Regional Education Delegation",
          ar: "الدور التمهيدي — مندوبية التربية صفاقس 1",
        },
      },
      {
        time: "15/02 — 09:00",
        title: {
          fr: "Finale — Centre Régional de Formation et de Développement des Compétences",
          en: "Grand Final — Regional Training and Skills Development Center",
          ar: "الدور النهائي — الفرع الجهوي للتكوين وتطوير الكفاءات",
        },
      },
    ],
  },
];

import featuredEventImage from "@/assets/featured-event.jpg";
import concoursImla2026Image from "@/assets/concours-imla-2026.jpg";
import salon2026ProgrammeImage from "@/assets/salon-2026-programme.png";
import concoursLivreCreationImage from "@/assets/concours-livre-creation-2026.jpg";
import slimAchicheImage from "@/assets/slim-achiche.png";
import mohsenBouchalaImage from "@/assets/mohsen-bouchaala.png";
import sarraCharfiImage from "@/assets/sarra-charfi.png";
import chefyaHdiderImage from "@/assets/chefya-hdider.png";
import wajdiAtitallahImage from "@/assets/wajdi-atitallah.png";
import chafikGhorbelImage from "@/assets/chafik-ghorbel.jpg";

export const members: Member[] = [
  { name: "Slim Achiche", role: { fr: "Président", en: "President" }, bio: { fr: "Président de l'association, engagé dans la promotion de la lecture et de la culture pour les enfants de Sfax.", en: "President of the association, committed to promoting reading and culture for the children of Sfax." }, image: slimAchicheImage, category: "board" },
  { name: "Hamadi Guermazi", role: { fr: "Vice-président", en: "Vice President" }, bio: { fr: "Vice-président de l'association, contribuant activement au développement des activités culturelles.", en: "Vice president of the association, actively contributing to the development of cultural activities." }, image: "/placeholder.svg", category: "board" },
  { name: "Foued Sahnoun", role: { fr: "Secrétaire général", en: "Secretary General" }, bio: { fr: "Secrétaire général de l'association, assurant la coordination et le suivi des activités.", en: "Secretary general of the association, ensuring coordination and follow-up of activities." }, image: "/placeholder.svg", category: "board" },
  { name: "Sarra Charfi", role: { fr: "Secrétaire générale adjointe", en: "Deputy Secretary General" }, bio: { fr: "Secrétaire générale adjointe, soutenant la gestion administrative de l'association.", en: "Deputy secretary general, supporting the administrative management of the association." }, image: sarraCharfiImage, category: "board" },
  { name: "Mohsen Bouchaala", role: { fr: "Trésorier", en: "Treasurer" }, bio: { fr: "Trésorier de l'association, veillant à la gestion financière transparente et rigoureuse.", en: "Treasurer of the association, ensuring transparent and rigorous financial management." }, image: mohsenBouchalaImage, category: "board" },
  { name: "Chafik Ghorbel", role: { fr: "Chargé de communication", en: "Communications Officer" }, bio: { fr: "Responsable de la communication et de la visibilité de l'association.", en: "Responsible for the association's communication and visibility." }, image: chafikGhorbelImage, category: "committee" },
  { name: "Chefya Hdider", role: { fr: "Chargée de l'activité culturelle", en: "Cultural Activities Officer" }, bio: { fr: "En charge de la programmation et de l'animation des activités culturelles.", en: "In charge of programming and facilitating cultural activities." }, image: chefyaHdiderImage, category: "committee" },
  { name: "Wajdi Atitallah", role: { fr: "Représentant juridique légal", en: "Legal Representative" }, bio: { fr: "Représentant juridique de l'association, assurant le cadre légal de ses activités.", en: "Legal representative of the association, ensuring the legal framework of its activities." }, image: wajdiAtitallahImage, category: "committee" },
  { name: "Sawssan Amri", role: { fr: "Membre", en: "Member" }, bio: { fr: "Membre active du comité, contribuant aux différentes initiatives de l'association.", en: "Active committee member, contributing to the association's various initiatives." }, image: "/placeholder.svg", category: "committee" },
];

import partner1Logo from "@/assets/partner-1.jpg";
import partner2Logo from "@/assets/partner-2.png";

export const partners: Partner[] = [
  {
    name: {
      fr: "Direction Régionale des Affaires Culturelles de Sfax",
      en: "Regional Directorate of Cultural Affairs in Sfax",
      ar: "المندوبية الجهوية للشؤون الثّقافيّة بصفاقس"
    },
    category: "institutional",
    logo: partner1Logo,
    url: "https://www.facebook.com/Culture.SFAX"
  },
  {
    name: {
      fr: "Foire Internationale de Sfax",
      en: "Sfax International Fair",
      ar: "معرض صفاقس الدولي"
    },
    category: "institutional",
    logo: partner2Logo,
    url: "https://www.facebook.com/AssociationDeLaFoireInternationaleDeSfax"
  },
];
