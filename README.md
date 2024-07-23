<p align="center">
  <a href="https://www.medusajs.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png" width="100" />
  </a>
</p>

## Medusa Admin UI Custom Version

This repository is not intended to replace the original. It is made for Medusa Backend version 1.20.7 and works on port 7002 by default.

## Settings

### Environment Variables

Modify the following environment variables for correct execution:

```
MEDUSA_BACKEND_URL="http://localhost:9000"
ADMIN_PATH="http://localhost:9000"
```

### Previous requirements

Make sure you have Yarn installed at version `yarn@1.22.22`.

### Install

Run the following commands to install the dependencies and run the project:

```sh
npm install
npm run dev
```

Main Modifications
The main modification of this project is found in the versions of the package.json dependencies, which have been updated and adjusted manually to ensure correct cohesion and compatibility.
