export default function handler(req, res) {
  // Тут історія ар­хівів (story archives)
  // Якщо фронтенд робить GET /stories/history?with_durations=..., 
  // Linux-чутливість не важлива — цей файл ловить /api/story-archives
  res.status(200).json([]);
}
