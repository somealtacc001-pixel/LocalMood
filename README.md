\# LocalMood



LocalMood is a private AI journaling app powered by Tether's QVAC SDK.



Write a journal entry and LocalMood analyzes it locally to provide:

\- Overall mood

\- Possible emotions

\- A short reflection



The AI inference runs on the user's device using QVAC, so the journal entry does not need to be sent to a cloud AI service.



\## Features



\- 🧠 Local AI mood and emotion reflection

\- 🔒 Privacy-focused journaling

\- 📝 Simple journal interface

\- 📚 Local journal history

\- ⚡ Powered by QVAC

\- 🌐 Runs locally in the browser



\## How It Works



1\. The user writes a journal entry.

2\. LocalMood sends the entry to a locally loaded QVAC model.

3\. QVAC performs the AI completion on-device.

4\. LocalMood displays the mood, possible emotions, and reflection.

5\. Journal history is stored locally in the browser.



\## QVAC Integration



LocalMood uses:



\- `@qvac/sdk` version `0.20.0`

\- `loadModel`

\- `completion`

\- `unloadModel`



The application uses QVAC's local inference capabilities rather than a cloud AI API.



\## Requirements



\- Node.js

\- npm

\- A computer capable of running the QVAC model



\## Installation



Clone the repository and install the dependencies:



```bash

npm install

