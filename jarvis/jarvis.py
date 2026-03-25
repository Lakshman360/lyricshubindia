from voice import VoiceModule
from ai import AIModule
from commands import CommandModule
import time

def main():
    voice = VoiceModule()
    ai = AIModule()
    cmd = CommandModule(voice)

    voice.speak("System check complete. All modules online.")
    voice.speak("I am Jarvis. How can I assist you today, Lakshman?")

    while True:
        # Continuous listening mode
        query = voice.listen()

        if query == "none":
            continue

        # Wake word detection
        if "jarvis" in query or "hey jarvis" in query:
            # If the user just said the wake word, respond and wait for command
            if query.strip() in ["jarvis", "hey jarvis"]:
                voice.speak("Yes, Lakshman? I am listening.")
                query = voice.listen()
                if query == "none": continue
            else:
                # User said "Jarvis, [command]"
                query = query.replace("hey jarvis", "").replace("jarvis", "").strip()

            # Process the command
            if query:
                # First try executing as a system command
                handled = cmd.execute_command(query)
                
                # If not a system command, send to AI
                if not handled:
                    voice.speak("Processing through my neural core...")
                    # Small delay for realism
                    time.sleep(0.5)
                    response = ai.get_ai_response(query)
                    voice.speak(response)
        
        # Exit condition
        if "go to sleep" in query or "goodbye" in query or "exit" in query:
            voice.speak("Powering down. Goodbye, Lakshman.")
            break

if __name__ == "__main__":
    main()
