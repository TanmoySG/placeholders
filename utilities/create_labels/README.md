# A Label Creation Utility

This Utility is used to create labels in a new repository. The "model labels" are fetched from [wunder-identity-provider/issues/labels](https://github.com/TanmoySG/wunder-identity-provider/issues/labels).

## Usage

Set the GitHub Username as `GHIC_USER`
```
export GHIC_USER=<Username>
```

Generate and Set the [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 
```
export GHIC_TOKEN=<Access Token>
```

Run the Labeller
```
python3 utilities/create_labels/create_labels.py <target repo name>
```
The Target Repo is the one where these labels are to be made.

Viola! Labels Generated!