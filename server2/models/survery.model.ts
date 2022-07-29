import mongoose from 'mongoose';
import { SurveryQuestionnaire } from '../Types/types';

const SurveySchema = new mongoose.Schema<SurveryQuestionnaire>({
  name: {
      type: String,
      required: true
  },
  createdTime: {
      type: Date,
      default: Date.now
  },
  user_id: {
    type: String
  },
  items: {
      type: mongoose.Schema.Types.Mixed
  }
});

export const SurveyModel = mongoose.model('survey', SurveySchema);

