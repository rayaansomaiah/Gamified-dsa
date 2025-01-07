import QuizResult from '../models/Quiz.js';

export const saveQuizResult = async (req, res) => {
  try {
    const { score, totalQuestions, timeTaken } = req.body;
    const userId = req.user._id;

    const quizResult = new QuizResult({
      userId,
      score,
      totalQuestions,
      timeTaken
    });

    await quizResult.save();
    res.status(201).json(quizResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuizHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const history = await QuizResult.find({ userId })
      .sort({ completedAt: -1 })
      .limit(10);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};