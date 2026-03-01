def personalize_response(user, response):

    if user.last_sentiment == "NEGATIVE":
        response = "I understand how you feel. " + response

    if user.name:
        response = f"{user.name}, {response}"

    return response