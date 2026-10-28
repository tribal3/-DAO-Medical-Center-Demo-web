export type Lang = 'en' | 'ar'

/** Editable clinic facts — update these in one place. */
export const clinic = {
  nameEn: 'DAO Medical Center',
  nameAr: 'مركز داو الطبي',
  shortAr: 'مركز داو',
  city: 'Doha, Qatar',
  location: '8F5M+223, Doha, Qatar',
  phoneDisplay: '+974 7766 6350',
  phoneHref: 'tel:+97477666350',
  whatsapp: 'https://wa.me/97477666350',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=DAO%20Medical%20Center%2C%20Doha%2C%20Qatar',
  mapEmbed:
    'https://maps.google.com/maps?q=DAO%20Medical%20Center%2C%20Doha%2C%20Qatar&z=14&output=embed',
  /** Review information supplied from the clinic's Google Maps listing. */
  googleRating: '4.8',
  googleReviewCount: '1,230',
} as const

export type ServiceId =
  | 'dermatology'
  | 'laser'
  | 'cosmetic'
  | 'dental'
  | 'general'
  | 'cupping'
  | 'iv'
  | 'ent'

export interface ServiceCopy {
  id: ServiceId
  title: string
  description: string
  detail: string
}

export interface SiteCopy {
  meta: { title: string; description: string }
  nav: {
    home: string
    about: string
    services: string
    approach: string
    contact: string
  }
  actions: {
    book: string
    call: string
    whatsapp: string
    directions: string
    learnMore: string
    discoverApproach: string
    close: string
    menu: string
    language: string
  }
  header: {
    tagline: string
    menuTitle: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    body: string
    explore: string
    trust: [string, string, string]
    imageAlt: string
    imageCaption: string
    cardEyebrow: string
    cardTitle: string
  }
  trust: {
    eyebrow: string
    outOf: string
    reviewsLabel: string
    note: string
    cta: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    note: string
    cardCta: string
    dialogKicker: string
    dialogGoodToKnow: string
    dialogPoints: [string, string, string]
    dialogDisclaimer: string
    dialogCta: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: [string, string]
    points: { title: string; body: string }[]
    cta: string
    imageAlt: string
    detailAlt: string
    imageNote: string
    badge: string
  }
  approach: {
    eyebrow: string
    title: string
    intro: string
    steps: { number: string; title: string; body: string }[]
    note: string
  }
  appointment: {
    eyebrow: string
    title: string
    body: string
    note: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    locationLabel: string
    locationValue: string
    phoneLabel: string
    whatsappLabel: string
    enquireLabel: string
    enquireValue: string
    panelNote: string
    mapTitle: string
    mapNote: string
    mapCta: string
  }
  footer: {
    blurb: string
    exploreTitle: string
    servicesTitle: string
    contactTitle: string
    languageTitle: string
    disclaimer: string
    copyright: string
    credit: string
  }
  /** Longer, service-specific wording for the learn-more dialog. */
  serviceDetails: Record<ServiceId, string>
  servicesList: ServiceCopy[]
  whatsappMessage: string
}

