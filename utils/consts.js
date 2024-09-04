export const textColors = {
  MANGO: "#dfd434",
  LEMON: "#308918",
};

export const with3DModel = ["MANGO", "LEMON"];

export const flavorData = [
  {
    title: "LEMON",
    description:
      "The Lemon flavor is a classic, with a zesty and refreshing taste that is perfect for a hot summer day.",
    id: 1,
    quanity: "250ML",
    ingredients:
      " Carbonated water, Sugar, Stevia (INS 960), Acidity Regulator (INS 330), Class II Preservative (INS 211), Ascorbic Acid (Vit C), Niacin (Vit B3), Lemon Juice (1.8%), Mineral Salts, Vitamin premix (B2, B6, B12)",
  },
  {
    title: "MANGO",
    description:
      "The Mango flavor is a tropical delight, with a sweet and tangy taste that is sure to please your taste buds.",
    id: 2,
    quanity: "250ML",
    ingredients:
      "Carbonated water, Sugar, Stevia (INS 960), Acidity Regulators (INS 330, INS 331), Class II Preservative (INS 211), Ascorbic Acid (Vit C), Niacin (Vit B3), LCLT (6 mg/ 100 ml), Inositol (2 mg / 100 ml), Mix Fruit Juice from Pulp (2%) (Mango, Guava, Apple, Passion Fruit, Apricot, Peach, Lemon), Mineral Salts, Stabiliser (INS415), Vitamin Premix (B2, B6, B12)",
  },
];

export const whyUs = [
  {
    title: "Balanced Nutrition and Flavor",
    description:
      "Hydroshark is India’s first carbonated hydration drink that perfectly balances essential nutrients with delicious flavor. Our tasty formula makes healthy hydration enjoyable.",
    image: "/icons1.png",
  },
  {
    title: "Advanced Hydration Formula",
    description:
      "Our specially curated blend of vitamins, minerals, and electrolytes ensures ultimate and quicker hydration. This unique combination keeps you hydrated and energized all day.",
    image: "/icons2.png",
  },
  {
    title: "Comprehensive Well-being",
    description:
      "Hydroshark supports not just physical replenishment but also mental and emotional well-being. Our drink acts as a mood lifter, helping you feel better overall.",
    image: "/icons3.png",
  },
  {
    title: "Quality Ingredients",
    description:
      "We are committed to using only the highest quality raw materials. Our ingredients are sourced globally, including Indian Sugarcane, Stevia from Malaysia and world-famous Indian Mangoes. This ensures that only the best reaches our consumers.",
    image: "/icons4.png",
  },
  {
    title: "Healthier Choice",
    description:
      "By eliminating caffeine and reducing sugar content with stevia, Hydroshark offers a lower-calorie alternative suitable for everyone. We focus on providing a healthy and refreshing drink without compromising on taste.",
    image: "/icons5.png",
  },
  {
    title: "Top-Grade Production Standards",
    description:
      "Our production plant meets the standards of major beverage brands, ensuring no compromise on quality. For us, the health of our consumers is paramount.",
    image: "/icons6.png",
  },
];

export const products = [
  {
    title: "LEMON",
    description:
      "The Lemon flavor is a classic, with a zesty and refreshing taste that is perfect for a hot summer day.",
    id: 1,
    longdescription:
      "With Hydroshark Lemon, experience the invigorating burst of citrus that not only quenches your thirst but also revitalizes your mind and body. Enjoy the crisp, clean taste that hydrates you with essential vitamins, minerals, and electrolytes, ensuring you stay at your best all day long.",
    quanity: "250ML",
    image: "/lemoncan.webp",
    ingredients:
      " Carbonated water, Sugar, Stevia (INS 960), Acidity Regulator (INS 330), Class II Preservative (INS 211), Ascorbic Acid (Vit C), Niacin (Vit B3), Lemon Juice (1.8%), Mineral Salts, Vitamin premix (B2, B6, B12)",
    price: 99,
    type: "bottle",
    productSections: [
      {
        quantities: 4,
        originalPrice: 320,
        discountedPrice: 304,
        discount: 5,
        description: "4 pcs",
        hydrosharkPoints: 25,
      },
      {
        quantities: 6,
        originalPrice: 480,
        discountedPrice: 450,
        discount: 7.5,
        description: "6 pcs",
        hydrosharkPoints: 40,
      },
      {
        quantities: 24,
        originalPrice: 1920,
        discountedPrice: 1728,
        discount: 10,
        description: "24 pcs",
        hydrosharkPoints: 150,
      },
    ],
  },
  {
    title: "MANGO",
    description:
      "The Mango flavor is a tropical delight, with a sweet and tangy taste that is sure to please your taste buds.",
    id: 2,
    longdescription:
      "Hydroshark Mango offers more than just great taste; it provides a powerful blend of vitamins, minerals, and electrolytes designed for ultimate hydration and energy. Embrace the vibrant, fruity experience that not only quenches your thirst but also lifts your spirits and boosts your vitality.",
    quanity: "250ML",
    image: "/mangocan.webp",
    ingredients:
      "Carbonated water, Sugar, Stevia (INS 960), Acidity Regulators (INS 330, INS 331), Class II Preservative (INS 211), Ascorbic Acid (Vit C), Niacin (Vit B3), LCLT (6 mg/ 100 ml), Inositol (2 mg / 100 ml), Mix Fruit Juice from Pulp (2%) (Mango, Guava, Apple, Passion Fruit, Apricot, Peach, Lemon), Mineral Salts, Stabiliser (INS415), Vitamin Premix (B2, B6, B12)",
    price: 99,
    type: "bottle",
    productSections: [
      {
        quantities: 4,
        originalPrice: 320,
        discountedPrice: 304,
        discount: 5,
        description: "4 pcs",
        hydrosharkPoints: 25,
      },
      {
        quantities: 6,
        originalPrice: 480,
        discountedPrice: 450,
        discount: 7.5,
        description: "6 pcs",
        hydrosharkPoints: 40,
      },
      {
        quantities: 24,
        originalPrice: 1920,
        discountedPrice: 1728,
        discount: 10,
        description: "24 pcs",
        hydrosharkPoints: 150,
      },
    ],
  },
  // {
  //   title: "GYM T-SHIRT",
  //   description: "HYDROSHARK",
  //   id: 3,
  //   quanity: "1 PC",
  //   image: "/tshirt.png",
  //   price: 499,
  //   type: "merch",
  // },
  // {
  //   title: "LEMON CRATE",
  //   description: "HYDROSHARK",
  //   id: 4,
  //   quanity: "250ML X 12",
  //   image: "/cratelemon.png",
  //   price: 499,
  //   type: "crate",
  // },
  // {
  //   title: "MANGO CRATE",
  //   description: "HYDROSHARK",
  //   id: 5,
  //   quanity: "250ML X 12",
  //   image: "/cratemango.png",
  //   price: 1199,
  //   type: "crate",
  // },
];

