# Part 0 Solutions

## 0.1 to 0.3 solutions

No solutions needed, only reading

## 0.4: New note diagram
Only need to add 1 step from the existing Sequence Diagram which is the POST request which triggers a series of reloading the webpage after the POST.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL Redirect
    deactivate server

    Note right of browser: The server asks the browser to perform a new HTTP Get request 
    Note right of browser: to the address defined in the header's Location: "/exampleapp/notes"

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: notes HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: data.json file
    deactivate server

```

## 0.5 Single page app diagram
The single page app is still pretty similar to the original example app when opening the page. It first send GET request for the html. After rendering the html it sent 2 GET request to for the CSS and JavaScript, and the JavaScript will sent GET request for the data.json.
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: spa HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: main.js JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: data.json file
    deactivate server

```

## 0.6 New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: Rerenders the note list on the page

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: Sends the new note to the server

    server-->>browser: 201 created application/json {"message":"note created"}
    deactivate server

    Note right of browser: The page is not refreshed by the method e.preventDefault()
```
