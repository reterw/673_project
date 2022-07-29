import mongoose from 'mongoose';


const AnswerSchema = new mongoose.Schema({
  questionnaire_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answerItems: mongoose.Schema.Types.Mixed,
  createdTime: {
    type: Date,
    default: Date.now
  }
});

export const AnswerModel = mongoose.model('answer', AnswerSchema);