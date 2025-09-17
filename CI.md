# CI Notes

This repository uses an Expo-managed React Native app and does not check in native Android/iOS projects.

Some CI pipelines expect a Gradle wrapper at the repository root and invoke `./gradlew`.
A no-op `gradlew` is provided and a `prepare-ci.sh` script sets executable permissions.

If your pipeline fails with "No such file or directory: ./gradlew", ensure the following:
- Run `bash ./prepare-ci.sh` before any Gradle-related steps.
- Or call the root `build` script: `npm run build` (which runs `prepare-ci.sh` automatically).
