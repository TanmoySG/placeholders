# Design

This is the design documentation for Placeholders.

## Databases Design

These are the databases design and setup required for Placeholders.

These databases (as of now) should be essential for placeholders design

### ph-namespaces `D`

For each [namespace](#) there is ONE collection. These collections contain list of containers within that namespace.

- phn-{namespace-id/name} `C`

Each Namespace is a list of containers within them, and is a list of Records in the collection. Each record is an unique ph-container. Each container is one unique placeholder.

  - phn-containers `R`

  Containers are the basic unit in placeholder that store the content and details. Each container (placeholder) ID/Name maps to the Placeholder's unique URL. 

  ```
  ph.com/container-id-a
  ```

  Here `container-id-a` is the placeholder id that points to the content in the container A.
