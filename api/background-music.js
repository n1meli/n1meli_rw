export default function handler(req, res) {
  // Повертаємо порожній масив музики, або приклад
  res.status(200).json([
    // { id: 1, title: 'Ambient Track', url: 'https://...' },
    // { id: 2, title: 'Upbeat Loop', url: 'https://...' }
  ]);
}
