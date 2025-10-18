#!/bin/bash
echo "📍 LOCATION DIAGNOSTIC"
echo "======================"

echo "Current directory:"
pwd
echo ""

echo "Is this the storefront? (Should contain package.json)"
ls -la package.json 2>/dev/null && echo "✅ In storefront directory" || echo "❌ NOT in storefront"

echo ""
echo "Available scripts:"
ls -la *.sh 2>/dev/null | head -10
echo ""

echo "Next.js status:"
ps aux | grep -v grep | grep next && echo "✅ Next.js running" || echo "❌ Next.js not running"
