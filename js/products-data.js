/**
 * Rahul's Herbal World — Products Database
 * Add/edit products here to update the entire website automatically.
 */

const productsData = [
  {
    id: 1,
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    scientificName: 'Moringa oleifera',
    categories: ['immunity', 'nutrition', 'energy', 'daily-care'],
    badge: 'Best Seller',
    icon: '🌿',
    color: '#2d6a4f',
    bgGradient: 'linear-gradient(135deg, #d8f3dc, #b7e4c7)',
    shortDesc: 'Nature\'s superfood with 90+ nutrients, vitamins A, C, E and powerful antioxidants.',
    description: 'Moringa powder is derived from the dried leaves of the Moringa Oleifera tree, often called the "Miracle Tree" or "Tree of Life." Rich in over 90 nutrients, 46 antioxidants, and all 9 essential amino acids, it is one of the most nutrient-dense superfoods on earth. Our Moringa powder is prepared from fresh, hand-picked leaves, carefully shade-dried and ground to preserve maximum nutrition.',
    benefits: [
      'Rich in Vitamins A, C, E & K',
      'High Iron & Calcium Content',
      'Complete Protein (all 9 amino acids)',
      'Powerful Antioxidants',
      'Boosts Immune System',
      'Improves Digestion',
      'Enhances Energy & Vitality',
      'Supports Healthy Skin & Hair',
      'Anti-inflammatory Properties',
      'Helps Maintain Healthy Blood Sugar'
    ],
    ingredients: '100% Pure Moringa Oleifera Leaf Powder (Drumstick Leaves). No additives, no preservatives, no fillers.',
    usage: 'Mix 1–2 teaspoons (3–6g) in water, milk, juice, or smoothie. Best consumed in the morning on an empty stomach. Can also be added to food, soups, and curries. Start with a small amount and gradually increase.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after each use. Best consumed within 18 months from the date of manufacture.',
    image: 'https://picsum.photos/seed/moringa-lf/600/450',
    images: [
      'https://picsum.photos/seed/moringa-lf/600/450',
      'https://picsum.photos/seed/moringa-pw/600/450',
      'https://picsum.photos/seed/moringa-tree/600/450',
      'https://picsum.photos/seed/moringa-bowl/600/450'
    ],
    faqs: [
      { q: 'What is the best time to take Moringa powder?', a: 'Moringa powder is best consumed in the morning on an empty stomach for maximum nutrient absorption. You can mix it with warm water, fresh juice, or a smoothie.' },
      { q: 'Can pregnant women take Moringa powder?', a: 'Pregnant or nursing women should always consult their healthcare provider before adding any supplement to their diet.' },
      { q: 'How long before I see results?', a: 'Most people start noticing improvements in energy and digestion within 2–4 weeks of consistent daily use.' }
    ]
  },
  {
    id: 2,
    slug: 'ashwagandha-powder',
    name: 'Ashwagandha Powder',
    scientificName: 'Withania somnifera',
    categories: ['stress', 'energy', 'men-wellness', 'immunity'],
    badge: 'Popular',
    icon: '🌱',
    color: '#8b6914',
    bgGradient: 'linear-gradient(135deg, #fef9ee, #fde68a)',
    shortDesc: 'Ancient Ayurvedic adaptogen for stress relief, energy boost and hormonal balance.',
    description: 'Ashwagandha, known as the "King of Ayurvedic Herbs," has been used for over 3,000 years in traditional Indian medicine. It is a powerful adaptogen that helps the body manage stress, supports hormonal balance, and boosts overall vitality. Our Ashwagandha powder is made from high-quality roots grown in Madhya Pradesh.',
    benefits: [
      'Reduces Stress & Anxiety',
      'Boosts Energy & Stamina',
      'Supports Hormonal Balance',
      'Enhances Physical Performance',
      'Improves Sleep Quality',
      'Boosts Immunity',
      'Supports Brain Health & Memory',
      'Helps Maintain Healthy Thyroid',
      'Natural Adaptogen',
      'Anti-inflammatory Properties'
    ],
    ingredients: '100% Pure Ashwagandha Root Powder (Withania somnifera). No additives or fillers.',
    usage: 'Mix 1/2 to 1 teaspoon (2–5g) in warm milk (preferably with honey) before bed. Can also be taken with water or warm water. Consistent daily use for 4–8 weeks recommended for best results.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep tightly sealed. Best before 24 months from date of manufacture.',
    image: 'https://picsum.photos/seed/ashwagandha-root/600/450',
    images: [
      'https://picsum.photos/seed/ashwagandha-root/600/450',
      'https://picsum.photos/seed/ashwa-pwd/600/450',
      'https://picsum.photos/seed/ashwa-plant/600/450',
      'https://picsum.photos/seed/ashwa-milk/600/450'
    ],
    faqs: [
      { q: 'When should I take Ashwagandha?', a: 'Ashwagandha is most effective when taken at night with warm milk. It helps improve sleep quality and allows the body to absorb nutrients during rest.' },
      { q: 'Does Ashwagandha have side effects?', a: 'Ashwagandha is generally safe for most healthy adults. People with thyroid conditions or those on medications should consult a doctor before use.' }
    ]
  },
  {
    id: 3,
    slug: 'amla-powder',
    name: 'Amla Powder',
    scientificName: 'Phyllanthus emblica',
    categories: ['immunity', 'hair-care', 'skin-care', 'daily-care'],
    badge: 'Natural',
    icon: '🟢',
    color: '#166534',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    shortDesc: 'Highest natural Vitamin C source — for immunity, glowing skin and hair growth.',
    description: 'Amla (Indian Gooseberry) is considered the most powerful rejuvenating fruit in Ayurveda. It contains 20 times more Vitamin C than oranges and is a rich source of antioxidants. Our Amla powder is made from sun-dried fresh amla fruits and is free from any additives.',
    benefits: [
      '20x More Vitamin C than Oranges',
      'Powerful Immune Booster',
      'Promotes Hair Growth',
      'Prevents Premature Greying',
      'Improves Skin Radiance',
      'Supports Liver Health',
      'Aids Digestion',
      'Rich in Antioxidants',
      'Anti-aging Properties',
      'Balances Three Doshas (Tridosha)'
    ],
    ingredients: '100% Pure Amla Fruit Powder (Phyllanthus emblica / Indian Gooseberry).',
    usage: 'Mix 1 teaspoon in water, juice, or warm water with honey. Can be applied as a hair mask or face pack. Best taken in the morning.',
    storage: 'Store in a cool, dry place. Keep away from moisture and direct sunlight. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/amla-fruit/600/450',
    images: [
      'https://picsum.photos/seed/amla-fruit/600/450',
      'https://picsum.photos/seed/amla-powder/600/450',
      'https://picsum.photos/seed/gooseberry/600/450',
      'https://picsum.photos/seed/amla-tree/600/450'
    ],
    faqs: [
      { q: 'Can I use Amla powder for hair?', a: 'Yes! Mix Amla powder with coconut oil or water to make a hair mask. Apply to scalp and hair, leave for 30 minutes and wash off. Regular use promotes hair growth and reduces greying.' },
      { q: 'Does Amla powder taste sour?', a: 'Yes, Amla is naturally sour and slightly bitter. You can mix it with honey or juice to make it more palatable.' }
    ]
  },
  {
    id: 4,
    slug: 'neem-powder',
    name: 'Neem Powder',
    scientificName: 'Azadirachta indica',
    categories: ['skin-care', 'daily-care', 'immunity'],
    badge: 'Organic',
    icon: '🍃',
    color: '#15803d',
    bgGradient: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    shortDesc: 'Natural antibacterial herb for clear skin, blood purification and overall wellness.',
    description: 'Neem is often called the "Village Pharmacy" of India due to its wide range of medicinal properties. Rich in nimbidin, nimbin, and quercetin, Neem powder is a powerful antibacterial, antifungal and blood purifier. Our Neem powder is prepared from fresh Neem leaves carefully dried and finely ground.',
    benefits: [
      'Powerful Antibacterial & Antifungal',
      'Natural Blood Purifier',
      'Clears Acne & Pimples',
      'Reduces Skin Inflammation',
      'Supports Healthy Gums & Teeth',
      'Boosts Immunity',
      'Supports Liver Health',
      'Natural Detoxifier',
      'Anti-aging Skin Benefits',
      'Controls Blood Sugar Levels'
    ],
    ingredients: '100% Pure Neem Leaf Powder (Azadirachta indica).',
    usage: 'Internally: Mix 1/2 teaspoon in water or juice. Externally: Mix with water to form a paste for face masks or skin application. Not recommended for pregnant women.',
    storage: 'Store in a cool, dry place. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/neem-leaf/600/450',
    images: [
      'https://picsum.photos/seed/neem-leaf/600/450',
      'https://picsum.photos/seed/neem-powder/600/450',
      'https://picsum.photos/seed/neem-tree/600/450',
      'https://picsum.photos/seed/neem-skin/600/450'
    ],
    faqs: [
      { q: 'Is Neem powder safe for daily use?', a: 'Neem powder is generally safe for adults when taken in recommended quantities. Pregnant women and young children should avoid internal consumption.' }
    ]
  },
  {
    id: 5,
    slug: 'tulsi-powder',
    name: 'Tulsi Powder',
    scientificName: 'Ocimum tenuiflorum',
    categories: ['immunity', 'stress', 'daily-care'],
    badge: 'Sacred Herb',
    icon: '🌾',
    color: '#065f46',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #a7f3d0)',
    shortDesc: 'Holy Basil — the "Queen of Herbs" for immunity, respiratory health and stress relief.',
    description: 'Tulsi (Holy Basil) is considered the most sacred plant in India and is revered in Ayurveda as the "Queen of Herbs." It is a powerful adaptogen and immunomodulator, known for its remarkable healing properties. Our Tulsi powder is made from organic Tulsi leaves of three varieties: Ram Tulsi, Krishna Tulsi, and Vana Tulsi.',
    benefits: [
      'Boosts Immunity Naturally',
      'Supports Respiratory Health',
      'Natural Stress Adaptogen',
      'Antibacterial & Antiviral',
      'Promotes Healthy Digestion',
      'Anti-inflammatory',
      'Supports Heart Health',
      'Natural Detoxifier',
      'Reduces Fever',
      'Promotes Mental Clarity'
    ],
    ingredients: '100% Pure Tulsi Leaf Powder (Ocimum tenuiflorum — blend of Ram, Krishna & Vana Tulsi).',
    usage: 'Mix 1 teaspoon in warm water or tea. Can be taken 2 times daily. Also excellent as herbal kadha with ginger and honey.',
    storage: 'Store in a cool, dry place. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/tulsi-holy/600/450',
    images: [
      'https://picsum.photos/seed/tulsi-holy/600/450',
      'https://picsum.photos/seed/tulsi-powder/600/450',
      'https://picsum.photos/seed/holy-basil/600/450',
      'https://picsum.photos/seed/tulsi-tea/600/450'
    ],
    faqs: [
      { q: 'Can I mix Tulsi powder with green tea?', a: 'Yes! Tulsi powder pairs excellently with green tea, ginger tea, or any herbal tea. It enhances the flavor and adds powerful health benefits.' }
    ]
  },
  {
    id: 6,
    slug: 'giloy-powder',
    name: 'Giloy Powder',
    scientificName: 'Tinospora cordifolia',
    categories: ['immunity', 'daily-care'],
    badge: 'Immunity',
    icon: '💚',
    color: '#16a34a',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #bbf7d0)',
    shortDesc: 'The Ayurvedic "Amrit" for powerful immunity, fever management and detoxification.',
    description: 'Giloy, also known as Guduchi or "Amrit" (nectar of immortality) in Ayurveda, is one of the most potent immune-boosting herbs. It is a powerful anti-inflammatory, antipyretic, and adaptogen. Our Giloy powder is made from the stem of Giloy plant, which is considered the most medicinally potent part.',
    benefits: [
      'Powerful Immunomodulator',
      'Natural Fever Management',
      'Potent Anti-inflammatory',
      'Natural Detoxifier',
      'Supports Liver Health',
      'Helps Manage Blood Sugar',
      'Improves Digestion',
      'Reduces Oxidative Stress',
      'Boosts Memory & Cognitive Function',
      'Anti-aging Properties'
    ],
    ingredients: '100% Pure Giloy Stem Powder (Tinospora cordifolia).',
    usage: 'Mix 1/2 to 1 teaspoon in warm water or juice. Best taken in the morning on an empty stomach.',
    storage: 'Store in a cool, dry place. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/giloy-stem/600/450',
    images: [
      'https://picsum.photos/seed/giloy-stem/600/450',
      'https://picsum.photos/seed/giloy-powder/600/450',
      'https://picsum.photos/seed/giloy-herb/600/450',
      'https://picsum.photos/seed/immunity-herb/600/450'
    ],
    faqs: [
      { q: 'What does Giloy taste like?', a: 'Giloy has a slightly bitter taste. Mixing it with honey or lukewarm water with lemon makes it much more palatable.' }
    ]
  },
  {
    id: 7,
    slug: 'shatavari-powder',
    name: 'Shatavari Powder',
    scientificName: 'Asparagus racemosus',
    categories: ['womens-health', 'nutrition', 'daily-care'],
    badge: "Women's Herb",
    icon: '🌸',
    color: '#9d174d',
    bgGradient: 'linear-gradient(135deg, #fff1f2, #fecdd3)',
    shortDesc: 'The premier Ayurvedic herb for women\'s hormonal health, fertility and vitality.',
    description: 'Shatavari, meaning "she who possesses a hundred husbands," is the most important Ayurvedic herb for women\'s health. It is a powerful phytoestrogen that supports hormonal balance, reproductive health, lactation, and overall female vitality throughout all stages of life.',
    benefits: [
      'Supports Hormonal Balance',
      'Promotes Female Reproductive Health',
      'Supports Healthy Lactation',
      'Reduces Menopausal Symptoms',
      'Boosts Female Fertility',
      'Natural Adaptogen for Women',
      'Improves Digestion',
      'Supports Breast Health',
      'Reduces PMS Symptoms',
      'Boosts Overall Female Vitality'
    ],
    ingredients: '100% Pure Shatavari Root Powder (Asparagus racemosus).',
    usage: 'Mix 1 teaspoon in warm milk or water. Best taken twice daily — morning and before bed. Excellent with milk and honey.',
    storage: 'Store in a cool, dry place. Shelf life: 24 months.',
    image: 'https://picsum.photos/seed/shatavari-root/600/450',
    images: [
      'https://picsum.photos/seed/shatavari-root/600/450',
      'https://picsum.photos/seed/shatavari-plant/600/450',
      'https://picsum.photos/seed/womens-health/600/450',
      'https://picsum.photos/seed/herbal-milk/600/450'
    ],
    faqs: [
      { q: 'Can men take Shatavari?', a: 'Yes! While Shatavari is primarily known for women\'s health, men can also benefit from its adaptogenic, digestive, and immunity-boosting properties.' }
    ]
  },
  {
    id: 8,
    slug: 'triphala-powder',
    name: 'Triphala Powder',
    scientificName: 'Emblica officinalis + Terminalia chebula + Terminalia bellirica',
    categories: ['digestive', 'daily-care', 'skin-care'],
    badge: 'Ayurvedic Classic',
    icon: '⭕',
    color: '#7c3aed',
    bgGradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    shortDesc: 'The timeless three-fruit formula — the ultimate Ayurvedic digestive and detox tonic.',
    description: 'Triphala is the most widely used Ayurvedic formulation, consisting of three fruits: Amalaki (Amla), Bibhitaki, and Haritaki. It has been used for over 2,500 years as a comprehensive digestive tonic and detoxifier. The three fruits work synergistically to cleanse and rejuvenate all body systems.',
    benefits: [
      'Comprehensive Digestive Support',
      'Natural Laxative & Colon Cleanser',
      'Powerful Antioxidant Combination',
      'Detoxifies All Body Systems',
      'Balances All Three Doshas',
      'Supports Healthy Weight',
      'Improves Bowel Regularity',
      'Supports Eye Health',
      'Boosts Immunity',
      'Anti-aging Benefits'
    ],
    ingredients: 'Equal parts of: Amla (Phyllanthus emblica), Bibhitaki (Terminalia bellirica), Haritaki (Terminalia chebula).',
    usage: 'Mix 1/2 to 1 teaspoon in warm water before bed or on an empty stomach in the morning. Can also be used as a mouthwash for oral health.',
    storage: 'Store in a cool, dry place. Shelf life: 24 months.',
    image: 'https://picsum.photos/seed/triphala-fruits/600/450',
    images: [
      'https://picsum.photos/seed/triphala-fruits/600/450',
      'https://picsum.photos/seed/triphala-powder/600/450',
      'https://picsum.photos/seed/three-fruits/600/450',
      'https://picsum.photos/seed/ayurvedic-formula/600/450'
    ],
    faqs: [
      { q: 'Does Triphala cause loose stools?', a: 'Triphala is a mild laxative. Start with 1/4 teaspoon and gradually increase. Taking with warm water at night helps regulate bowel movements gently.' }
    ]
  },
  {
    id: 9,
    slug: 'wheatgrass-powder',
    name: 'Wheatgrass Powder',
    scientificName: 'Triticum aestivum',
    categories: ['nutrition', 'energy', 'daily-care'],
    badge: 'Green Superfood',
    icon: '🌾',
    color: '#4d7c0f',
    bgGradient: 'linear-gradient(135deg, #f7fee7, #d9f99d)',
    shortDesc: 'Young wheat grass — a chlorophyll-rich green superfood for energy and detox.',
    description: 'Wheatgrass is the young shoot of the wheat plant, harvested before the plant develops grain. It is one of the richest sources of chlorophyll, known as "liquid sunshine," and contains over 90 minerals, all essential vitamins, and numerous enzymes. Our Wheatgrass powder is grown organically and spray-dried at low temperatures to preserve all nutrients.',
    benefits: [
      'Rich in Chlorophyll',
      'Natural Blood Purifier',
      'High Alkalizing Properties',
      'Boosts Energy & Metabolism',
      'Supports Detoxification',
      'Rich in Iron for Anemia',
      'Improves Digestion',
      'Anti-inflammatory',
      'Supports Weight Management',
      'Enhances Skin Glow'
    ],
    ingredients: '100% Pure Wheatgrass Powder (Triticum aestivum) — Spray-dried at low temperature.',
    usage: 'Mix 1–2 teaspoons in cold water or juice. Best taken in the morning on an empty stomach. Do not mix with hot liquids as heat destroys enzymes.',
    storage: 'Store in a cool, dry place. Refrigerate after opening. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/wheatgrass-green/600/450',
    images: [
      'https://picsum.photos/seed/wheatgrass-green/600/450',
      'https://picsum.photos/seed/wheatgrass-powder/600/450',
      'https://picsum.photos/seed/green-grass/600/450',
      'https://picsum.photos/seed/green-juice/600/450'
    ],
    faqs: [
      { q: 'Is Wheatgrass powder gluten-free?', a: 'Pure Wheatgrass powder (harvested before the grain develops) is considered gluten-free. However, people with severe gluten sensitivity should consult their doctor.' }
    ]
  },
  {
    id: 10,
    slug: 'brahmi-powder',
    name: 'Brahmi Powder',
    scientificName: 'Bacopa monnieri',
    categories: ['stress', 'daily-care', 'nutrition'],
    badge: 'Brain Tonic',
    icon: '🧠',
    color: '#1d4ed8',
    bgGradient: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    shortDesc: 'The Ayurvedic brain tonic for memory, focus, stress relief and nervous system support.',
    description: 'Brahmi, named after Brahma (the God of Creation), is the premier Ayurvedic herb for brain health. Rich in bacosides and powerful antioxidants, it has been used for centuries to enhance memory, learning, and cognitive function. Our Brahmi powder is made from organically grown Bacopa monnieri plants.',
    benefits: [
      'Enhances Memory & Learning',
      'Improves Focus & Concentration',
      'Reduces Anxiety & Stress',
      'Neuroprotective Properties',
      'Promotes Sound Sleep',
      'Supports ADHD Management',
      'Anti-epileptic Properties',
      'Promotes Hair Growth',
      'Reduces Inflammation',
      'Antioxidant-rich'
    ],
    ingredients: '100% Pure Brahmi Herb Powder (Bacopa monnieri / Waterhyssop).',
    usage: 'Mix 1/2 to 1 teaspoon in warm milk or water. Best taken at bedtime or morning. Can also be massaged into scalp with oil.',
    storage: 'Store in a cool, dry place. Shelf life: 18 months.',
    image: 'https://picsum.photos/seed/brahmi-herb/600/450',
    images: [
      'https://picsum.photos/seed/brahmi-herb/600/450',
      'https://picsum.photos/seed/brahmi-plant/600/450',
      'https://picsum.photos/seed/brain-herb/600/450',
      'https://picsum.photos/seed/herbal-powder/600/450'
    ],
    faqs: [
      { q: 'Can students take Brahmi powder for exams?', a: 'Yes! Brahmi is excellent for students as it enhances memory retention, improves focus and reduces exam-related anxiety. Take consistently for 4–6 weeks for best results.' }
    ]
  }
];

