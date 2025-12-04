# 🚀 Setup Guide - Travel Agency Project

## Voraussetzungen
- Node.js (v18 oder höher) oder Bun
- Git
- SQLite (wird automatisch verwendet)

## 📦 Installation (für neue Teammitglieder)

### 1. Repository klonen
```bash
git clone <dein-repository-url>
cd abschlussprojekt-reiseinfo-Syrien-Deutschland
```

### 2. Backend Setup

```bash
cd backend
bun install
```

### 3. Datenbank konfigurieren

Erstelle eine `.env` Datei im `backend` Ordner:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=development
```

**Info:** SQLite wird als lokale Datenbankdatei verwendet - keine weitere Konfiguration nötig!

### 4. Datenbank erstellen und migrieren

```bash
# Prisma Client generieren
bun run prisma:generate

# Datenbank-Schema erstellen
bun run prisma:migrate

# WICHTIG: Seed-Daten laden (inkl. Bilder!)
bun run prisma:seed
```

**⚠️ ACHTUNG:** Ohne den `prisma:seed` Befehl werden **KEINE BILDER** angezeigt, da die Touren und ihre Bild-URLs in der Datenbank gespeichert werden!

### 5. Backend starten

```bash
bun run dev
```

Der Backend-Server läuft jetzt auf `http://localhost:3000`

### 6. Frontend Setup (neues Terminal)

```bash
cd ../frontend
bun install
bun run dev
```

Das Frontend läuft jetzt auf `http://localhost:5173`

## 🔧 Häufige Probleme

### Problem: Keine Bilder in "Reiseangebote"
**Lösung:** Du hast vergessen, die Seed-Daten zu laden!
```bash
cd backend
bun run prisma:seed
```

### Problem: Datenbank-Verbindungsfehler
**Lösung:** 
1. Überprüfe die `DATABASE_URL` in der `.env` Datei
2. Stelle sicher, dass der Backend-Ordner Schreibrechte hat
3. Führe `bun run prisma:migrate` aus, um die SQLite-Datei zu erstellen

### Problem: "Prisma Client not found"
**Lösung:**
```bash
cd backend
bun run prisma:generate
```

## 📊 Datenbank zurücksetzen (falls nötig)

Wenn du die Datenbank komplett neu aufsetzen möchtest:

```bash
cd backend
bun run prisma:migrate:reset
bun run prisma:seed
```

**Warnung:** Dies löscht ALLE Daten in der Datenbank!

## 🎯 Überprüfen, ob alles funktioniert

1. Backend: `http://localhost:3000/api/tours` sollte JSON mit Touren zurückgeben
2. Frontend: `http://localhost:5175` sollte die Website anzeigen
3. Bilder: Im "Reiseangebote" Bereich sollten alle Touren mit Bildern angezeigt werden

## 📝 Wichtige Befehle

### Backend
```bash
bun run dev              # Development Server starten
bun run prisma:studio    # Datenbank-GUI öffnen
bun run prisma:seed      # Seed-Daten laden
bun run prisma:migrate   # Neue Migration erstellen
```

### Frontend
```bash
bun run dev              # Development Server starten
bun run build            # Production Build erstellen
```

## 🆘 Support

Bei Problemen:
1. Überprüfe die Console-Logs (Backend & Frontend)
2. Stelle sicher, dass alle Dependencies installiert sind (`bun install`)
3. Stelle sicher, dass die SQLite-Datenbank korrekt erstellt wurde
4. Kontaktiere das Team

---

**Viel Erfolg! 🎉**
