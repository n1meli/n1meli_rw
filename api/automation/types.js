export default function handler(req, res) {
  res.status(200).json([
    { id: 'story', name: 'Story Prompt' },
    { id: 'topic', name: 'Topic Prompt' }
  ]);
}
