export default function handler(req, res) {
  res.status(200).json([
    { id: 'text', label: 'Text' },
    { id: 'image', label: 'Image' }
  ]);
}
