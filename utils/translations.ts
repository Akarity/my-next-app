// Define the structure of our translations
export interface Translations {
  common: {
    home: string;
    services: string;
    contact: string;
    readMore: string;
    getStarted: string;
    learnMore: string;
    contactUs: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    about: {
      title: string;
      content: string;
    };
    testimonials: {
      title: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    workplaceMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    neighbourhoodMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    tenancyMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    familyMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    medicalMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    complaintsMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    commercialMediation: {
      title: string;
      description: string;
      benefits: string[];
    };
    conflictCoaching: {
      title: string;
      description: string;
      benefits: string[];
    };
    teamFacilitation: {
      title: string;
      description: string;
      benefits: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
  };
  locations: {
    budapest: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// English translations
export const en: Translations = {
  common: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    readMore: 'Read More',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
  },
  home: {
    hero: {
      title: 'Resolving Disputes, Restoring Harmony',
      subtitle: 'Professional mediation services for workplace, family, neighborhood, and commercial disputes.',
      cta: 'Discover Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a wide range of mediation services to help resolve conflicts and restore relationships.',
    },
    about: {
      title: 'About Harmony Mediation',
      content: 'At Harmony Mediation, we believe conflicts don\'t have to escalate. Our expert mediators provide tailored, compassionate, and effective solutions to help individuals, families, teams, and businesses find resolution and move forward.',
    },
    testimonials: {
      title: 'What Our Clients Say',
    },
    cta: {
      title: 'Ready to Resolve Your Dispute?',
      subtitle: 'Contact us today to discuss how we can help.',
      button: 'Get in Touch',
    },
  },
  services: {
    title: 'Our Services',
    subtitle: 'We offer a comprehensive range of mediation services tailored to your specific needs.',
    workplaceMediation: {
      title: 'Workplace Mediation',
      description: 'Our workplace mediation service can be used for disputes involving up to three parties, as well as entire groups and teams. Issues could include personality clashes, miscommunications, grievance-type issues, and low-level cases of bullying and harassment.',
      benefits: [
        'Improved communication',
        'Restored trust',
        'Healthier work environment',
        'Increased productivity',
        'Reduced stress and anxiety',
      ],
    },
    neighbourhoodMediation: {
      title: 'Neighbourhood Mediation',
      description: 'Our neighbourhood mediation service can help neighbours to get back on good terms. Issues that mediation can resolve include boundary disputes, anti-social behaviour, fall outs over parking and upkeep of communal areas, and general interpersonal conflicts.',
      benefits: [
        'Reduced tension',
        'Better communication',
        'Stronger community',
        'Peaceful living environment',
        'Long-term solutions',
      ],
    },
    tenancyMediation: {
      title: 'Tenancy Mediation',
      description: 'Our tenancy mediation service can help to resolve interpersonal disputes between tenants and landlords. Potential reasons for conflict could include rent arrears, maintenance issues, upkeep of communal areas, and disagreements over responsibilities.',
      benefits: [
        'Fair resolutions',
        'Preserved relationships',
        'Avoided legal costs',
        'Clear communication',
        'Mutual understanding',
      ],
    },
    familyMediation: {
      title: 'Family Mediation',
      description: 'Our family mediation service can help families who want to stay together, but is not suitable for those who are in the process of divorcing. Mediation can be used to resolve communication breakdowns between family members, personality clashes, and conflict arising from critical incidents.',
      benefits: [
        'Renewed understanding',
        'Healed relationships',
        'Family unity',
        'Improved communication',
        'Emotional healing',
      ],
    },
    medicalMediation: {
      title: 'Medical Mediation',
      description: 'Our medical mediation service helps to build better dialogue between medical professionals and patients and/or patients\' families. It can address disputes around receiving bad news, critical care choices, care not meeting expectations, and ethical issues around religious or cultural beliefs.',
      benefits: [
        'Greater understanding',
        'Reduced stress',
        'Collaborative solutions',
        'Improved patient care',
        'Ethical resolution',
      ],
    },
    complaintsMediation: {
      title: 'Complaints Mediation',
      description: 'Our complaints mediation service can help resolve complaints without the need for going to court. The service can address faulty or mis-sold goods, services not meeting expectations, unsatisfactory treatment of a customer, or breakdowns in communication.',
      benefits: [
        'Quick resolutions',
        'Cost savings',
        'Preserved relationships',
        'Customer satisfaction',
        'Business reputation protection',
      ],
    },
    commercialMediation: {
      title: 'Commercial Mediation',
      description: 'Our commercial mediation can keep the process of resolving financial or contractual disputes simple. It can be used to address business disputes, contractual issues, certain cases of debt, personal injury claims, copyright and IP disputes, and small claims.',
      benefits: [
        'Faster resolutions',
        'Reduced legal fees',
        'Maintained partnerships',
        'Confidentiality',
        'Business continuity',
      ],
    },
    conflictCoaching: {
      title: 'Conflict Coaching',
      description: 'One-to-one Conflict Coaching sessions allow individuals to develop an understanding of conflict, to enhance the effectiveness of their interactions with others, and to prepare them for future conflicts that could arise.',
      benefits: [
        'Enhanced self-awareness',
        'Better relationships',
        'Conflict readiness',
        'Personal growth',
        'Improved communication skills',
      ],
    },
    teamFacilitation: {
      title: 'Team Facilitation',
      description: 'Our team facilitation sessions will get your team or work group back up to their usual high-performing standards: communicating more openly, collaborating more fully, and all pulling in the same direction.',
      benefits: [
        'Stronger teamwork',
        'Increased productivity',
        'Renewed focus',
        'Improved communication',
        'Aligned goals',
      ],
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with us to discuss how we can help resolve your dispute.',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Send Message',
    },
    info: {
      title: 'Contact Information',
      address: 'Budapest, Hungary',
      phone: '+36 30 2025404',
      email: 'info@harmonymediation.com',
    },
  },
  locations: {
    budapest: 'Budapest',
  },
  seo: {
    title: 'Professional Mediation Services | Harmony Mediation',
    description: 'Expert mediation services for workplace, family, neighborhood, and commercial disputes in Budapest. Resolve conflicts and restore harmony with our professional mediators.',
    keywords: [
      'mediation services',
      'conflict resolution',
      'dispute resolution',
      'workplace mediation',
      'family mediation',
      'commercial mediation',
      'Budapest mediator',
      'professional mediator',
      'mediation company',
    ],
  },
};

// Hungarian translations
export const hu: Translations = {
  common: {
    home: 'Főoldal',
    services: 'Szolgáltatások',
    contact: 'Kapcsolat',
    readMore: 'Tovább',
    getStarted: 'Kezdés',
    learnMore: 'Tudj meg többet',
    contactUs: 'Kapcsolat',
  },
  home: {
    hero: {
      title: 'Viták Megoldása, Harmónia Helyreállítása',
      subtitle: 'Professzionális mediációs szolgáltatások munkahelyi, családi, szomszédsági és kereskedelmi viták esetén.',
      cta: 'Fedezd fel szolgáltatásainkat',
    },
    services: {
      title: 'Szolgáltatásaink',
      subtitle: 'Széles körű mediációs szolgáltatásokat kínálunk a konfliktusok megoldására és a kapcsolatok helyreállítására.',
    },
    about: {
      title: 'A Harmony Mediationről',
      content: 'A Harmony Mediation-nél hiszünk abban, hogy a konfliktusoknak nem kell eszkalálódniuk. Szakértő mediátoraink személyre szabott, együttérző és hatékony megoldásokat kínálnak, hogy segítsenek az egyéneknek, családoknak, csapatoknak és vállalkozásoknak megtalálni a megoldást és továbblépni.',
    },
    testimonials: {
      title: 'Ügyfeleink véleménye',
    },
    cta: {
      title: 'Készen állsz a vitád megoldására?',
      subtitle: 'Vedd fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk.',
      button: 'Kapcsolatfelvétel',
    },
  },
  services: {
    title: 'Szolgáltatásaink',
    subtitle: 'Átfogó mediációs szolgáltatásokat kínálunk, amelyek az Ön egyedi igényeihez igazodnak.',
    workplaceMediation: {
      title: 'Munkahelyi Mediáció',
      description: 'Munkahelyi mediációs szolgáltatásunk akár három fél közötti vitákra, valamint teljes csoportokra és csapatokra is alkalmazható. A problémák közé tartozhatnak a személyiségi összeütközések, félreértések, panasz jellegű problémák, valamint az alacsony szintű zaklatási esetek.',
      benefits: [
        'Javuló kommunikáció',
        'Helyreállított bizalom',
        'Egészségesebb munkakörnyezet',
        'Növekvő termelékenység',
        'Csökkent stressz és szorongás',
      ],
    },
    neighbourhoodMediation: {
      title: 'Szomszédsági Mediáció',
      description: 'Szomszédsági mediációs szolgáltatásunk segíthet a szomszédoknak, hogy újra jó viszonyba kerüljenek. A mediáció olyan problémákat oldhat meg, mint a határviták, antiszociális viselkedés, parkolási és közös területek karbantartásával kapcsolatos nézeteltérések, valamint általános személyközi konfliktusok.',
      benefits: [
        'Csökkent feszültség',
        'Jobb kommunikáció',
        'Erősebb közösség',
        'Békés lakókörnyezet',
        'Hosszú távú megoldások',
      ],
    },
    tenancyMediation: {
      title: 'Bérleti Mediáció',
      description: 'Bérleti mediációs szolgáltatásunk segíthet a bérlők és bérbeadók közötti személyközi viták megoldásában. A konfliktus lehetséges okai lehetnek a bérleti díj hátralékok, karbantartási problémák, közös területek fenntartása és a felelősségi körökkel kapcsolatos nézeteltérések.',
      benefits: [
        'Méltányos megoldások',
        'Megőrzött kapcsolatok',
        'Elkerült jogi költségek',
        'Egyértelmű kommunikáció',
        'Kölcsönös megértés',
      ],
    },
    familyMediation: {
      title: 'Családi Mediáció',
      description: 'Családi mediációs szolgáltatásunk segíthet azoknak a családoknak, akik együtt akarnak maradni, de nem alkalmas azok számára, akik válófélben vannak. A mediáció segíthet a családtagok közötti kommunikációs problémák, személyiségi összeütközések és kritikus eseményekből eredő konfliktusok megoldásában.',
      benefits: [
        'Megújult megértés',
        'Gyógyult kapcsolatok',
        'Családi egység',
        'Javuló kommunikáció',
        'Érzelmi gyógyulás',
      ],
    },
    medicalMediation: {
      title: 'Orvosi Mediáció',
      description: 'Orvosi mediációs szolgáltatásunk segít jobb párbeszédet kialakítani az egészségügyi szakemberek és a betegek és/vagy a betegek családjai között. Olyan vitákat kezelhet, mint a rossz hírek közlése, kritikus ellátási döntések, az elvárásoknak nem megfelelő ellátás, valamint a vallási vagy kulturális meggyőződésekkel kapcsolatos etikai kérdések.',
      benefits: [
        'Nagyobb megértés',
        'Csökkent stressz',
        'Együttműködő megoldások',
        'Javuló betegellátás',
        'Etikai megoldás',
      ],
    },
    complaintsMediation: {
      title: 'Panaszkezelési Mediáció',
      description: 'Panaszkezelési mediációs szolgáltatásunk segíthet a panaszok bíróság nélküli megoldásában. A szolgáltatás olyan problémákat kezelhet, mint a hibás vagy félreértékesített áruk, az elvárásoknak nem megfelelő szolgáltatások, az ügyfelek nem megfelelő kezelése vagy a kommunikáció megszakadása.',
      benefits: [
        'Gyors megoldások',
        'Költségmegtakarítás',
        'Megőrzött kapcsolatok',
        'Ügyfélelégedettség',
        'Üzleti hírnév védelme',
      ],
    },
    commercialMediation: {
      title: 'Kereskedelmi Mediáció',
      description: 'Kereskedelmi mediációnk egyszerűvé teszi a pénzügyi vagy szerződéses viták megoldásának folyamatát. Alkalmazható üzleti viták, szerződéses problémák, bizonyos adósságügyek, személyi sérülési követelések, szerzői jogi és szellemi tulajdonjogi viták, valamint kis értékű követelések kezelésére.',
      benefits: [
        'Gyorsabb megoldások',
        'Csökkentett jogi díjak',
        'Fenntartott partnerkapcsolatok',
        'Titoktartás',
        'Üzleti folytonosság',
      ],
    },
    conflictCoaching: {
      title: 'Konfliktuskezelési Coaching',
      description: 'Az egyéni konfliktuskezelési coaching lehetővé teszi az egyének számára, hogy megértsék a konfliktusokat, javítsák másokkal való interakcióik hatékonyságát, és felkészüljenek a jövőbeni konfliktusokra.',
      benefits: [
        'Fokozott önismeret',
        'Jobb kapcsolatok',
        'Konfliktusra való felkészültség',
        'Személyes fejlődés',
        'Javuló kommunikációs készségek',
      ],
    },
    teamFacilitation: {
      title: 'Csapatfejlesztés',
      description: 'Csapatfejlesztési foglalkozásaink segítenek a csapatának vagy munkacsoportjának visszatérni a szokásos magas teljesítményű szintjükre: nyíltabban kommunikálni, teljesebben együttműködni és egy irányba húzni.',
      benefits: [
        'Erősebb csapatmunka',
        'Növekvő termelékenység',
        'Megújult fókusz',
        'Javuló kommunikáció',
        'Összehangolt célok',
      ],
    },
  },
  contact: {
    title: 'Kapcsolat',
    subtitle: 'Vegye fel velünk a kapcsolatot, hogy megbeszéljük, hogyan segíthetünk a vitája megoldásában.',
    form: {
      name: 'Az Ön neve',
      email: 'E-mail cím',
      phone: 'Telefonszám',
      message: 'Az Ön üzenete',
      submit: 'Üzenet küldése',
    },
    info: {
      title: 'Kapcsolati információk',
      address: 'Budapest, Magyarország',
      phone: '+36 30 2025404',
      email: 'info@harmonymediation.com',
    },
  },
  locations: {
    budapest: 'Budapest',
  },
  seo: {
    title: 'Professzionális Mediációs Szolgáltatások | Harmony Mediation',
    description: 'Szakértői mediációs szolgáltatások munkahelyi, családi, szomszédsági és kereskedelmi vitákhoz Budapesten. Oldja meg a konfliktusokat és állítsa helyre a harmóniát professzionális mediátorainkkal.',
    keywords: [
      'mediációs szolgáltatások',
      'konfliktuskezelés',
      'vitarendezés',
      'munkahelyi mediáció',
      'családi mediáció',
      'kereskedelmi mediáció',
      'budapesti mediátor',
      'professzionális mediátor',
      'mediációs cég',
    ],
  },
};

// Helper function to get translations based on locale
export function getTranslations(locale: string): Translations {
  return locale === 'hu' ? hu : en;
}