const en: SiteCopy = {
  meta: {
    title: 'DAO Medical Center · Doha, Qatar',
    description:
      'Your wellbeing, our priority. Explore medical service categories, our approach and contact details for DAO Medical Center in Doha, Qatar.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Medical Services',
    approach: 'Our Approach',
    contact: 'Contact',
  },
  actions: {
    book: 'Book an Appointment',
    call: 'Call the Center',
    whatsapp: 'Enquire on WhatsApp',
    directions: 'Get Directions',
    learnMore: 'Learn More',
    discoverApproach: 'Discover Our Approach',
    close: 'Close',
    menu: 'Open menu',
    language: 'Language',
  },
  header: {
    tagline: 'Doha, Qatar',
    menuTitle: 'Menu',
  },
  hero: {
    eyebrow: 'DAO Medical Center — Doha, Qatar',
    titleLead: 'Your Wellbeing,',
    titleAccent: 'Our Priority.',
    body: 'Thoughtful medical care, modern treatments, and a welcoming team — designed around your wellbeing.',
    explore: 'Explore Our Services',
    trust: [
      'Patient-focused care',
      'Modern treatment options',
      'Convenient appointment enquiries',
    ],
    imageAlt:
      'A healthcare professional in a bright, contemporary clinical environment',
    imageCaption: 'Illustrative imagery — not a photograph of the center.',
    cardEyebrow: 'Appointments & enquiries',
    cardTitle: 'Speak with our team',
  },
  trust: {
    eyebrow: 'Rated on Google Maps',
    outOf: 'out of 5',
    reviewsLabel: 'reviews',
    note: 'Rating and review count shown as supplied in the clinic’s Google Maps listing.',
    cta: 'View on Google Maps',
  },
  services: {
    eyebrow: 'Medical Services',
    title: 'Considered care, across the specialties you need.',
    intro:
      'The service categories associated with DAO Medical Center in public listings — presented as a clear starting point for your enquiry.',
    note: 'Service categories are based on publicly listed information. Availability at this branch may vary, so please contact the center to confirm.',
    cardCta: 'Learn More',
    dialogKicker: 'Medical Services',
    dialogGoodToKnow: 'Good to know',
    dialogPoints: [
      'Our team confirms availability and appointment times directly.',
      'A consultation may be recommended before any treatment.',
      'You are welcome to ask questions before arranging a visit.',
    ],
    dialogDisclaimer:
      'This overview is general information only and is not medical advice. Please speak with a qualified clinician about your individual needs.',
    dialogCta: 'Enquire about this service',
  },
  about: {
    eyebrow: 'About DAO',
    title: 'Care That Puts You First.',
    paragraphs: [
      'At DAO Medical Center, our goal is to make exploring healthcare services and contacting our team feel clear, welcoming, and convenient.',
      'Our team is here to help you ask questions and understand your options before you visit — with straightforward guidance and a calm, unhurried approach.',
    ],
    points: [
      {
        title: 'Clear communication',
        body: 'Straightforward answers about services, availability and next steps.',
      },
      {
        title: 'Comfort-first approach',
        body: 'A considered experience, from your first enquiry onwards.',
      },
      {
        title: 'Easy to reach',
        body: 'Contact the team by phone or WhatsApp, whichever is easier for you.',
      },
    ],
    cta: 'Discover Our Approach',
    imageAlt: 'A calm, modern clinical interior with soft natural light',
    detailAlt: 'A skincare consultation in a bright treatment room',
    imageNote: 'Illustrative imagery of contemporary clinical environments.',
    badge: 'Doha, Qatar',
  },
  approach: {
    eyebrow: 'Our Approach',
    title: 'A calmer path to care.',
    intro:
      'Three simple steps, with a real person on the other side of every enquiry.',
    steps: [
      {
        number: '01',
        title: 'Explore Services',
        body: 'Browse the service categories and see what matches your needs.',
      },
      {
        number: '02',
        title: 'Contact Our Team',
        body: 'Call or message us with your question. Our team will guide you on availability and next steps.',
      },
      {
        number: '03',
        title: 'Plan Your Visit',
        body: 'Use the location details to plan your visit, and confirm your time with the team.',
      },
    ],
    note: 'Appointment requests are arranged and confirmed by our team — not automatically online.',
  },
  appointment: {
    eyebrow: 'Next step',
    title: 'Your Next Step Starts With a Conversation.',
    body: 'Have a question or want to enquire about an appointment? Contact our team directly.',
    note: 'English & Arabic enquiries welcome.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Find us in Doha.',
    intro:
      'We are happy to answer questions about services, availability and appointments.',
    locationLabel: 'Location',
    locationValue: '8F5M+223, Doha, Qatar',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    enquireLabel: 'Appointments',
    enquireValue: 'By phone or WhatsApp',
    panelNote: 'Please contact the team directly for appointment enquiries.',
    mapTitle: 'Map showing DAO Medical Center in Doha, Qatar',
    mapNote: 'Map preview provided by Google Maps.',
    mapCta: 'Open in Google Maps',
  },
  footer: {
    blurb:
      'A bilingual website concept for DAO Medical Center — a modern medical center in Doha, Qatar.',
    exploreTitle: 'Explore',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    languageTitle: 'Language',
    disclaimer:
      'Unofficial website concept created by TRIBAL³ for presentation purposes.',
    copyright: '© 2026 DAO Medical Center · Doha, Qatar',
    credit: 'Concept & design by TRIBAL³',
  },
  serviceDetails: {
    dermatology:
      'Skin health, everyday dermatology concerns and ongoing skin care discussions. Share your concern with our team, who can advise on availability and the right next step.',
    laser:
      'Laser-based treatment options discussed and planned with a clinician, following an assessment of your needs and suitability.',
    cosmetic:
      'Aesthetic procedures considered with a focus on comfort, clarity and realistic expectations. A consultation is the starting point.',
    dental:
      'General dental care and implant-related enquiries. Our team can guide you on available appointments and what to expect.',
    general:
      'A starting point for general health questions, everyday concerns and guidance on appropriate next steps or referrals.',
    cupping:
      'Traditional cupping therapy arranged following a consultation, with your comfort and suitability discussed beforehand.',
    iv: 'IV vitamin treatments, subject to clinical assessment and suitability. Speak with our team about availability and what an appointment involves.',
    ent: 'Ear, nose and throat consultations for concerns affecting hearing, breathing, sinuses or throat, with guidance on next steps.',
  },
  servicesList: [
    {
      id: 'dermatology',
      title: 'Dermatology & Skin Care',
      description:
        'Consultations for skin health and everyday dermatology concerns.',
      detail: '',
    },
    {
      id: 'laser',
      title: 'Laser Treatments',
      description:
        'Laser-based options, discussed and planned with your clinician.',
      detail: '',
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Procedures',
      description:
        'Aesthetic procedures considered with comfort and clarity at the centre.',
      detail: '',
    },
    {
      id: 'dental',
      title: 'Dental Care & Implants',
      description:
        'General dental care and implant-related enquiries in one place.',
      detail: '',
    },
    {
      id: 'general',
      title: 'General Medical Consultation',
      description:
        'A starting point for general health questions and appropriate next steps.',
      detail: '',
    },
    {
      id: 'cupping',
      title: 'Cupping Therapy',
      description: 'Traditional cupping therapy, arranged by consultation.',
      detail: '',
    },
    {
      id: 'iv',
      title: 'IV Vitamin Treatments',
      description:
        'IV vitamin therapies, subject to clinical assessment and suitability.',
      detail: '',
    },
    {
      id: 'ent',
      title: 'ENT Care',
      description:
        'Ear, nose and throat consultations, with guidance on next steps.',
      detail: '',
    },
  ],
  whatsappMessage:
    'Hello DAO Medical Center, I would like to enquire about an appointment.',
}

