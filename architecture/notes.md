# Placeholders - Notes and Scribble Pad

Using this as a go-to place to dump Notes, Ideas and Observations and other random things.

### Providers - what can be the different providers in this system? - what can be the moving parts?

- Users System
  - Registration -> Itegrate with wIP -> pull user-id from wIP -> Register Service with assoc. wIP Account.
  - Login -> Same as above
  - Account Provisioning
    - Account Storage
    - Account and Files Meta Data
    - Storage Provision - folder/Directory
- Mapping System
  - Map File with both - ID and Name
  - Use "storage container" for a file - map the container to file and id to the container
- Meta Data Storage and Use
- IDK what else?


### Nomencleture

- Placeholder Container - where the file will be stored - directory prob.

### What Options/customizations can be used by Users?

Level of Access -

- Public - will require no toke to access
- Private - will require Access Token

Might make protected and private separate distinctions with -
- Private - requires Access Control Tokens and Lists - client specific prob.
- Protected - only required access token - no client specifications

Security of File
- Encrypted
- Non-Encrypted


### Mapping

- UserID.PlaceholderID -> containerID
- UserID.PlaceholderName -> containerID

Usage
```
/placeholder/userid/id //fetches the Container Content

or

/placeholder/userid/name //fetches the Container Content
```

Also a "Universal Placeholder Identifier" (short - UPId) can point to a container with a single Unique and Universal ID, no requirement of UserID or PlaceholderID/Name.

- UPId -> UserID.PlaceholderID -> ContainerID
- UPId -> UserID.PlaceholderName -> containerID


Usage
```
/placeholder/UPId //fetches Container Content
```

