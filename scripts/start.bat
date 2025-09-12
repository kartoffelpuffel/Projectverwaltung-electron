@echo off

cd %~dp0..

set NODERED_DIR=.\node-red\node_modules\node-red
set NODE_DIR=.\node
set PATH=%NODE_DIR%;%NODE_DIR%\node_modules\.bin;%PATH%
set FLOWS_DIR=.\data\flows.json

cd .\node-red
echo Starte Node-RED...
"%~dp0..\%NODE_DIR%\node.exe" "%~dp0..\%NODERED_DIR%\red.js" -u . "%~dp0..\%FLOWS_DIR%"