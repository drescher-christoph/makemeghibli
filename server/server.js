// server/server.js
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

console.log("[1] Lade Umgebungsvariablen...");
dotenv.config();

console.log("[2] Initialisiere OpenAI...");
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

console.log("[3] Erstelle Express-App...");
const app = express();

console.log("[4] Konfiguriere CORS...");
// CORS für Vite-Frontend (Port 5173 standardmäßig)
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));


console.log("[5] Definiere Routes...");
// Proxy-Route
// server/server.js
app.post('/api/generate-image', async (req, res) => {
    try {
      const { prompt, model, size } = req.body;
  
      const response = await openai.images.generate({
        model: model || "dall-e-2", // Fallback auf DALL-E 3
        prompt: prompt,
        size: size || "1024x1024",
      });
  
      res.json({
        success: true,
        images: response.data,
      });
      
    } catch (error) {
      console.error("Fehler bei der Bildgenerierung:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Bildgenerierung fehlgeschlagen",
      });
    }
  });

// Server starten
console.log("[6] Starte Server...");
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[✅] Server läuft auf Port ${PORT}`);
});