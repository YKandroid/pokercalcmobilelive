@echo off
echo Installing dependencies...
npm install

echo Building the application...
npm run build

echo Build complete! Check the 'dist' folder for the installer.
pause 