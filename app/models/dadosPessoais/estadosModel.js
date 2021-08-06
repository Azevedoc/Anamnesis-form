const estadosDB = [
    {
        id: 'AC',
        value: 'Acre'
    },
    {
        id: 'AL',
        value: 'Alagoas'
    },
    {
        id: 'AP',
        value: 'Amapá'
    },
    {
        id: 'AM',
        value: 'Amazonas'
    },
    {
        id: 'BA',
        value: 'Bahia'
    },
    {
        id: 'CE',
        value: 'Ceará'
    },
    {
        id: 'DF',
        value: 'Distrito Federal'
    },
    {
        id: 'ES',
        value: 'Espírito Santo'
    },
    {
        id: 'GO',
        value: 'Goiás'
    },
    {
        id: 'MA',
        value: 'Maranhão'
    },
    {
        id: 'MT',
        value: 'Mato Grosso'
    },
    {
        id: 'MS',
        value: 'Mato Grosso do Sul'
    },
    {
        id: 'MG',
        value: 'Minas Gerais'
    },
    {
        id: 'PA',
        value: 'Pará'
    },
    {
        id: 'PB',
        value: 'Paraíba'
    },
    {
        id: 'PR',
        value: 'Paraná'
    },
    {
        id: 'PE',
        value: 'Pernambuco'
    },
    {
        id: 'PI',
        value: 'Piauí'
    },
    {
        id: 'RJ',
        value: 'Rio de Janeiro'
    },
    {
        id: 'RN',
        value: 'Rio Grande do Norte'
    },
    {
        id: 'RS',
        value: 'Rio Grande do Sul'
    },
    {
        id: 'RO',
        value: 'Rondônia'
    },
    {
        id: 'RR',
        value: 'Roraima'
    },
    {
        id: 'SC',
        value: 'Santa Catarina'
    },
    {
        id: 'SP',
        value: 'São Paulo'
    },
    {
        id: 'SE',
        value: 'Sergipe'
    },
    {
        id: 'TO',
        value: 'Tocantins'
    }
]

const list = () => {
    return estadosDB
};

const searchForID = (id) => {
    const result = id.filter((item) => {
        item.id === id
        if(result.length > 0){
            return result[0]
        }else{
            return undefined
        }
})};

const searchForValue = ((value) => {
    const result = value.filter((item) => {
        item.value === definicao
        if(result.length > 0){
            return result[0]
        }else{
            return undefined
        }
    }
)});

module.exports = {
    list,
    searchForID,
    searchForValue
}