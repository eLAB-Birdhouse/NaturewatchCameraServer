echo off
REM Start convertion
echo "Start icon conversion using Imagick on Windows."
magick.exe convert %1 -define icon:auto-resize=32 -compress zip favicon.ico
magick.exe convert %1 -resize 16x16 favicon-16x16.png
magick.exe convert %1 -resize 32x32 favicon-32x32.png
magick.exe convert %1 -resize 192x192 android-chrome-192x192.png
magick.exe convert %1 -resize 384x384 android-chrome-384x384.png
magick.exe convert %1 -resize 150x150 mstile-150x150.png
magick.exe convert %1 -resize 180x180 apple-touch-icon.png
