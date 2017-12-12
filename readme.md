## Electron based desktop application for [notion.so](https://www.notion.so) (Linux only as official apps are available for macOS and Windows)

**Download**

* [`notion.so_1.0.1_amd64.deb`](https://github.com/tokozedg/notion.so/releases/download/v1.0.1/notion.so_1.0.1_amd64.deb)

**To Build**
```bash
git clone git@github.com:tokozedg/notion.so.git
cd notion.so
npm install
npm run build
npm run deb
```

This will create an application in the `dist/notion-linux-x64` folder and deb
package in `dist/installers/`.

**Color Emoji**

To enable color emoji, I followed instruction commented by Jop on this link:
* http://www.omgubuntu.co.uk/2016/08/enable-color-emoji-linux-google-chrome-noto
* https://gist.github.com/BojanStipic/ff0702c2c096749f18a8ec13c60ffe23

```bash
wget https://noto-website.storage.googleapis.com/pkgs/NotoColorEmoji-unhinted.zip
sudo unzip NotoColorEmoji-unhinted.zip -d /usr/share/fonts/truetype/noto
sudo rm /usr/share/fonts/truetype/noto/LICENSE_OFL.txt
sudo rm /usr/share/fonts/truetype/ancient-scripts/Symbola_hint.ttf
sudo apt-get remove ttf-ancient-fonts-symbola
sudo chmod 644 /usr/share/fonts/truetype/noto/NotoColorEmoji.ttf
fc-cache -f -v
rm NotoColorEmoji-unhinted.zip
```

