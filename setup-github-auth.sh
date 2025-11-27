#!/bin/bash
# GitHub Authentication Setup Script

echo "🔐 إعداد المصادقة مع GitHub"
echo "================================"
echo ""
echo "الخطوة 1: أدخل Personal Access Token الذي حصلت عليه من GitHub:"
read -s GITHUB_TOKEN
echo ""

# تحديث remote URL لاستخدام Token
cd /home/dci-student/abschlussprojekt-reiseinfo-Syrien-Deutschland/abschlussprojekt-reiseinfo-Syrien-Deutschland

# إزالة remote القديم
git remote remove origin

# إضافة remote جديد مع Token
git remote add origin https://${GITHUB_TOKEN}@github.com/Maik-Protze/abschlussprojekt-reiseinfo-Syrien-Deutschland.git

echo "✅ تم إعداد المصادقة بنجاح!"
echo ""
echo "الآن يمكنك تشغيل:"
echo "git push origin main"
