function converterSegundos(segundos) {
    const hora = Math.floor(segundos / 3600);
    const minutos = Math.floor(segundos  % 3600 / 60);
    const segs = Math.floor(segundos % 60);

    const horaFormatada = String(hora).padStart(2, '0');
    const minutoFormatado = String(minutos).padStart(2, '0');
    const segundosFormatado = String(segs).padStart(2, '0');

    return `${horaFormatada}:${minutoFormatado}:${segundosFormatado}`;
}

console.log(converterSegundos(3725));

const maquinaEstado = {
    estado: 'Pausado',

    mudarParaRodando() {
        if (this.estado === 'Rodando') {
            return 'Já está rodando';
        } else {
            this.estado = 'Rodando';
            return 'Estado alterado!'
        }
    },

    mudarParaPausado() {
        if (this.estado === 'Parado') {
            return 'Já está parado';
        } else {
            this.estado = 'Parado';
            return 'Estado alterado para parado!';
        }
    },

    resetar() {
        this.estado = 'Pausado';
        return 'Estado resetado!'
    }
}

console.log(maquinaEstado.mudarParaRodando());

function contagemRegressiva(segundosAtuais) {
    const date = new Date(segundosAtuais * 1000);

    
}