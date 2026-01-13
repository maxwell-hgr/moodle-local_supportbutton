# CEAD - Moodle Plugin: Local SUPPORTBUTTON
## Descrição
Esse plugin integra o Moodle ao Zammad para suporte do AVA da Universidade de Brasília.
**O plugin busca substituir o recurso de HTML adicional nativo do Moodle para maior controle da equipe de TI.**

## Instalação
1. Copie a pasta do plugin para moodle_root/local/.
2. Acesse o Moodle como administrador para terminar a instalação.
3. No servidor onde está hospedado o Moodle, rode o comando npx grunt --include=local_supportbutton para gerar o build.

## Recursos
 - Botão e modal com estilos customizáveis.
 - Conexão externa com plataforma de suporte (Zammad).
 - Validação referente ao número de atendentes.
 - Formulário para registro de mensagem (em caso de falta de atendentes).

## Requisitos
 - Moodle 4.5 ou maior.
 - PHP 7.3 ou maior.
 - Permissão de Admin.

## License
This project is licensed under the GNU General Public License.

## Author
Maxwell H. S. Souza
