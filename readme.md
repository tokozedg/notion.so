## Electron based desktop application for [notion.so](https://www.notion.so) (Linux only as official apps are available for macOS and Windows)

**Download**

* [`notion.so_1.0.0_amd64.deb`](https://github.com/tokozedg/notion.so/releases/download/v1.0.0/notion.so_1.0.0_amd64.deb)

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
