# Backend Setup mit PostgreSQL

## Voraussetzungen

- Node.js (>=18)
- Docker und Docker Compose
- npm oder yarn

## Installation

1. **Abhängigkeiten installieren**
```bash
npm install
```

2. **PostgreSQL Datenbank starten**
```bash
docker-compose up -d
```

3. **Umgebungsvariablen konfigurieren**
```bash
cp .env.example .env
```
Bearbeiten Sie die `.env` Datei mit Ihren Datenbankdaten.

4. **Prisma Client generieren**
```bash
npm run prisma:generate
```

5. **Datenbank-Migration ausführen**
```bash
npm run prisma:migrate
```

6. **Datenbank mit Seed-Daten befüllen (optional)**
```bash
npm run prisma:seed
```

## Entwicklung

**Server im Entwicklungsmodus starten:**
```bash
npm run dev
```

**Prisma Studio öffnen (Datenbank GUI):**
```bash
npm run prisma:studio
```

## Nützliche Befehle

- `npm run prisma:generate` - Prisma Client regenerieren
- `npm run prisma:migrate` - Neue Migration erstellen und anwenden
- `npm run prisma:migrate:deploy` - Migrationen in Produktion anwenden
- `npm run prisma:migrate:reset` - Datenbank zurücksetzen und alle Migrationen neu anwenden
- `npm run prisma:db:push` - Schema direkt zur Datenbank pushen (nur Development)

## Datenbank-Zugriff

- **Adminer (Web-Interface):** http://localhost:8080
  - Server: postgres
  - Username: postgres  
  - Password: password
  - Database: reiseinfo_db

- **Prisma Studio:** http://localhost:5555 (nach `npm run prisma:studio`)

## Umgebungsvariablen

| Variable | Beschreibung | Beispiel |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL Verbindungs-URL | `postgresql://postgres:password@localhost:5432/reiseinfo_db?schema=public` |
| `PORT` | Server Port | `3000` |
| `NODE_ENV` | Node.js Umgebung | `development` |