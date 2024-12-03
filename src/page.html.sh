#!/bin/sh

set -e

cat <<EOF
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Ray tracer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style type="text/css">
$(cat src/style.css)
</style>
<script>
$(cat src/script.js)
</script>
</head>
<body>
</body>
</html>
EOF
