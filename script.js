var result = document.querySelector("div#textoapoio")
var img = document.querySelector("img#imgcct")
    function comoDescartar(){
        result.innerHTML = '<p id="textocct">Deve-se separar o lixo seco do lixo úmido, lavar as embalagens-longa vida, latas, garrafas e frascos de vidro e plástico (facilita a reciclagem para os coletores).</p><ul><li>Quais materiais reciclar?Recicla-se materiais de vidro, plástico, papel,papelão, metal, madeira e orgânicos.</li><li>Quais materiais NÃO reciclar?Não se deve reciclar papéis plastificados, papéis sanitários (papel higiênico), etiquetas adesivas, papéis engordurados, papel carbono, papéis parafinados, fotografias, papel celofane, bitucas de cigarros, guardanapos e isopor.</li><li>Quais as embalagens mais poluentes?As bandejas e sacolas de frutas/mercado, embalagens de bolos e doces, objetos embalados em plástico, filme plástico, garrafas plásticas.</li></ul>'
        img.src = ''
    }
    function coletaSeletiva(){
        result.innerHTML = '<p id="textocct">A coleta seletiva é uma alternativa para a reutilização de materiais que poderiam ser descartados de forma incorreta e assim acarretar diversos problemas para o meio ambiente e para nossa vida. Com o correto direcionamento desses materiais, esse sistema fica responsável por separar e classificá-los em reutilizáveis ou não. </p><p id="textocct">pós essa classificação e seleção, entra a reciclagem, que é uma solução para reaproveitar todos esses produtos que não serviriam mais para nada, dando-os assim uma nova funcionalidade. Por meio desses sistemas é possível diminuir o fluxo e sobrecarga em depósitos de resíduos, como lixões ou aterros sanitários.</p><p id="textocct">A coleta seletiva é uma importante aliada em nossas vidas pois evita a poluição do solo, das águas, e do ar, muitas vezes atingidos pelo mau descarte desses materiais. A intenção de separar os resíduos e reciclá-los é essencial para o desenvolvimento sustentável da Terra, podendo assim, prolongar a nossa estadia nela.</p>'
        img.src = ''
    }
    function tempodedec(){
        img.src = "imagens/pageverde.png"
        result.innerHTML = ''
    }