const ar: SiteCopy = {
  meta: {
    title: 'مركز داو الطبي · الدوحة، قطر',
    description:
      'عافيتك أولويتنا. تعرّف على فئات الخدمات الطبية ونهج المركز وبيانات التواصل مع مركز داو الطبي في الدوحة، قطر.',
  },
  nav: {
    home: 'الرئيسية',
    about: 'عن المركز',
    services: 'الخدمات الطبية',
    approach: 'نهجنا',
    contact: 'تواصل معنا',
  },
  actions: {
    book: 'احجز موعدك',
    call: 'اتصل بالمركز',
    whatsapp: 'استفسر عبر واتساب',
    directions: 'الاتجاهات إلى المركز',
    learnMore: 'اعرف المزيد',
    discoverApproach: 'اكتشف نهجنا',
    close: 'إغلاق',
    menu: 'فتح القائمة',
    language: 'اللغة',
  },
  header: {
    tagline: 'الدوحة، قطر',
    menuTitle: 'القائمة',
  },
  hero: {
    eyebrow: 'مركز داو الطبي — الدوحة، قطر',
    titleLead: 'عافيتك،',
    titleAccent: 'أولويتنا.',
    body: 'رعاية طبية مدروسة، وعلاجات حديثة، وفريق يرحّب بك — كل ذلك محوره عافيتك وراحتك.',
    explore: 'استكشف خدماتنا',
    trust: [
      'رعاية تضع المريض أولاً',
      'خيارات علاجية حديثة',
      'استفسارات مواعيد ميسّرة',
    ],
    imageAlt: 'كادر طبي في بيئة علاجية عصرية ومشرقة',
    imageCaption: 'صور توضيحية، وليست صورة لمركز داو.',
    cardEyebrow: 'المواعيد والاستفسارات',
    cardTitle: 'تحدّث مع فريقنا',
  },
  trust: {
    eyebrow: 'التقييم على خرائط Google',
    outOf: 'من 5',
    reviewsLabel: 'مراجعة',
    note: 'التقييم وعدد المراجعات كما وردا في قائمة المركز على خرائط Google.',
    cta: 'عرض على خرائط Google',
  },
  services: {
    eyebrow: 'الخدمات الطبية',
    title: 'رعاية مدروسة، ضمن التخصصات التي تحتاجها.',
    intro:
      'فئات الخدمات المرتبطة بمركز داو الطبي وفق المعلومات المنشورة للعموم، كنقطة انطلاق واضحة لاستفسارك.',
    note: 'فئات الخدمات مبنية على معلومات منشورة للعموم، وقد يختلف توفرها في هذا الفرع. يُرجى التواصل مع المركز للتأكيد.',
    cardCta: 'اعرف المزيد',
    dialogKicker: 'الخدمات الطبية',
    dialogGoodToKnow: 'معلومات مفيدة',
    dialogPoints: [
      'يؤكد فريقنا التوفر والمواعيد مباشرة.',
      'قد تُطلب استشارة قبل أي علاج.',
      'يمكنك طرح أسئلتك قبل ترتيب الزيارة.',
    ],
    dialogDisclaimer:
      'هذه النظرة العامة معلومات تعريفية فقط وليست نصيحة طبية. يُرجى استشارة مختص مؤهل بخصوص حالتك.',
    dialogCta: 'استفسر عن هذه الخدمة',
  },
  about: {
    eyebrow: 'عن داو',
    title: 'رعاية تضعك في المقام الأول.',
    paragraphs: [
      'في مركز داو الطبي، هدفنا أن تكون رحلة استكشاف الخدمات الطبية والتواصل مع فريقنا واضحة ومرحّبة وميسّرة.',
      'فريقنا هنا لمساعدتك على طرح أسئلتك وفهم خياراتك قبل الزيارة، بإرشاد واضح وأسلوب هادئ غير مستعجل.',
    ],
    points: [
      {
        title: 'تواصل واضح',
        body: 'إجابات مباشرة حول الخدمات والتوفر والخطوات التالية.',
      },
      {
        title: 'الراحة أولاً',
        body: 'تجربة مدروسة بعناية، بدءاً من أول استفسار.',
      },
      {
        title: 'تواصل ميسّر',
        body: 'تواصل مع الفريق هاتفياً أو عبر واتساب، بالطريقة الأنسب لك.',
      },
    ],
    cta: 'اكتشف نهجنا',
    imageAlt: 'مساحة علاجية حديثة وهادئة بإضاءة طبيعية',
    detailAlt: 'استشارة للعناية بالبشرة في غرفة علاج مشرقة',
    imageNote: 'صور توضيحية لبيئات علاجية معاصرة.',
    badge: 'الدوحة، قطر',
  },
  approach: {
    eyebrow: 'نهجنا',
    title: 'طريق أوضح إلى الرعاية.',
    intro: 'ثلاث خطوات بسيطة، مع شخص حقيقي يستمع لكل استفسار.',
    steps: [
      {
        number: '٠١',
        title: 'استكشف الخدمات',
        body: 'تصفّح فئات الخدمات وتعرّف على ما يناسب احتياجك.',
      },
      {
        number: '٠٢',
        title: 'تواصل مع فريقنا',
        body: 'اتصل بنا أو راسلنا بسؤالك، وسيرشدك فريقنا إلى التوفر والخطوات التالية.',
      },
      {
        number: '٠٣',
        title: 'خطّط لزيارتك',
        body: 'استخدم بيانات الموقع للتخطيط لزيارتك، وأكّد موعدك مع الفريق.',
      },
    ],
    note: 'يتم ترتيب طلبات المواعيد وتأكيدها من قبل فريقنا، ولا تُؤكد تلقائياً عبر الموقع.',
  },
  appointment: {
    eyebrow: 'الخطوة التالية',
    title: 'خطوتك التالية تبدأ بمحادثة.',
    body: 'لديك سؤال أو ترغب بالاستفسار عن موعد؟ تواصل مع فريقنا مباشرة.',
    note: 'نرحّب باستفساراتكم بالعربية والإنجليزية.',
  },
  contact: {
    eyebrow: 'تواصل معنا',
    title: 'زورونا في الدوحة.',
    intro: 'يسعدنا الإجابة عن أسئلتك حول الخدمات والتوفر والمواعيد.',
    locationLabel: 'الموقع',
    locationValue: '8F5M+223، الدوحة، قطر',
    phoneLabel: 'الهاتف',
    whatsappLabel: 'واتساب',
    enquireLabel: 'المواعيد',
    enquireValue: 'عبر الهاتف أو واتساب',
    panelNote: 'يُرجى التواصل مع الفريق مباشرة لاستفسارات المواعيد.',
    mapTitle: 'خريطة توضح موقع مركز داو الطبي في الدوحة، قطر',
    mapNote: 'معاينة الخريطة مقدمة من خرائط Google.',
    mapCta: 'فتح في خرائط Google',
  },
  footer: {
    blurb:
      'تصوّر لموقع إلكتروني ثنائي اللغة لمركز داو الطبي — مركز طبي حديث في الدوحة، قطر.',
    exploreTitle: 'استكشف',
    servicesTitle: 'الخدمات',
    contactTitle: 'تواصل',
    languageTitle: 'اللغة',
    disclaimer: 'تصوّر غير رسمي للموقع أعدّته TRIBAL³ لأغراض العرض.',
    copyright: '© 2026 مركز داو الطبي · الدوحة، قطر',
    credit: 'الفكرة والتصميم: TRIBAL³',
  },
  serviceDetails: {
    dermatology:
      'صحة البشرة والحالات الجلدية الشائعة ومتابعة العناية بالبشرة. شاركنا ما يقلقك، وسيرشدك فريقنا إلى التوفر والخطوة التالية.',
    laser:
      'خيارات العلاج بالليزر تُناقش وتُخطَّط مع الطبيب المختص بعد تقييم احتياجك ومدى ملاءمتها لك.',
    cosmetic:
      'إجراءات تجميلية تُبحث مع التركيز على الراحة والوضوح والتوقعات الواقعية، وتبدأ بالاستشارة.',
    dental:
      'رعاية أسنان عامة واستفسارات متعلقة بزراعة الأسنان. يمكن لفريقنا إرشادك إلى المواعيد المتاحة وما يمكن توقعه.',
    general:
      'نقطة انطلاق للأسئلة الصحية العامة والمخاوف اليومية، مع إرشادك إلى الخطوات المناسبة أو الإحالات اللازمة.',
    cupping:
      'جلسات حجامة تقليدية تُرتَّب بعد الاستشارة، مع مناقشة راحتك ومدى ملاءمتها مسبقاً.',
    iv: 'علاجات فيتامينات عن طريق الوريد، وفق تقييم طبي ومدى ملاءمتها. تواصل مع فريقنا للاستفسار عن التوفر وتفاصيل الموعد.',
    ent: 'استشارات الأنف والأذن والحنجرة للحالات المتعلقة بالسمع أو التنفس أو الجيوب أو الحلق، مع الإرشاد للخطوات التالية.',
  },
  servicesList: [
    {
      id: 'dermatology',
      title: 'الأمراض الجلدية والعناية بالبشرة',
      description: 'استشارات لصحة البشرة ولمتابعة الحالات الجلدية الشائعة.',
      detail: '',
    },
    {
      id: 'laser',
      title: 'علاجات الليزر',
      description: 'خيارات علاج بالليزر تُناقش وتُخطَّط مع الطبيب المختص.',
      detail: '',
    },
    {
      id: 'cosmetic',
      title: 'الإجراءات التجميلية',
      description: 'إجراءات تجميلية تُبحث مع التركيز على الراحة والوضوح.',
      detail: '',
    },
    {
      id: 'dental',
      title: 'العناية بالأسنان والزراعة',
      description: 'رعاية أسنان عامة واستفسارات زراعة الأسنان في مكان واحد.',
      detail: '',
    },
    {
      id: 'general',
      title: 'الاستشارة الطبية العامة',
      description: 'نقطة انطلاق للأسئلة الصحية العامة والخطوات المناسبة.',
      detail: '',
    },
    {
      id: 'cupping',
      title: 'علاج الحجامة',
      description: 'جلسات حجامة تقليدية تُرتَّب بعد الاستشارة.',
      detail: '',
    },
    {
      id: 'iv',
      title: 'علاجات فيتامينات الوريد',
      description: 'علاجات فيتامينات عن طريق الوريد، وفق تقييم طبي وملاءمة.',
      detail: '',
    },
    {
      id: 'ent',
      title: 'الأنف والأذن والحنجرة',
      description: 'استشارات الأنف والأذن والحنجرة مع الإرشاد للخطوات التالية.',
      detail: '',
    },
  ],
  whatsappMessage:
    'مرحباً مركز داو الطبي، أرغب بالاستفسار عن حجز موعد.',
}

export const copy: Record<Lang, SiteCopy> = { en, ar }

export const isRtl = (lang: Lang) => lang === 'ar'

/** WhatsApp deep link with a short, pre-written enquiry message. */
export const whatsappLink = (message: string) =>
  `${clinic.whatsapp}?text=${encodeURIComponent(message)}`
