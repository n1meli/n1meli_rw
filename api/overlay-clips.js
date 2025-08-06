export default function handler(req, res) {
  // Повертаємо порожній масив кліпів, або приклад
  res.status(200).json([
    // { id: 1, name: 'Clip A', url: 'https://...' },
    // { id: 2, name: 'Clip B', url: 'https://...' }
  ]);
}
