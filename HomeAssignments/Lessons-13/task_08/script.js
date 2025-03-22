if (confirm('Почати тестування?')) {
  if (confirm('Перейти до новин?')) window.location.href = 'https://www.ukr.net/'
  else setTimeout(() => window.location.href = 'https://www.ukr.net/', 20000)
}