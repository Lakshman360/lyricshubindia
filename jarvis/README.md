# Jarvis AI Voice Assistant

A Python-based AI voice assistant capable of controlling your system, performing web tasks, and interacting intelligently via OpenAI.

## 🚀 Features

- **Voice Control**: Supports continuous listening with wake word detection ("Hey Jarvis").
- **System Control**: Open/Close apps, volume control, screenshots, lock system, etc.
- **Web Tasks**: Search Google, play YouTube videos, fetch weather.
- **AI Brain**: Integrated with OpenAI for intelligent conversation.
- **Modular Design**: Clean separation of voice, commands, and AI logic.

## 🛠 Setup Instructions

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   *Note: On Windows, you might need to install `PyAudio` manually if `speech_recognition` fails to find your microphone.*

2. **Configure API Keys**:
   Open the `.env` file and replace the placeholders with your actual keys:
   - `OPENAI_API_KEY`: Get from [OpenAI](https://platform.openai.com/).
   - `WEATHER_API_KEY`: Get from [OpenWeatherMap](https://openweathermap.org/api).

3. **Run Jarvis**:
   ```bash
   python jarvis.py
   ```

## 🎙 Example Commands

- **Wake Word**: "Hey Jarvis" or just "Jarvis"
- **Apps**: "Open Chrome", "Open Notepad", "Launch VS Code"
- **Web**: "Search for best programming languages on Google", "Play Lo-fi music on YouTube"
- **System**: "Volume up", "Mute audio", "Take a screenshot", "Lock the system"
- **AI**: "Who is Alan Turing?", "Explain the theory of relativity"
- **Weather**: "What is the weather like?"
- **Exit**: "Goodbye Jarvis" or "Go to sleep"

## 🏗 Architecture

- `jarvis.py`: Main entry point and control loop.
- `voice.py`: Speech-to-text and text-to-speech implementation.
- `commands.py`: Logic for system and web-level actions.
- `ai.py`: Interface for OpenAI chat completions.

---
*Created for Lakshman by Antigravity.*
