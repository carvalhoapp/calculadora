<head>

        <title>RCARVALHO - Calculadora (m²)</title>

    <link rel="stylesheet" href="/styles.css">
        
</head>

<body>

    <main id="container">

        <a href="http://dcolor.net">
            <i id="logo"></i>
        </a>

        <form action="" id="form-calculator">
            <div id="errors">
                <span class="error-description"></span>
                <span class="error-close">x</span>
            </div>

            <div class="field">
                <input type="text" name="largura" id="largura" placeholder="Largura (cm)" required>
                <input type="text" name="altura" id="altura" placeholder="Altura (cm)" required>
            </div>
            <input type="text" name="quantidade" id="quantidade" placeholder="Quantidade">
            <div class="field-check-box">
                <div class="field-check">
                    <input type="checkbox" name="corte" id="corte">
                    <label for="corte">Corte</label>
                </div>
                <div class="field-check">
                    <input type="checkbox" name="verniz" id="verniz">
                    <label for="verniz">Verniz</label>
                </div>
            </div>
            <input type="text" name="m2" id="m2" placeholder="Valor m²" required>
            <div class="field">
                <button type="reset" class="btn-clear">Limpar</button>
                <button type="submit" class="btn-submit">CALCULAR</button>
            </div>
        </form>

        <div id="resultado">
            <p>VALOR FINAL:</p>
            <h2 id="valor-final">R$00,00</h2>
        </div>

        <div id="footer">
            <p>Todos os direitos reservados - RCARVALHO &copy; 2017</p>
        </div>

    </main>

</body>

<script src="/scripts.js"></script>

</html>
