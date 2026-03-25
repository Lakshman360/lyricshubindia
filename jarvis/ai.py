import openai
from dotenv import load_dotenv
import os

load_dotenv()

class AIModule:
    def __init__(self):
        # API Key should be set in environment variables or .env file
        self.api_key = os.getenv("OPENAI_API_KEY", "YOUR_OPENAI_API_KEY")
        openai.api_key = self.api_key
        self.system_prompt = "You are Jarvis, a highly intelligent AI assistant. Speak professionally and help with tasks. Respond like a futuristic assistant. Always address the user as Lakshman if appropriate."

    def get_ai_response(self, user_input):
        """Fetch a response from OpenAI's AI model."""
        if self.api_key == "YOUR_OPENAI_API_KEY":
            return "Sir, I require an OpenAI API key to process this request intelligently."

        try:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": self.system_prompt},
                    {"role": "user", "content": user_input}
                ],
                max_tokens=150,
                temperature=0.7
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            return f"I encountered an error while accessing my neural core: {str(e)}"

if __name__ == "__main__":
    ai = AIModule()
    print(ai.get_ai_response("Hello Jarvis, how are you?"))
