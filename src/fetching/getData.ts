import { fetchGoogleSheetsData } from 'google-sheets-mapper';
import { notFound } from 'next/navigation';

export default async function getData( tableID: string) {
  try {
    return await fetchGoogleSheetsData({
      apiKey: process.env.GOOGLE_API_KEY as string,
      sheetId: tableID,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
