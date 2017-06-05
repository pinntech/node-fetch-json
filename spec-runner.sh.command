#!/bin/sh
# Spec Runner

# To make this file runnable:
#     $ chmod +x *.sh.command

projectHome=$(cd $(dirname $0); pwd)

info() {
    cd $projectHome
    pwd
    echo
    echo "Node.js:"
    which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
    node --version
    test -d node_modules || npm install
    npm update
    npm outdated
    echo
    }

echo
echo "node-fetch-json"
echo "==============="
info
npm test
echo
