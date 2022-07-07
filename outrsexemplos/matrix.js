var c = document.getElementById("c");
var ctx = c.getContext("2d");

// Faz o <canvas> ficar em tela cheia
c.height = window.innerHeight;
c.width = window.innerWidth;

// Caracteres chineses do matrixY
var chinese = "田G由00G1甲申1A0甴电0H甶1J男甸甹0Z町0F1画L1甼A甽甾00甿S1OZ0畀Ç畁畂0畃1畄I1SA畅X00A畆1畇F1畈40L畉畊1R畋界1D0QH畍N1JQ4畎1~畏畐00A畑ABV";
// Converte a string em um array de caracteres únicos
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; // Número de colunas do efeito (largura do <canvas> / tamanho da fonte)
// Um array cai - por coluna
var drops = [];
// A variável x representa a coordenada X
// Coordenada da queda 1=y (repete-se em cada inicialização)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

// Escrevendo os caracteres
function draw()
{
    // Fundo preto no <canvas>
    // Fundo translucido para mostrar o efeito dos caracteres
    ctx.fillStyle = "rgba(70, 70, 70, 0.01)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0"; // Texto verde
    ctx.font = font_size + "px arial";
    // Loop entre as quedas de caracteres
    for(var i = 0; i < drops.length; i++)
    {
        // Escreve um caractere chinês aleatório
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        // x = i*tamanho_da_fonte || y = valor das quedas[i]*tamanho_da_fonte
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        // Manda a queda de volta ao topo depois de atravessar toda a tela
        // Randomizando o reset para as quedas se espalharem verticalmente na tela
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        // Incrementando a coordenada Y
        drops[i]++;
    }
}

setInterval(draw, 33);