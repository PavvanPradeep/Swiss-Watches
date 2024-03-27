import json
import requests

def post_watch(watch):
    url = "http://127.0.0.1:8000/auth/watches/"
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, data=json.dumps(watch), headers=headers)

    if response.status_code == 201:
        print(f"Watch {watch['id']} posted successfully.")
    else:
        print(f"Failed to post watch {watch['id']}. Status code: {response.status_code}")

def main():
    with open("watches.json", "r") as file:
        watches = json.load(file)

    for watch in watches:
        post_watch(watch)

if __name__ == "__main__":
    main()
