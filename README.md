# Note App Redux-toolkit

I decided to do this project for myself as practice.
This Note app created by react js and used redux-toolkit for state management and json-server for fake Rest api.
and I just wanted to focus on logic so I used material ui to design the pages.

---
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://noteapp-redux-toolkit.herokuapp.com/) 
##### *please turn on your vpn to see demo*
---
![Screenshot from 2022-08-14 13-55-38](https://user-images.githubusercontent.com/91375726/184532957-106723b2-add0-4ea4-b6b6-2d4b624b7513.png)

---

### Package in Project:

- mui/material
- reduxjs/toolkit
- react-redux
- emotion/styled
- axios
- json-server
- notistack

### Feature

- [x]  Add, delete, edit, Note (CRUD) by json-server as fake Rest api
- [x]  use material ui component in project
- [x]  state management with redux-toolkit (CRUD)
- [x]  upload Image and convert to String Base64 and save in fake database
- [x]  column button to change Notes column
- [x]  search notes by fulltext search in json-server
- [x]  full responsive in all device

# Components Structure
```
├───app
│   └───store.js
│ 
├───api
│   └───api.js
|
├───feature
│   └───noteSlice.js
│
├───Components
│   ├───AddNote
│   ├───ColumnButton
│   ├───FileUpload
│   ├───NoteItem
│   ├───NoteList
│   ├───Notes
│   ├───SearchBar
│   └───Skelton

```

## Run

Clone the project

```bash

https://github.com/mohammadyousefvand/Note-app-redux-tooklit.git

```

Go to the project directory

```bash

cd Note-app-redux-tooklit


```

Install dependencies

```bash

npm install

```

Start the json-server

```bash

npm run json-serve

```

Start the Project

```bash

npm start
```
