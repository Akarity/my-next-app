import imagePaths from './imagePaths';

// Define the structure of our service data
export interface Service {
  id: string;
  slug: {
    en: string;
    hu: string;
  };
  title: {
    en: string;
    hu: string;
  };
  shortDescription: {
    en: string;
    hu: string;
  };
  fullDescription: {
    en: string;
    hu: string;
  };
  benefits: {
    en: string[];
    hu: string[];
  };
  icon: string; // SVG icon name
  image: string; // Image path
}

// Define all services
export const services: Service[] = [
  {
    id: 'workplace-mediation',
    slug: {
      en: 'workplace-mediation',
      hu: 'munkahelyi-mediacio',
    },
    title: {
      en: 'Workplace Mediation',
      hu: 'Munkahelyi Mediáció',
    },
    shortDescription: {
      en: 'Resolve workplace conflicts and improve team dynamics.',
      hu: 'Munkahelyi konfliktusok megoldása és a csapatdinamika javítása.',
    },
    fullDescription: {
      en: 'Our workplace mediation service can be used for disputes involving up to three parties, as well as entire groups and teams. Issues could include personality clashes, miscommunications, grievance-type issues, and low-level cases of bullying and harassment.',
      hu: 'Munkahelyi mediációs szolgáltatásunk akár három fél közötti vitákra, valamint teljes csoportokra és csapatokra is alkalmazható. A problémák közé tartozhatnak a személyiségi összeütközések, félreértések, panasz jellegű problémák, valamint az alacsony szintű zaklatási esetek.',
    },
    benefits: {
      en: [
        'Improved communication',
        'Restored trust',
        'Healthier work environment',
        'Increased productivity',
        'Reduced stress and anxiety',
      ],
      hu: [
        'Javuló kommunikáció',
        'Helyreállított bizalom',
        'Egészségesebb munkakörnyezet',
        'Növekvő termelékenység',
        'Csökkent stressz és szorongás',
      ],
    },
    icon: 'workplace',
    image: imagePaths['workplace'],
  },
  {
    id: 'neighbourhood-mediation',
    slug: {
      en: 'neighbourhood-mediation',
      hu: 'szomszedsagi-mediacio',
    },
    title: {
      en: 'Neighbourhood Mediation',
      hu: 'Szomszédsági Mediáció',
    },
    shortDescription: {
      en: 'Resolve disputes between neighbors and create a peaceful community.',
      hu: 'Szomszédok közötti viták megoldása és békés közösség kialakítása.',
    },
    fullDescription: {
      en: 'Our neighbourhood mediation service can help neighbours to get back on good terms. Issues that mediation can resolve include boundary disputes, anti-social behaviour, fall outs over parking and upkeep of communal areas, and general interpersonal conflicts.',
      hu: 'Szomszédsági mediációs szolgáltatásunk segíthet a szomszédoknak, hogy újra jó viszonyba kerüljenek. A mediáció olyan problémákat oldhat meg, mint a határviták, antiszociális viselkedés, parkolási és közös területek karbantartásával kapcsolatos nézeteltérések, valamint általános személyközi konfliktusok.',
    },
    benefits: {
      en: [
        'Reduced tension',
        'Better communication',
        'Stronger community',
        'Peaceful living environment',
        'Long-term solutions',
      ],
      hu: [
        'Csökkent feszültség',
        'Jobb kommunikáció',
        'Erősebb közösség',
        'Békés lakókörnyezet',
        'Hosszú távú megoldások',
      ],
    },
    icon: 'neighbourhood',
    image: imagePaths['neighbourhood'],
  },
  {
    id: 'tenancy-mediation',
    slug: {
      en: 'tenancy-mediation',
      hu: 'berleti-mediacio',
    },
    title: {
      en: 'Tenancy Mediation',
      hu: 'Bérleti Mediáció',
    },
    shortDescription: {
      en: 'Resolve disputes between tenants and landlords.',
      hu: 'Bérlők és bérbeadók közötti viták megoldása.',
    },
    fullDescription: {
      en: 'Our tenancy mediation service can help to resolve interpersonal disputes between tenants and landlords. Potential reasons for conflict could include rent arrears, maintenance issues, upkeep of communal areas, and disagreements over responsibilities.',
      hu: 'Bérleti mediációs szolgáltatásunk segíthet a bérlők és bérbeadók közötti személyközi viták megoldásában. A konfliktus lehetséges okai lehetnek a bérleti díj hátralékok, karbantartási problémák, közös területek fenntartása és a felelősségi körökkel kapcsolatos nézeteltérések.',
    },
    benefits: {
      en: [
        'Fair resolutions',
        'Preserved relationships',
        'Avoided legal costs',
        'Clear communication',
        'Mutual understanding',
      ],
      hu: [
        'Méltányos megoldások',
        'Megőrzött kapcsolatok',
        'Elkerült jogi költségek',
        'Egyértelmű kommunikáció',
        'Kölcsönös megértés',
      ],
    },
    icon: 'tenancy',
    image: imagePaths['tenancy'],
  },
  {
    id: 'family-mediation',
    slug: {
      en: 'family-mediation',
      hu: 'csaladi-mediacio',
    },
    title: {
      en: 'Family Mediation',
      hu: 'Családi Mediáció',
    },
    shortDescription: {
      en: 'Resolve family conflicts and improve relationships.',
      hu: 'Családi konfliktusok megoldása és a kapcsolatok javítása.',
    },
    fullDescription: {
      en: 'Our family mediation service can help families who want to stay together, but is not suitable for those who are in the process of divorcing. Mediation can be used to resolve communication breakdowns between family members, personality clashes, and conflict arising from critical incidents.',
      hu: 'Családi mediációs szolgáltatásunk segíthet azoknak a családoknak, akik együtt akarnak maradni, de nem alkalmas azok számára, akik válófélben vannak. A mediáció segíthet a családtagok közötti kommunikációs problémák, személyiségi összeütközések és kritikus eseményekből eredő konfliktusok megoldásában.',
    },
    benefits: {
      en: [
        'Renewed understanding',
        'Healed relationships',
        'Family unity',
        'Improved communication',
        'Emotional healing',
      ],
      hu: [
        'Megújult megértés',
        'Gyógyult kapcsolatok',
        'Családi egység',
        'Javuló kommunikáció',
        'Érzelmi gyógyulás',
      ],
    },
    icon: 'family',
    image: '/images/a family of four sitting on the ground in the woods, surrounded by lush greenery and tall trees. The sun is shining through the trees, casting a warm glow on the family.jpg',
  },
  {
    id: 'medical-mediation',
    slug: {
      en: 'medical-mediation',
      hu: 'orvosi-mediacio',
    },
    title: {
      en: 'Medical Mediation',
      hu: 'Orvosi Mediáció',
    },
    shortDescription: {
      en: 'Resolve disputes between medical professionals and patients.',
      hu: 'Orvosi szakemberek és betegek közötti viták megoldása.',
    },
    fullDescription: {
      en: 'Our medical mediation service helps to build better dialogue between medical professionals and patients and/or patients\' families. It can address disputes around receiving bad news, critical care choices, care not meeting expectations, and ethical issues around religious or cultural beliefs.',
      hu: 'Orvosi mediációs szolgáltatásunk segít jobb párbeszédet kialakítani az egészségügyi szakemberek és a betegek és/vagy a betegek családjai között. Olyan vitákat kezelhet, mint a rossz hírek közlése, kritikus ellátási döntések, az elvárásoknak nem megfelelő ellátás, valamint a vallási vagy kulturális meggyőződésekkel kapcsolatos etikai kérdések.',
    },
    benefits: {
      en: [
        'Greater understanding',
        'Reduced stress',
        'Collaborative solutions',
        'Improved patient care',
        'Ethical resolution',
      ],
      hu: [
        'Nagyobb megértés',
        'Csökkent stressz',
        'Együttműködő megoldások',
        'Javuló betegellátás',
        'Etikai megoldás',
      ],
    },
    icon: 'medical',
    image: '/images/A man and a woman sitting at a table in front of a projector screen.jpg',
  },
  {
    id: 'complaints-mediation',
    slug: {
      en: 'complaints-mediation',
      hu: 'panaszkezelesi-mediacio',
    },
    title: {
      en: 'Complaints Mediation',
      hu: 'Panaszkezelési Mediáció',
    },
    shortDescription: {
      en: 'Resolve complaints without going to court.',
      hu: 'Panaszok megoldása bíróság nélkül.',
    },
    fullDescription: {
      en: 'Our complaints mediation service can help resolve complaints without the need for going to court. The service can address faulty or mis-sold goods, services not meeting expectations, unsatisfactory treatment of a customer, or breakdowns in communication.',
      hu: 'Panaszkezelési mediációs szolgáltatásunk segíthet a panaszok bíróság nélküli megoldásában. A szolgáltatás olyan problémákat kezelhet, mint a hibás vagy félreértékesített áruk, az elvárásoknak nem megfelelő szolgáltatások, az ügyfelek nem megfelelő kezelése vagy a kommunikáció megszakadása.',
    },
    benefits: {
      en: [
        'Quick resolutions',
        'Cost savings',
        'Preserved relationships',
        'Customer satisfaction',
        'Business reputation protection',
      ],
      hu: [
        'Gyors megoldások',
        'Költségmegtakarítás',
        'Megőrzött kapcsolatok',
        'Ügyfélelégedettség',
        'Üzleti hírnév védelme',
      ],
    },
    icon: 'complaints',
    image: '/images/a man and woman standing in an office, talking to each other. The office is filled with house plants, a wall, and a glass window.jpg',
  },
  {
    id: 'commercial-mediation',
    slug: {
      en: 'commercial-mediation',
      hu: 'kereskedelmi-mediacio',
    },
    title: {
      en: 'Commercial Mediation',
      hu: 'Kereskedelmi Mediáció',
    },
    shortDescription: {
      en: 'Resolve business and commercial disputes efficiently.',
      hu: 'Üzleti és kereskedelmi viták hatékony megoldása.',
    },
    fullDescription: {
      en: 'Our commercial mediation can keep the process of resolving financial or contractual disputes simple. It can be used to address business disputes, contractual issues, certain cases of debt, personal injury claims, copyright and IP disputes, and small claims.',
      hu: 'Kereskedelmi mediációnk egyszerűvé teszi a pénzügyi vagy szerződéses viták megoldásának folyamatát. Alkalmazható üzleti viták, szerződéses problémák, bizonyos adósságügyek, személyi sérülési követelések, szerzői jogi és szellemi tulajdonjogi viták, valamint kis értékű követelések kezelésére.',
    },
    benefits: {
      en: [
        'Faster resolutions',
        'Reduced legal fees',
        'Maintained partnerships',
        'Confidentiality',
        'Business continuity',
      ],
      hu: [
        'Gyorsabb megoldások',
        'Csökkentett jogi díjak',
        'Fenntartott partnerkapcsolatok',
        'Titoktartás',
        'Üzleti folytonosság',
      ],
    },
    icon: 'commercial',
    image: '/images/a man and woman sitting at a table, holding hands. On the table there are cups and a flower vase, and in the background there is a window.jpg',
  },
  {
    id: 'conflict-coaching',
    slug: {
      en: 'conflict-coaching',
      hu: 'konfliktuskezelesi-coaching',
    },
    title: {
      en: 'Conflict Coaching',
      hu: 'Konfliktuskezelési Coaching',
    },
    shortDescription: {
      en: 'Develop skills to handle conflicts effectively.',
      hu: 'Készségek fejlesztése a konfliktusok hatékony kezeléséhez.',
    },
    fullDescription: {
      en: 'One-to-one Conflict Coaching sessions allow individuals to develop an understanding of conflict, to enhance the effectiveness of their interactions with others, and to prepare them for future conflicts that could arise.',
      hu: 'Az egyéni konfliktuskezelési coaching lehetővé teszi az egyének számára, hogy megértsék a konfliktusokat, javítsák másokkal való interakcióik hatékonyságát, és felkészüljenek a jövőbeni konfliktusokra.',
    },
    benefits: {
      en: [
        'Enhanced self-awareness',
        'Better relationships',
        'Conflict readiness',
        'Personal growth',
        'Improved communication skills',
      ],
      hu: [
        'Fokozott önismeret',
        'Jobb kapcsolatok',
        'Konfliktusra való felkészültség',
        'Személyes fejlődés',
        'Javuló kommunikációs készségek',
      ],
    },
    icon: 'coaching',
    image: '/images/a woman sitting on the floor, engrossed in a book she is holding in her hands. On the left side of the image, there is a basket filled with books.jpg',
  },
  {
    id: 'team-facilitation',
    slug: {
      en: 'team-facilitation',
      hu: 'csapatfejlesztes',
    },
    title: {
      en: 'Team Facilitation',
      hu: 'Csapatfejlesztés',
    },
    shortDescription: {
      en: 'Improve team dynamics and collaboration.',
      hu: 'Csapatdinamika és együttműködés javítása.',
    },
    fullDescription: {
      en: 'Our team facilitation sessions will get your team or work group back up to their usual high-performing standards: communicating more openly, collaborating more fully, and all pulling in the same direction.',
      hu: 'Csapatfejlesztési foglalkozásaink segítenek a csapatának vagy munkacsoportjának visszatérni a szokásos magas teljesítményű szintjükre: nyíltabban kommunikálni, teljesebben együttműködni és egy irányba húzni.',
    },
    benefits: {
      en: [
        'Stronger teamwork',
        'Increased productivity',
        'Renewed focus',
        'Improved communication',
        'Aligned goals',
      ],
      hu: [
        'Erősebb csapatmunka',
        'Növekvő termelékenység',
        'Megújult fókusz',
        'Javuló kommunikáció',
        'Összehangolt célok',
      ],
    },
    icon: 'team',
    image: '/images/four women sitting around a table in a coffee shop, smiling and engaged in conversation. On the table there are mobile phones, a book, a glass with a drink in it.jpg',
  },
];

// Helper function to get a service by ID
export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

// Helper function to get a service by slug
export function getServiceBySlug(slug: string, locale: string): Service | undefined {
  return services.find(service => 
    service.slug[locale as keyof typeof service.slug] === slug
  );
}

// Helper function to get all services
export function getAllServices(): Service[] {
  return services;
}

// Define the structure of our location data
export interface Location {
  id: string;
  slug: {
    en: string;
    hu: string;
  };
  name: {
    en: string;
    hu: string;
  };
}

// Define all locations
export const locations: Location[] = [
  {
    id: 'budapest',
    slug: {
      en: 'budapest',
      hu: 'budapest',
    },
    name: {
      en: 'Budapest',
      hu: 'Budapest',
    },
  },
];

// Helper function to get a location by ID
export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id);
}

// Helper function to get a location by slug
export function getLocationBySlug(slug: string, locale: string): Location | undefined {
  return locations.find(location => 
    location.slug[locale as keyof typeof location.slug] === slug
  );
}

// Helper function to get all locations
export function getAllLocations(): Location[] {
  return locations;
}
