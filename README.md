# Note Taker app

## Description

This application can write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

- The following API routes have been created:

  - GET `/api/notes` - Read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Receive a query parameter containing the id of a note to delete. Give each note a unique `id` when it's saved. In order to delete a note, read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Installation

- npm install -y
- npm install express

## User Story

AS A user, I want to be able to write and save notes.

AS A user, I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You can check the app out here in Heroku: https://notes616.herokuapp.com/

---