const categoriesData = [
  { id: 'immunity',      name: 'Immunity Boosters',        icon: '🛡️', count: 5 },
  { id: 'hair-care',     name: 'Hair Care Powders',        icon: '💆', count: 3 },
  { id: 'skin-care',     name: 'Skin Care Powders',        icon: '✨', count: 4 },
  { id: 'womens-health', name: "Women's Health",           icon: '🌸', count: 3 },
  { id: 'men-wellness',  name: "Men's Wellness",           icon: '💪', count: 3 },
  { id: 'digestive',     name: 'Digestive Health',         icon: '🌿', count: 4 },
  { id: 'energy',        name: 'Energy & Nutrition',       icon: '⚡', count: 4 },
  { id: 'daily-care',    name: 'Ayurvedic Daily Care',     icon: '🏺', count: 6 },
];

const testimonialsData = [
  {
    name: 'Priya Sharma',
    location: 'New Delhi',
    avatar: 'P',
    rating: 5,
    product: 'Moringa Powder',
    text: 'I have been using Rahul\'s Moringa powder for 3 months now. My energy levels have improved significantly and my skin looks much healthier. The quality is exceptional and the packaging is very good. Highly recommend!'
  },
  {
    name: 'Amit Verma',
    location: 'Mumbai',
    avatar: 'A',
    rating: 5,
    product: 'Ashwagandha Powder',
    text: 'The Ashwagandha powder is absolutely pure and effective. I noticed a reduction in my stress levels within just 2 weeks. Rahul is very responsive and the delivery was fast. Will definitely order again.'
  },
  {
    name: 'Sunita Devi',
    location: 'Jaipur',
    avatar: 'S',
    rating: 5,
    product: 'Amla Powder',
    text: 'Best Amla powder I have ever used! My hair fall has reduced drastically and my skin is glowing. The powder is very fine and pure. Rahul provides excellent customer service and genuine products.'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    avatar: 'R',
    rating: 5,
    product: 'Triphala Powder',
    text: 'I struggled with digestion issues for years. After using Rahul\'s Triphala powder for 6 weeks, my digestion has improved tremendously. The product is pure and effective. Great value for money!'
  },
  {
    name: 'Kavita Patel',
    location: 'Ahmedabad',
    avatar: 'K',
    rating: 5,
    product: 'Shatavari Powder',
    text: 'Shatavari powder has been a game-changer for my hormonal health. I feel more balanced and energetic. Rahul\'s products are genuinely organic and you can feel the difference in quality. Excellent!'
  },
  {
    name: 'Deepak Singh',
    location: 'Lucknow',
    avatar: 'D',
    rating: 5,
    product: 'Tulsi Powder',
    text: 'The Tulsi powder is incredibly aromatic and pure. It has helped my family stay healthy during the monsoon season. Rahul\'s prices are very reasonable compared to other sellers. 100% recommend!'
  }
];

