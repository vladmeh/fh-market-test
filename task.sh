#!/usr/bin/env sh

set -e

cd task

git init

git add -A

git commit -m "task"

git push -f https://github.com/fhcs/test-task-web.git master

cd -