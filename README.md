baseado-bolado/
├── index.html
├── style.css
├── script.js
├── imagens/
│   └── logo.png
│   └── camiseta.png

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Baseado Bolado</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <img src="imagens/logo.png" alt="Logo Baseado Bolado" class="logo" />
    <nav>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Loja</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Baseado Bolado</h1>
      <p>Estilo que acende ideias</p>
      <a href="#" class="btn">Conheça nossos produtos</a>
    </section>

    <section class="produtos">
      <h2>Camisetas</h2>
      <div class="produto">
        <img src="imagens/camiseta.png" alt="Camiseta Tie-Dye" />
        <h3>Camiseta Tie-Dye</h3>
        <p>R$120</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Baseado Bolado. Todos os direitos reservados.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #0d1f1e;
  color: #f5f5dc;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1c3a36;
}

.logo {
  height: 60px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: #f5f5dc;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background-image: url('imagens/bg.jpg');
  background-size: cover;
}

.btn {
  background-color: #d4af37;
  color: #0d1f1e;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}

.produtos {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.produto {
  background-color: #1c3a36;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
}

.produto img {
  width: 100%;
  border-radius: 5px;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #1c3a36;
}
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});
