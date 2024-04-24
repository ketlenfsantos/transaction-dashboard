// FORMATAÇÃO DE ITENS

// formato de data
export const dateFormatter = new Intl.DateTimeFormat('pt-BR');


// formato de preço

export const priceFormatter = new Intl.NumberFormat(
    'pt-BR', {
    // formatar como moeda:
    style: 'currency',
    currency: 'BRL', //colocar o R$
}
)