const faqsData = [
  {
    q: 'How should herbal powders be consumed?',
    a: 'Most herbal powders can be mixed with warm water, milk, juice or smoothies. The ideal method depends on the specific herb. Always follow the usage instructions on the product page and start with a smaller quantity to allow your body to adjust.'
  },
  {
    q: 'Are these products 100% organic and natural?',
    a: 'Yes, all our herbal powders are made from 100% natural ingredients with no additives, preservatives, artificial colors or fillers. We source herbs from trusted organic farms and process them carefully to preserve their natural properties.'
  },
  {
    q: 'What is the shelf life of herbal powders?',
    a: 'Most of our herbal powders have a shelf life of 18–24 months from the date of manufacture when stored properly. Always check the best-before date on the packaging and store in a cool, dry place.'
  },
  {
    q: 'How should herbal powders be stored?',
    a: 'Store in a cool, dry place away from direct sunlight and moisture. Always keep the lid tightly closed after use. Avoid storing near the stove or in humid areas. Some powders (like Wheatgrass) should be refrigerated after opening.'
  },
  {
    q: 'Can everyone consume herbal powders?',
    a: 'While herbal powders are natural and generally safe, they may not be suitable for everyone. Pregnant women, nursing mothers, children under 12, and people with specific medical conditions or on medications should consult a healthcare professional before use.'
  },
  {
    q: 'How do I place an order or enquire about products?',
    a: 'You can enquire by filling our contact form, calling or messaging on WhatsApp: 8587071499. We respond within a few hours. Rahul personally ensures every customer gets the right guidance for their health needs.'
  },
  {
    q: 'Is lab testing done on these products?',
    a: 'Yes, our herbal powders undergo quality checks to ensure purity, potency and safety. We maintain strict quality standards throughout our sourcing and processing to deliver the best herbal products to our customers.'
  },
  {
    q: 'Can I mix multiple herbal powders together?',
    a: 'Some herbal powders can be safely combined, but it is best to consult Rahul or a qualified Ayurvedic practitioner before combining herbs to ensure compatibility and appropriate dosages for your specific health goals.'
  }
];

// Helper to get product by slug
function getProductBySlug(slug) {
  return productsData.find(p => p.slug === slug) || null;
}

// Helper to get products by category
function getProductsByCategory(category) {
  if (category === 'all') return productsData;
  return productsData.filter(p => p.categories.includes(category));
}

// Helper to get related products (same category, different product)
function getRelatedProducts(currentSlug, limit = 3) {
  const current = getProductBySlug(currentSlug);
  if (!current) return productsData.slice(0, limit);
  return productsData
    .filter(p => p.slug !== currentSlug && p.categories.some(c => current.categories.includes(c)))
    .slice(0, limit);
}
