export interface FormState {
  gender: 'male' | 'female';
  bodyFat: number; // 0-100
  bmi: number; // 0-40
  dailyCalorieTarget: number; // >= 0
  cupsOfWater: number; // discrete counts
  weeklyWeightLossGoal: number;
  daysToSeeResults: number;
}

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

export type ResultNav = Pick<ResultDataItem, 'prevButton' | 'nextButton'>;

