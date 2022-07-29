
export enum SurveyQuestionnaireItemType {
    SingleChoice,
    MultipleChoice,
    BlankFill
  }
  
  // when design use
  export interface SurveyQuestionnaireItem {
    _id?: string;
    title: string;
    type: SurveyQuestionnaireItemType;
    options?: string[];
  }
  export interface SurveyQuestionnaire {
    _id?: string;
    name: string;
    items: SurveyQuestionnaireItem[],
    createdTime: Date;
  }
  
  // when answer use
  export interface SurveyQuestionnaireAnswerItem {
    _id?: string; 
    answer: string;
  }
  
  export interface SurveyQuestionnaireAnswer {
    _id: string;
    questionnaire_id: string;
    answerItems: SurveyQuestionnaireAnswerItem[];
    createdTime: Date;
  }

  export interface createSurveyDto {
    user_id: string;
    name: string;
    items: SurveyQuestionnaireItem[];
  }
  
  export interface answerSurveyDto {
    questionnaire_id: string;
    answerItems: SurveyQuestionnaireAnswerItem[];
  }

  export interface SurveyCreatedByUser {
    user_id: string
  }
  export interface SurveyToDelete {
    questionnaire_id: string
  }