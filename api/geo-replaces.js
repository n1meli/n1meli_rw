export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: 'Україна' },
    { id: 2, title: 'Польща' }
  ]);
}
