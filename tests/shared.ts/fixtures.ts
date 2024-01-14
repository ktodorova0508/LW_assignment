import { APIRequestContext, expect } from "@playwright/test";
import { translateTextUrl } from "./urls";
import * as fs from 'fs';

export async function translatesTextExpanded(userNumber: number, request: APIRequestContext): Promise<void> {


    try {
        const response = await request.post(translateTextUrl,
            {
                data:
                {
                    sourceLanguage: "en-GB",
                    targetLanguage: "bg",
                    sourceText: 'Hello World'

                }
            })
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.userId).toBe(userNumber);

        console.log(`Test for User ${userNumber} passed.`);
    } catch (error) {
        console.error(`Test for User ${userNumber} failed:`, error);
    }
}

export async function translatesText(language: string, request: APIRequestContext) {

    const response = await request.post(translateTextUrl,
        {
            data:
            {
                sourceLanguage: "en-GB",
                targetLanguage: language,
                sourceText: 'Hello World'

            }
        })
    return response
}

export function uploadFile() {
    const filePath = '/home/krisi/Desktop/LW/LW_assignment/test.doc'; 

  // Read the file content
  const fileContent = fs.readFileSync(filePath);

  const blob = new Blob([Buffer.from(fileContent)], { type: 'application/octet-stream' });


  // Create a FormData object and append the file
  const formData = new FormData();
  formData.append('test', blob, 'test.doc');
}