export const testimonials = [
  {
    name: "Rahul",
    description:
      "I love the taste of Hydroshark. It’s refreshing and keeps me energized throughout the day. I feel more focused and active since I started drinking it.",
    image: "/rahul.png",
  },
  {
    name: "Anjali",
    description:
      "Hydroshark has become my go-to drink. The Mango flavor is my favorite. It's delicious and keeps me hydrated during my workouts.",
    image: "/anjali.png",
  },
  {
    name: "Sandeep",
    description:
      "I’m a big fan of Hydroshark. The Lemon flavor is so refreshing and tasty. It's the perfect drink to beat the heat and stay hydrated.",
    image: "/sandeep.png",
  },
  {
    name: "Neha",
    description:
      "Hydroshark is my daily drink. It's delicious and keeps me hydrated all day long. I love the Mango flavor. It's so refreshing and energizing.",
    image: "/neha.png",
  },
];

export const comments = [
  {
    name: "Rahul",
    description:
      "I love the taste of Hydroshark. It's refreshing and keeps me energized throughout the day. I feel more focused and active since I started drinking it.",
    rating: 3,
  },
  {
    name: "Anjali",
    description:
      "Hydroshark has become my go-to drink. The Mango flavor is my favorite. It's delicious and keeps me hydrated during my workouts.",
    rating: 5,
  },
  {
    name: "Sandeep",
    description:
      "I'm a big fan of Hydroshark. The Lemon flavor is so refreshing and tasty. It's the perfect drink to beat the heat and stay hydrated.",
    rating: 4,
  },
  {
    name: "Neha",
    description:
      "Hydroshark is my daily drink. It's delicious and keeps me hydrated all day long. I love the Mango flavor. It's so refreshing and energizing.",
    rating: 5,
  },
];

export const FAQ = [
  {
    question: "What is Hydroshark?",
    answer:
      "Hydroshark is India’s first carbonated hydration drink, offering a healthy and delicious alternative to traditional energy drinks. It combines essential vitamins, salts, and electrolytes with a refreshing, bubbly twist.",
  },
  {
    question: "Why choose Hydroshark over other drinks?",
    answer:
      "Hydroshark prioritizes both taste and your well-being. It's low in sugar, using stevia as a natural sweetener, and caffeine-free, making it a healthier option than sugary energy drinks or sodas.",
  },
  {
    question: "How does Hydroshark benefit my health?",
    answer:
      "Hydroshark is designed to support your physical and mental well-being. Its unique formula provides ultimate hydration with a blend of vitamins, minerals, and electrolytes, boosting energy levels and promoting overall health.",
  },
  {
    question: "Is Hydroshark suitable for everyone?",
    answer:
      "Yes! Hydroshark is a refreshing, low-calorie drink suitable for everyone. Whether you're an athlete, a student, or just looking for a healthy and flavourful beverage, Hydroshark fits your lifestyle.",
  },
  {
    question: "Why is Hydroshark better for me than energy drinks?",
    answer:
      "Hydroshark is caffeine-free, low in sugar, and contains vitamins and minerals. Energy drinks are often packed with sugar and caffeine, which can have negative impacts on your health.",
  },
  {
    question: "Why should I choose Hydroshark?",
    answer:
      "Hydroshark is the first Indian brand to combine a sports drink with carbonation. We are dedicated to creating a healthy and delicious drink, using high-quality ingredients and advanced hydration formulas. We support a healthy lifestyle and want to see you achieve your personal best.",
  },
];
