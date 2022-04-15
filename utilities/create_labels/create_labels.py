import requests
import os
import sys


model_labels = {}
cwp_labels = {}  # cwp - Current Working Project

user = os.getenv("GHIC_USER")
repository = sys.argv[1]

token = os.getenv("GHIC_TOKEN")


def create_label():

    new_labels = set(model_labels).difference(cwp_labels)

    for label in new_labels:
        url = f'https://api.github.com/repos/{user}/{repository}/labels'
        payload = {
            "name": label.lower(),
            "description": model_labels[label]["description"],
            "color": model_labels[label]["color"]
        }
        print(payload)

        headers = {
            "Authorization": "token "+token,
            "Accept" : "application/vnd.github.v3+json"
        }
        _ = requests.post(url, json=payload, headers=headers)

        print({"label": label, "response": "created"})


def get_labels():
    url = f'https://api.github.com/repos/{user}/wunder-identity-provider/labels'

    headers = {'Accept': 'application/vnd.github.v3+json'}
    resposne = requests.get(url, headers=headers)

    model_labels_fetched = resposne.json()

    for label_object in model_labels_fetched:
        model_labels[label_object["name"]] = {
            "color": label_object["color"],
            "description": label_object["description"]
        }

    url = f'https://api.github.com/repos/{user}/{repository}/labels'

    headers = {'Accept': 'application/vnd.github.v3+json'}
    resposne = requests.get(url, headers=headers)

    cwp_labels_fetched = resposne.json()

    for label_object in cwp_labels_fetched:
        cwp_labels[label_object["name"]] = {
            "color": label_object["color"],
            "description": label_object["description"]
        }

class CREATE_LABEL:

    def __init__(self) -> None:
        pass

    def fetch_model_labels(self):
        get_labels()
        print("Fetched Labels")

    def create_labels_for_new_repo(self):
        create_label()
        print("Created Labels!")


if __name__ == '__main__':
    labeler = CREATE_LABEL()
    labeler.fetch_model_labels()
    labeler.create_labels_for_new_repo()
