
export enum SurveryQuestionnaireItemType {
  SingleChoice,
  MultipleChoice,
  BlankFill
}

// when design use
export interface SurveryQuestionnaireItem {
  _id: string;
  title: string;
  type: SurveryQuestionnaireItemType;
  options?: string[];
}
export interface SurveryQuestionnaire {
  _id: string;
  name: string;
  items: SurveryQuestionnaireItem[],
  createdTime: Date;
  user_id: String;
}

// when answer use
export interface SurveryQuestionnaireAnswerItem {
  _id: string;
  answer: string;
}

export interface SurveryQuestionnaireAnswer {
  _id: string;
  questionnaire_id: string;
  answerItems: SurveryQuestionnaireAnswerItem[];
  createdTime: Date;
}