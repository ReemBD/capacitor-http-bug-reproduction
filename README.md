# CapacitorNativePluginBugCodeRepro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.
## Bug Reproduction steps

Run npm install
Run ng build
Run npx cap sync
Run npx cap open ios Or npx cap open android

open in simulator or physical device, monitor native http requests.
See "Object cannot be cloned" bug in ios or "Malformed URL Exception" in android

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

