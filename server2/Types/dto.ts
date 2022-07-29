import { SurveryQuestionnaireAnswerItem, SurveryQuestionnaireItem } from "./types";

export interface createSurveyDto {
  name: string;
  items: SurveryQuestionnaireItem[];
}

export interface answerSurveyDto {
  questionnaire_id: string;
  answerItems: SurveryQuestionnaireAnswerItem[];
}
