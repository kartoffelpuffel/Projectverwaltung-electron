@echo off

cd %~dp0..

echo Checking node_modules ...

if not exist "node-red/node_modules" (
    echo Starting npm install
    cd ./node-red
    call "%~dp0../node/npm.cmd" install
    echo Finished npm install
)
else (
    echo node_modules already available
)

