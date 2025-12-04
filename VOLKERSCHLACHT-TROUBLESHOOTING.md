# 🔍 Schritte zur Überprüfung der Völkerschlachtdenkmal-Funktion

## Schritte zur Überprüfung, ob die Funktion funktioniert:

### 1. Browser öffnen
```
http://localhost:5176/summer-programs/summer-5
```

### 2. Seitenladevorgang überprüfen
- Sie sollten die Seite "Leipzig Kulturerlebnis" sehen
- Es sollte ein großes Bild oben geben (Hero Image)

### 3. Nach dem "Highlights"-Bereich suchen
- Scrollen Sie etwas nach unten
- Sie sollten die Überschrift "Highlights" sehen
- Darunter sollten **5 Karten** sein

### 4. Die violette Karte
Die erste Karte sollte sein:
- **Farbe**: Violetter Verlaufshintergrund (gradient)
- **Symbol**: 🏛️
- **Text**: "Völkerschlachtdenkmal mit Museum"
- **Zusatztext**: "📸 Klicken für Details & Preise"

### 5. Falls die violette Karte nicht erscheint:

#### a) Harte Seitenaktualisierung
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

#### b) Cache leeren
1. Entwicklertools öffnen (F12)
2. Rechtsklick auf den Aktualisieren-Button
3. "Empty Cache and Hard Reload" wählen

#### c) Console überprüfen
1. Entwicklertools öffnen (F12)
2. Zum "Console"-Tab wechseln
3. Nach roten Fehlermeldungen suchen
4. Senden Sie mir die Fehler, falls vorhanden

### 6. Klick-Test
Beim Klicken auf die violette Karte:
- Sollte sich ein **großes Modal** öffnen
- Das Modal enthält **5 Registerkarten** oben
- Jede Registerkarte enthält Bilder und Informationen

### 7. Andere Klick-Stellen
Sie können das Modal auch öffnen von:

#### Im "Sehenswürdigkeiten"-Bereich:
- Suchen Sie die "Völkerschlachtdenkmal"-Karte
- Klicken Sie darauf

#### Im "Tagesablauf"-Bereich:
- Suchen Sie "Tag 2"
- Klicken Sie auf "Besuch des Völkerschlachtdenkmals"

---

## Falls das Problem weiterhin besteht:

### Dateien überprüfen:
```bash
# Überprüfen Sie das Vorhandensein der Bilder
ls -la frontend/public/germany/leipzig/

# Sie sollten sehen:
# - voelkerschlachtdenkmal-aussen.jpg
# - voelkerschlacht-innenraum.jpg
# - leipzig-museum.jpg
# - leipzig-panorama.jpg
# - volkerschlacht-banner03.jpg
```

### Server überprüfen:
```bash
# Überprüfen Sie, ob der Server läuft
curl http://localhost:5176/
```

### Server neu starten:
```bash
cd frontend
pkill -f "bun run dev"
bun run dev
```

---

## Zusätzliche Informationen:
- Die Funktion wurde von Ihrem Kollegen hinzugefügt
- Die Bilder wurden heute hinzugefügt
- Alle Änderungen sind auf GitHub hochgeladen
