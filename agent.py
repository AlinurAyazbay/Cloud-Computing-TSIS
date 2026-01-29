import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load your API Key from the .env file
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

# Initialize the Client
#client = genai.Client(api_key=api_key)
client = genai.Client(api_key="AIzaSyD-AoPeS5PiOdc0sOl_tU1GUSbgYG51td8")
model = genai.GenerativeModel("gemini-3-flash-preview")

def run_prd_interview():
    chat = model.start_chat(history=[])
    
    # Initial Prompt to set the persona
    system_instruction = (
        "You are an expert Product Manager. Your goal is to interview the user "
        "to build a Product Requirements Document (PRD). You must ask at least "
        "five 'Why' questions to drill down into the core problem. "
        "Once you have enough info, type 'GENERATING_PRD' and then output the full PRD in Markdown."
    )
    
    print("--- Gemini PRD Interviewer ---")
    print("Agent: Hello! Tell me about the product idea you want to build.\n")
    
    user_input = input("You: ")
    why_count = 0
    
    while True:
        # Construct the prompt to ensure the agent follows the "5 Whys" rule
        prompt = f"{user_input}\n\n[System Note: This is response #{why_count + 1}. " \
                 f"If you haven't asked 5 'Why' questions yet, ask the next one. " \
                 f"If you have enough info, start with 'GENERATING_PRD']"
        
        response = chat.send_message(prompt)
        print(f"\nAgent: {response.text}\n")
        
        if "GENERATING_PRD" in response.text:
            break
            
        user_input = input("You: ")
        why_count += 1

if __name__ == "__main__":
    run_prd_interview()