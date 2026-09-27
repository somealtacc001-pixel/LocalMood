# LocalMood

LocalMood is a private AI journaling app powered by Tether's QVAC SDK.

Write a journal entry and LocalMood analyzes it locally to provide:

* Overall mood
* Possible emotions
* A short reflection

The AI inference runs on the user's device using QVAC, so the journal entry does not need to be sent to a cloud AI service.

## Features

* 🧠 Local AI mood and emotion reflection
* 🔒 Privacy-focused journaling
* 📝 Simple journal interface
* 📚 Local journal history
* ⚡ Powered by QVAC
* 🌐 Runs locally in the browser

## How It Works

1. The user writes a journal entry.
2. LocalMood sends the entry to a locally loaded QVAC model.
3. QVAC performs the AI completion on-device.
4. LocalMood displays the mood, possible emotions, and reflection.
5. Journal history is stored locally in the browser.

## QVAC Integration

LocalMood uses:

* `@qvac/sdk` version `0.20.0`
* `loadModel`
* `completion`
* `unloadModel`

The application uses QVAC's local inference capabilities rather than a cloud AI API.

## Requirements

* Node.js
* npm
* A computer capable of running the QVAC model

## Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/somealtacc001-pixel/LocalMood.git
cd LocalMood
```

Install the dependencies:

```bash
npm install
```

## Running LocalMood

Start the application:

```bash
npm start
```

Then open the following address in your browser:

```text
http://localhost:3000
```

Write a journal entry and click **Analyze Locally** to generate the AI reflection.

### Windows QVAC Startup

If QVAC takes too long to initialize on Windows, run:

```cmd
set QVAC_RPC_INIT_TIMEOUT_MS=120000
npm start
```

This gives the QVAC worker more time to initialize.

## Testing QVAC

A separate QVAC integration test is included in `test.js`.

Run:

```cmd
set QVAC_RPC_INIT_TIMEOUT_MS=120000
node test.js
```

The test loads the QVAC model and runs a local AI completion.

## Privacy

LocalMood is designed as a privacy-focused local AI application. Journal analysis is performed using a QVAC model running on the user's device rather than a cloud AI API.

Journal history is stored in the browser's local storage.

## Disclaimer

LocalMood provides general journaling reflection and does not provide medical or mental health diagnosis.

## License

This project is licensed under the MIT License.
