#!/usr/bin/env bash
# Ensure gradlew is executable for CI environments
chmod +x ./gradlew || true
# Also ensure nested placeholder is executable if used
chmod +x ./tic_tac_toe_frontend/android/gradlew || true
echo "CI prepared: gradlew executable set."
