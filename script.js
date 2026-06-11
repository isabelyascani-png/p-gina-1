// Criando o objeto do Transporte Escolar
const transporteEscolar = {
    tipoVeiculo: "Van",
    capacidadeMax: 15,
    alunosEmbarcados: 0,
    statusPortas: "Fechadas",
    velocidadeAtual: 0,

    // Método para simular o embarque de um aluno com segurança
    embarcarAluno: function(nomeAluno) {
        if (this.alunosEmbarcados < this.capacidadeMax) {
            this.statusPortas = "Abertas";
            this.alunosEmbarcados++;
            console.log(`🚌 ${nomeAluno} embarcou com segurança! Alunos a bordo: ${this.alunosEmbarcados}`);
            this.statusPortas = "Fechadas";
        } else {
            console.log("⚠️ Capacidade máxima atingida! Não é permitido passageiros em pé.");
        }
    },

    // Método para simular o trajeto
    iniciarTrajeto: function(destino) {
        if (this.statusPortas === "Fechadas" && this.alunosEmbarcados > 0) {
            this.velocidadeAtual = 40; // Velocidade segura e regulamentada
            console.log(`🛣️ Rota iniciada em direção a(o): ${destino}. Velocidade: ${this.velocidadeAtual} km/h.`);
        } else {
            console.log("❌ Não é possível iniciar o trajeto. Verifique as portas ou se há alunos a bordo.");
        }
    }
};

// Executando a lógica no sistema:
transporteEscolar.embarcarAluno("Lucas");
transporteEscolar.embarcarAluno("Mariana");
transporteEscolar.iniciarTrajeto("Escola Primária Municipal");
