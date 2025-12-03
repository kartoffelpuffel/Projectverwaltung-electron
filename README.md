# Inhalt

Dieses Repo beinhaltet eine tabellarische Projektverwaltung zum Organisieren von Projekten und Verfolgen von deren Fortschritt.
Es basiert auf Node-RED und verwendet das electron-node-red package.
Als Release ist eine .msi zu finden, welche die Projektverwaltung als Anwendung installiert.

# Verwendung

## Das Repo klonen

Falls das Repo geklont wurde, muss in dem Verzeichnis einmal

```
npm i 
```

und anschließend

```
npm start
```

ausgeführt werden.
Damit startet sich Node-RED, welches im Localhost auf Port:1880 läuft.
Sollte Node-RED auf diese Weise gestartet werden, sollte es möglich sein im Browser den Code einzusehen.

Vorsicht Spagetti!!!

## Installation durch .msi

Unter dem tag "test" findet man die Pre-Release-Version der Anwendung.

Durch das Ausführen der .msi wird die Projektverwaltung als Anwendung mit allen nötigen Paketen auf dem Rechner installiert.
Sie liegt dann unter "C:/User/AppData/Local/Programs/electron-node-red".
Sollte das nicht stimmen, einfach mal bei der erstellten Verknüpfung auf "Eigenschaften" und die Directory vom Ziel öffnen.

Wenn die Projektverwaltung.exe gestartet sollte es nicht möglich sein den Code einzusehen.

Alle Angaben ohne Gewähr. :)
