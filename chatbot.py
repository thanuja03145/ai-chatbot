class Assistant:
    def __init__(self):
        self.developer = "thanuja.k"

    def process_message(self, user_input):
        if not user_input.strip():
            return "Please type a valid message."
        return f"Hello! Message received by {self.developer}'s application."

