#!/usr/bin/env bash
# Workspace-specific no-op Gradle wrapper for CI that runs from this directory.
echo "No native Gradle project present (Expo managed). Skipping Gradle task: $*"
exit 0
