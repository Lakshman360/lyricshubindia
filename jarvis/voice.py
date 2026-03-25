import pyttsx3
import speech_recognition as sr
import time

class VoiceModule:
    def __init__(self):
        # Initialize TTS engine
        self.engine = pyttsx3.init('sapi5')
        voices = self.engine.getProperty('voices')
        # Set a professional voice (usually the first one)
        self.engine.setProperty('voice', voices[0].id)
        self.engine.setProperty('rate', 180)  # Speed of speech

    def speak(self, text):
        """Convert text to speech with a futuristic feel."""
        print(f"Jarvis: {text}")
        self.engine.say(text)
        self.engine.runAndWait()

    def listen(self):
        """Listen for user voice command and convert to text."""
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print("Listening...")
            r.pause_threshold = 1
            r.adjust_for_ambient_noise(source, duration=1)
            audio = r.listen(source)

        try:
            print("Recognizing...")
            query = r.recognize_google(audio, language='en-in')
            print(f"User said: {query}\n")
            return query.lower()
        except Exception as e:
            print("Say that again please...")
            return "none"

if __name__ == "__main__":
    # Test simple speak
    voice = VoiceModule()
    voice.speak("System initialized. I am Jarvis.")
