.PHONY: build gradle prepare-ci

prepare-ci:
	@bash ./prepare-ci.sh

build: prepare-ci
	@echo "Root build (no-op for Expo managed)"

gradle: prepare-ci
	@./gradlew
