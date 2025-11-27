# 🔐 كيفية الحصول على GitHub Personal Access Token

## الخطوات:

### 1. اذهب إلى GitHub Settings
افتح المتصفح واذهب إلى:
```
https://github.com/settings/tokens
```

### 2. أنشئ Token جديد
- اضغط على **"Generate new token"**
- اختر **"Generate new token (classic)"**

### 3. املأ التفاصيل:
- **Note (الاسم):** `DCI-Project-2025`
- **Expiration:** اختر `90 days` أو `No expiration`
- **Select scopes:** ضع علامة ✅ على:
  - ✅ **repo** (سيختار كل الخيارات تحتها تلقائياً)

### 4. اضغط "Generate token"

### 5. انسخ Token
⚠️ **مهم جداً:** Token سيظهر مرة واحدة فقط!
- سيكون شكله مثل: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- انسخه واحفظه في مكان آمن

---

## بعد الحصول على Token:

شغّل هذه الأوامر في Terminal (استبدل `YOUR_ACTUAL_TOKEN` بالـ Token الذي نسخته):

```bash
cd /home/dci-student/abschlussprojekt-reiseinfo-Syrien-Deutschland/abschlussprojekt-reiseinfo-Syrien-Deutschland

# استبدل YOUR_ACTUAL_TOKEN بالـ Token الحقيقي
git remote set-url origin https://YOUR_ACTUAL_TOKEN@github.com/Maik-Protze/abschlussprojekt-reiseinfo-Syrien-Deutschland.git

# ثم جرب Push
git push origin main
```

---

## مثال (لا تستخدم هذا Token، هو للتوضيح فقط):
```bash
# مثال فقط - استخدم Token الخاص بك
git remote set-url origin https://ghp_1234567890abcdefghijklmnopqrstuvwxyz@github.com/Maik-Protze/abschlussprojekt-reiseinfo-Syrien-Deutschland.git
```
