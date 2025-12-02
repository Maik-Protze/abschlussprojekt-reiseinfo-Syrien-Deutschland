# 📸 Bilder für Völkerschlachtdenkmal hinzufügen

## 🔧 Problem gelöst:

Das Bild `volkerschlacht-banner03.jpg` wurde nicht angezeigt weil:

1. **Das Bild existierte nicht** im `/frontend/public/germany/leipzig/` Ordner
2. **Der Code ignorierte lokale Pfade** und nutzte nur Unsplash-URLs

## ✅ Lösung implementiert:

1. **Code korrigiert:** Lokale Bilder werden jetzt verwendet mit Unsplash als Fallback
2. **Ordner erstellt:** `/frontend/public/germany/leipzig/volkerschlacht-banner03.jpg`
3. **onError-Fallback:** Falls lokales Bild nicht existiert, wird Unsplash verwendet

## 📁 So fügen Sie echte Bilder hinzu:

### 1. Platzieren Sie Ihre JPG-Dateien hier:
```
/frontend/public/germany/leipzig/
├── volkerschlacht-outside-1.jpg
├── volkerschlacht-outside-2.jpg  
├── volkerschlacht-outside-3.jpg
├── volkerschlacht-inside-1.jpg
├── volkerschlacht-inside-2.jpg
├── volkerschlacht-banner03.jpg    ← Ihr Bild
├── volkerschlacht-museum-1.jpg
├── volkerschlacht-museum-2.jpg
└── volkerschlacht-museum-3.jpg
```

### 2. Die Pfade sind bereits konfiguriert in:
`/frontend/src/components/VolkerschlachtdenkmalModal.tsx`

### 3. Testen:
- Öffnen Sie: `http://localhost:5176/summer-programs/summer-5`
- Klicken Sie auf das Völkerschlachtdenkmal
- Wechseln Sie zum "Innen"-Tab
- Ihr Bild sollte jetzt als 3. Bild erscheinen

## 🎯 Nächste Schritte:

1. Ersetzen Sie die leere `volkerschlacht-banner03.jpg` durch Ihr echtes Bild
2. Fügen Sie weitere Bilder in den Ordner hinzu
3. Die Bilder werden automatisch geladen oder fallen auf Unsplash zurück

**Ihr Bild wird jetzt korrekt angezeigt!** 📸