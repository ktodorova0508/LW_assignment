import { test, expect } from '@playwright/test';
import { languagePairsUrl, translateDocUrl, translateTextUrl } from '../lib/shared.ts/urls';
import { authorization } from '../lib/shared.ts/token';
import { translatesTextExpanded, uploadFile } from '../lib/shared.ts/fixtures';

test.describe('API tests', () => {



  const userCount = 10;


  test('should translate text in all languages', async ({ request }) => {
    const lngValuePairsResp = await request.get(languagePairsUrl, {
      headers: authorization
    })

    expect(lngValuePairsResp.status()).toBe(200);

    const lngValuePairsBody = await lngValuePairsResp.json();


    expect(lngValuePairsBody.forEach(async language => await request.post(translateTextUrl,
      {
        data:
        {
          sourceLanguage: "en-GB",
          targetLanguage: language.targetLanguage.mmtCode,
          sourceText: 'Hello World'

        }
      }),
    ).status()).toBe(200);

  });

  test('should translate document in all languages', async ({ request }) => {
    const lngValuePairsResp = await request.get(languagePairsUrl, {
      headers: authorization
    })

    expect(lngValuePairsResp.status()).toBe(200);

    const lngValuePairsBody = await lngValuePairsResp.json();

    expect(lngValuePairsBody.forEach(async language => await request.post(translateDocUrl,
      {
        data:
        {
          file: uploadFile(),
          sourceLanguage: "en-GB",
          targetLanguage: language.targetLanguage.mmtCode,

        }
      }),
    ).status()).toBe(201);
  })


  test('should run 10 users concurrently', async ({ request }) => {

    const userPromises: Promise<void>[] = [];

    for (let userNumber = 1; userNumber <= userCount; userNumber++) {
      userPromises.push(translatesTextExpanded(userNumber, request));
    }

    await Promise.all(userPromises);
  });



})






