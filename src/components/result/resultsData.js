const resultsData = [
  {
    id: "body-fat",
    icon: "⚖️",
    title: "Your Body Fat Percentage Is 16%",
    subtitle: "Here's Why That Matters",
    image: "/step1.png",
    paragraphs: [
      "Your body fat percentage gives a clearer picture than BMI alone. It tells us how much of your body is lean mass (muscle, organs, bone) vs stored fat.",
      "Too much stored fat doesn't just affect how you look — it impacts your energy, hormone balance, and ability to burn fat efficiently."
    ],
    prevButton: null,
    nextButton: "BMI"
  },
  {
    id: "bmi",
    icon: "📊",
    title: "Your BMI Is 8",
    subtitle: "— What That Means",
    image: "/step2.png",
    paragraphs: [
      "BMI (Body Mass Index) is a quick way to estimate how your weight might affect your health based on your height and weight.",
      "When your BMI is too high, your body may store more fat than it uses. That can slow your metabolism, drain your energy, and make fat loss harder — even if you're putting in effort."
    ],
    prevButton: "Body Fat %",
    nextButton: "Caloric Intake"
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
      "Low-quality calories (sugar, processed foods) can cause cravings, energy crashes, and fat storage — even if you stay within your daily limit."
    ],
    prevButton: "BMI",
    nextButton: "Hydration"
  },
  {
    id: "hydration",
    icon: "💧",
    title: "Your Body Needs 4 Cups of Water Daily",
    subtitle: "Here's Why That Matters",
    image: "/step4.png",
    paragraphs: [
      "Hydration is a fat-burning multiplier. Without enough water, your body holds onto toxins, slows digestion, and burns fat less efficiently.",
      "Even mild dehydration can feel like fatigue, hunger, or sugar cravings. You're not lazy — you're likely under-hydrated."
    ],
    prevButton: "Caloric Intake",
    nextButton: "Weight Rate"
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
      "The right approach can shift your metabolism from sugar-burning to fat-burning mode, making weight loss more consistent and sustainable."
    ],
    prevButton: "Hydration",
    nextButton: "Timeline"
  },
  {
    id: "timeline",
    icon: "⏳",
    title: "You Could See Results in as Little as 30 Days",
    image: "/step6.png",
    paragraphs: [
      "Visible change doesn't take forever — when your metabolism shifts, your body can start dropping bloat, water weight, and fat surprisingly fast.",
      "It's not about how long you try — it's about whether your body's actually set up to change. The wrong plan wastes months."
    ],
    prevButton: "Weight Rate",
    nextButton:  "Next"
  }
];

export default resultsData;
