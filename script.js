document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.switch input');
  const modeText = document.getElementById('tema');

  // verifica se já tem um tema salvo no armazenamento local
  const savedTheme = localStorage.getItem('theme');

  // se há um tema salvo e for 'dark', aplica o tema escuro ao carregar a página
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    modeText.innerText = 'Escuro';
    themeToggle.checked = true; // ativa o switch
  }

  // adiciona um event listener para o switch
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      modeText.innerText = 'Escuro';
      localStorage.setItem('theme', 'dark'); // salva o tema 'dark' no armazenamento local
    } else {
      document.body.classList.remove('dark-mode');
      modeText.innerText = 'Claro';
      localStorage.setItem('theme', 'light'); // salva o tema 'light' no armazenamento local
    }
  });
});
