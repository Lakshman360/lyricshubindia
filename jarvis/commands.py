import os
import webbrowser
import datetime
import pyautogui
import requests
import subprocess
from pyowm import OWM

class CommandModule:
    def __init__(self, voice_module):
        self.voice = voice_module
        self.weather_api_key = os.getenv("WEATHER_API_KEY", "YOUR_WEATHER_API_KEY")

    def execute_command(self, query):
        """Parse the query and execute corresponding system or web action."""
        
        # --- System Controls ---
        if 'open chrome' in query:
            self.voice.speak("Opening Google Chrome, Lakshman.")
            os.startfile("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")

        elif 'open notepad' in query:
            self.voice.speak("Opening Notepad.")
            subprocess.Popen(['notepad.exe'])

        elif 'open calculator' in query:
            self.voice.speak("Opening Calculator.")
            subprocess.Popen(['calc.exe'])

        elif 'open vs code' in query:
            self.voice.speak("Launching Visual Studio Code.")
            # Adjust path if necessary
            os.system("code")

        elif 'close' in query and ('chrome' in query or 'browser' in query):
            self.voice.speak("Closing Chrome.")
            os.system("taskkill /f /im chrome.exe")

        elif 'volume up' in query:
            self.voice.speak("Increasing volume.")
            for i in range(5):
                pyautogui.press('volumeup')

        elif 'volume down' in query:
            self.voice.speak("Decreasing volume.")
            for i in range(5):
                pyautogui.press('volumedown')

        elif 'mute' in query:
            self.voice.speak("Muting audio.")
            pyautogui.press('volumemute')

        elif 'lock the system' in query or 'lock my computer' in query:
            self.voice.speak("Locking the system.")
            os.system("rundll32.exe user32.dll,LockWorkStation")

        elif 'screenshot' in query:
            self.voice.speak("Taking a screenshot.")
            ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
            path = f"screenshot_{ts}.png"
            pyautogui.screenshot(path)
            self.voice.speak(f"Screenshot saved as {path}")

        elif 'shutdown' in query:
            self.voice.speak("Are you sure you want to shut down the system?")
            confirm = self.voice.listen()
            if 'yes' in confirm or 'yeah' in confirm:
                self.voice.speak("Shutting down the system. Goodbye, Lakshman.")
                os.system("shutdown /s /t 1")
            else:
                self.voice.speak("Shutdown aborted.")

        # --- Web & Internet ---
        elif 'open google' in query:
            self.voice.speak("Opening Google.")
            webbrowser.open("http://google.com")

        elif 'open youtube' in query:
            self.voice.speak("Opening YouTube.")
            webbrowser.open("http://youtube.com")

        elif 'search' in query and 'on google' in query:
            search_query = query.replace("search", "").replace("on google", "").strip()
            self.voice.speak(f"Searching for {search_query} on Google.")
            webbrowser.open(f"https://www.google.com/search?q={search_query}")

        elif 'play' in query and 'on youtube' in query:
            video = query.replace("play", "").replace("on youtube", "").strip()
            self.voice.speak(f"Playing {video} on YouTube.")
            webbrowser.open(f"https://www.youtube.com/results?search_query={video}")

        elif 'weather' in query:
            self.get_weather()

        # --- Utilities ---
        elif 'time' in query:
            curr_time = datetime.datetime.now().strftime("%I:%M %p")
            self.voice.speak(f"The current time is {curr_time}.")

        elif 'date' in query:
            curr_date = datetime.datetime.now().strftime("%B %d, %Y")
            self.voice.speak(f"Today is {curr_date}.")

        elif 'create folder' in query:
            folder_name = query.replace("create folder", "").strip()
            if not folder_name: folder_name = "New Folder"
            os.makedirs(folder_name, exist_ok=True)
            self.voice.speak(f"Folder {folder_name} has been created.")

        elif 'create file' in query:
            file_name = query.replace("create file", "").strip()
            if not file_name: file_name = "new_file.txt"
            with open(file_name, 'w') as f:
                f.write("Created by Jarvis.")
            self.voice.speak(f"File {file_name} has been created.")

        else:
            return False  # Command not handled here
        
        return True

    def get_weather(self):
        """Fetch weather information."""
        if self.weather_api_key == "YOUR_WEATHER_API_KEY":
            self.voice.speak("I need a valid weather API key from OpenWeatherMap.")
            return

        try:
            owm = OWM(self.weather_api_key)
            mgr = owm.weather_manager()
            # Default to a specific city or ask
            self.voice.speak("Which city's weather would you like to know?")
            city = self.voice.listen()
            if city != "none":
                observation = mgr.weather_at_place(city)
                w = observation.weather
                temp = w.temperature('celsius')['temp']
                status = w.detailed_status
                self.voice.speak(f"The current temperature in {city} is {temp} degrees Celsius with {status}.")
        except Exception as e:
            self.voice.speak("I couldn't fetch the weather reports right now.")
