const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = '50202b51-780d-4bff-85e5-4c99ba57dbd0'; // твой API ключ
const ORIGIN_NICK = 'ТВОЙ_НИК'; // замени на свой Apex Origin ник

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/origin/${ORIGIN_NICK}`, {
      headers: { 'TRN-Api-Key': API_KEY }
    });

    const rankInfo = data.data.segments.find(s => s.metadata.name === 'BR Ranked');
    if (!rankInfo) return res.send('Ранг не найден.');

    const rank = rankInfo.stats.rankScore.metadata.rankName;
    const rp = rankInfo.stats.rankScore.value;

    res.send(`Мой текущий ранг в Apex: ${rank}, ${rp} RP.`);
  } catch (e) {
    console.error(e.message);
    res.send('Ошибка при получении ранга.');
  }
});

app.listen(PORT, () => console.log(`Сервер слушает порт ${PORT}`));
