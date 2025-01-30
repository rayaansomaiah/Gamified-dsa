import User from '../models/User.js';

// @desc    Get user progress
// @route   GET /api/users/:userId/progress
// @access  Private
const getUserProgress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select('progress');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUserProgress };