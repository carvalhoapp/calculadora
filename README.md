<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="favicon" rel="shortcut icon" href="img/icon.png">
    <title>D Color - Calculadora de Orçamento (m²)</title>

    <link rel="stylesheet" href="https://dcolor.net/calculadora/css/styles.css">
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
            <p>Todos os direitos reservados - <a href="http://dcolor.net">D Color</a> &copy; 2021</p>
        </div>

    </main>

</body>

<script src="https://dcolor.net/calculadora/javascript/scripts.js"></script>

</html>
