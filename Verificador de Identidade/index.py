nome = input('Nome:')
idade = int(input ('Idade: '))

def identidade(nome, idade):

    if idade >= 18 and idade <= 59:
        return nome + " você é maior de idade!"
    elif idade >= 60:
        return nome + " você é um idoso!"
    else:
        return nome + " você é menor de idade!"

mensagem = identidade(nome, idade)
print(mensagem)