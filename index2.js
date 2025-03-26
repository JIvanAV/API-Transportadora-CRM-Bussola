const express = require('express');
const { google } = require('googleapis');
const app = express();
const port = process.env.PORT || 8080;

const credentials = require('./credentials.json');

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const spreadsheetId = "12wZFPuAkOrXao_EdD8mB7_84ibTesZT6-54r6o-O4wo";

app.get('/adimplencia', async (req, res) => {
  const sheetName = 'vendas';
  const range = `${sheetName}!A1:AR`;

  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      const headers = rows[0];
      const formattedData = rows.slice(1).map((row, index) => {
        const rowObj = headers.reduce((acc, header, i) => {
          acc[header] = row[i] || '';
          return acc;
        }, {});
        rowObj.id = index + 1;
        return rowObj;
      });

      res.json({ vendas: formattedData });
    } else {
      res.status(404).send('Nenhum dado encontrado.');
    }
  } catch (err) {
    console.error('Erro ao acessar a planilha:', err);
    res.status(500).send('Erro ao acessar planilha: ' + err.toString());
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
