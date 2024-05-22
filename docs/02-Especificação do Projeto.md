# Especificações do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Doadores de Alimentos Jurídico </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Estabelecimentos que desejam doar alimentos.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Acesso rápido e fácil a plataforma de doação de alimentos;
2. Praticidade na hora do cadastro do restaurante na plataforma;
3. Facilidade em cadastrar os alimentos para a redistribuição;
4. Informações completas do redirecionamento dos alimentos doados;
5. Simplicidade em manter contato com os receptores de alimentos.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 2: ONGs e Projetos Sociais </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Ongs e Projetos Sociais com o intuito de ajudar a diminuir o desperdício de alimento e ajudar os mais necessitados.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Acesso rápido e fácil a plataforma de doação de alimentos;
2. Praticidade na hora do cadastro na plataforma;
3. Facilidade em verificar os alimentos cadastrados disponíveis;
4. Informações completas de quem doou aqueles alimentos;
5. Simplicidade em manter contato com os doadores dos alimentos;
6. Garantia de segurança em relação aos alimentos doados.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 3: Doadores de Alimentos Físicos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Pessoa que deseja doar alimentos para os necessitados.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Acesso rápido e fácil a plataforma de doação de alimentos;
2. Facilidade para encontrar o local de doação/coleta de alimentos mais proximo de sua localidade;
3. Simplicidade em manter contato com os doadores dos alimentos
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Doador de Alimento | cadastrar-me no site de doação de alimentos | receber doações e distribuílas de forma eficiente para as pessoas necessitadas. |
|Doador de Alimento | realizar o login no site  | para realizar doações. |
|ONGs e Projetos Sociais | permitir que a instituição inclua itens desejados para doação | para maior acertividade das doações. |
|Pessoa Física | encontrar os pontos de coleta de alimentos   | contribuir com doações e ajudar quem mais precisa. |
|ONGs e Projetos Sociais | criar campanhas sazonais de doação, como "Natal Solidário" ou "Páscoa Generosa" | envolver toda a comunidade local na causa de doação de alimentos. |
|Doadores de Alimento | conseguir manter contato diretamente com os receptores dos alimentos para doação | ter um melhor controle e noção de quem está recebendo os alimentos. |
|Administrador do Site | ter acesso a um painel de controle eficiente | gerenciar instituições. |
|Administrador do Site | ter acesso a um painel de controle eficiente | gerenciar usuários. |
| Usuário | ter acesso as informações cadastradas | possa ter acesso as informações desejadas. |
| Usuário | receber uma confirmação visual após a submissão de um formulário.| ter uma resposta da interação no site. |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| A aplicação deve permitir ao usuário cadastrar uma conta.   | ALTA | 
|RF-02| A aplicação deve permitir ao usuário fazer o login da sua conta cadastrada.   | ALTA | 
|RF-03| A aplicação deve permitir a instituição cadastre os itens desejados para a doação.    | ALTA |
|RF-04| A aplicação deve permitir que doadores físicos encontrem pontos de coleta de alimentos.  | ALTA |
|RF-05| A aplicação deve permitir criar campanhas sazonais de doação de alimentos.    | ALTA |
|RF-06| A aplicação deve permitir e facilitar o contato entre o doador e o receptor do alimento.   | MÉDIA |
|RF-07| A aplicação deve permitir  que o usuário tenha acesso a um vídeo de apresentação sobre o site. | MÉDIA |
|RF-08| A aplicação deve permitir ver as campanhas que estão ativas.| ALTA |
|RF-09| A aplicação deve permitir ao usuário verificar as informações registradas no cadastro, após fazer seu login. | ALTA |
|RF-10| O sistema deve fornecer feedback claro para ações do usuário, como confirmações de formulários e mensagens de erro.| ALTA |

**Prioridade: Alta / Média / Baixa.  

### Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| A aplicação deve ser publicada em um ambiente acessível público na Internet.  | ALTA | 
|RNF-02| A aplicação deve ser responsiva, tendo boas exibições em diversos tamanhos de tela. Como em tablets, celulares e computadores.  | ALTA | 
|RNF-03| O código-fonte deve ser de fácil compreensão e seguir as convenções de codificação estabelecidas pela equipe de desenvolvimento. Isso inclui a utilização de comentários claros e descritivos, nomes de variáveis e funções significativos, e a aderência a um estilo de codificação consistente que é documentado e compartilhado entre a equipe  | ALTA | 
|RNF-04| A aplicação deve ser compatível com os navegadores O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Opera e Microsoft Edge.  | ALTA | 
|RNF-05| O sistema deve implementar políticas de senha robustas, incluindo requisitos de complexidade, Como um mínimo de 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.  | ALTA | 

**Prioridade: Alta / Média / Baixa.
