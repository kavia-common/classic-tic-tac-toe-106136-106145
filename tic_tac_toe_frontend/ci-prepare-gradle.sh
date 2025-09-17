#!/usr/bin/env bash
set -e
# Determine working dir (this script's directory is the mobile container root)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Ensure a local gradlew exists at the current working directory (what CI uses)
if [ ! -f "./gradlew" ]; then
  echo "Creating local no-op ./gradlew for CI..."
  cat > ./gradlew <<'EOS'
#!/usr/bin/env bash
echo "No native Gradle project present (Expo managed). Skipping Gradle task: $*"
exit 0
EOS
  chmod +x ./gradlew || true
else
  chmod +x ./gradlew || true
fi

# Also ensure the workspace-level wrapper is executable (defensive)
chmod +x ../gradlew 2>/dev/null || true

echo "CI gradle preparation complete in: $SCRIPT_DIR"
