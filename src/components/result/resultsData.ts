export interface ResultDataItem {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  image?: string;
  highlight?: string;
  paragraphs: string[];
  conditionalParagraphs?: string[];
  selectedConditionalParagraph?: string;
  prevButton?: string; 
  nextButton?: string;
}

const resultsData: ResultDataItem[] = [
  {
    id: "body-fat",
    icon: "⚖️",
    title: "Your Body Fat Percentage Is 16%",
    subtitle: "Here's Why That Matters",
    image: "/step1.png",
    paragraphs: [
      "Your body fat percentage gives a clearer picture than BMI alone. It tells us how much of your body is lean mass (muscle, organs, bone) vs stored fat.",
      "Too much stored fat doesn't just affect how you look — it impacts your energy, hormone balance, and ability to burn fat efficiently.",
    ],
    conditionalParagraphs: [
      "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.",
      "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.",
      "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.",
    ],
    prevButton: undefined,
    nextButton: "BMI",
  },
  {
    id: "bmi",
    icon: "📊",
    title: "Your BMI Is 8",
    subtitle: "— What That Means",
    image: "/step2.png",
    paragraphs: [
      "BMI (Body Mass Index) is a quick way to estimate how your weight might affect your health based on your height and weight.",
      "When your BMI is too high, your body may store more fat than it uses. That can slow your metabolism, drain your energy, and make fat loss harder — even if you're putting in effort.",
    ],
    conditionalParagraphs: [
      "You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.",
      "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.",
      "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.",
    ],
    prevButton: "Body Fat %",
    nextButton: "Caloric Intake",
  },
  {
    id: "calories",
    icon: "🔥",
    title: "You Should Be Eating Around",
    subtitle: "But Not All Calories Are Equal",
    highlight: "2498 Calories",
    image: "/step3.png",
    paragraphs: [
      "Your BMR (Basal Metabolic Rate) is how many calories you burn just existing. Add movement, and you get your total daily burn. Eat less than that, you lose weight. Eat more, you gain.",
      "But the type of calories matters just as much as the amount.",
      "Low-quality calories (sugar, processed foods) can cause cravings, energy crashes, and fat storage — even if you stay within your daily limit.",
    ],
    conditionalParagraphs: [
      "You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.",
      "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.",
      "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.",
    ],
    prevButton: "BMI",
    nextButton: "Hydration",
  },
  {
    id: "hydration",
    icon: "💧",
    title: "Your Body Needs 4 Cups of Water Daily",
    subtitle: "Here's Why That Matters",
    image: "/step4.png",
    paragraphs: [
      "Hydration is a fat-burning multiplier. Without enough water, your body holds onto toxins, slows digestion, and burns fat less efficiently.",
      "Even mild dehydration can feel like fatigue, hunger, or sugar cravings. You're not lazy — you're likely under-hydrated.",
    ],
    conditionalParagraphs: [
      "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.",
      "Drinking 2-6 glasses means you’re getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.",
      "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.",
      "Only Drinking Coffee or Tea? Caffeine doesn’t hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.",
    ],
    prevButton: "Caloric Intake",
    nextButton: "Weight Rate",
  },
  {
    id: "weight-rate",
    icon: "⛰️",
    title: "You Could Be Losing",
    subtitle: "With the Right Fuel Source",
    highlight: "1.7 lbs / Week",
    image: "/step5.png",
    paragraphs: [
      "Your metabolism has the potential to burn fat efficiently — but only if you're giving it the right fuel.",
      "When your body burns sugar instead of fat, weight loss stalls.",
      "The right approach can shift your metabolism from sugar-burning to fat-burning mode, making weight loss more consistent and sustainable.",
    ],
    prevButton: "Hydration",
    nextButton: "Timeline",
  },
  {
    id: "timeline",
    icon: "⏳",
    title: "You Could See Results in as Little as 30 Days",
    image: "/step6.png",
    paragraphs: [
      "Visible change doesn't take forever — when your metabolism shifts, your body can start dropping bloat, water weight, and fat surprisingly fast.",
      "It's not about how long you try — it's about whether your body's actually set up to change. The wrong plan wastes months.",
    ],
    prevButton: "Weight Rate",
    nextButton: "Next",
  },
];

export default resultsData;
