/**
 * @author Luan de Souza Nascimento <https://github.com/darkisda>
 */
export default class Queen {
    
    private countSolucao: number
    
    constructor() {
        this.countSolucao = 0
    }

    /**
     * Executa o problema
     * @param tab Tabuleiro que contem as Rainhas
     * @param col Número da Coluna atual
     */
    public executar(tab: string[][], col: number) {
        
        if(col === tab.length) {
            console.log('Soluções: ' + this.countSolucao +1 )
            this.countSolucao ++
            console.log(this.toString(tab))
            return
        }

        for (let i = 0; i < tab.length; i++) {
            /**
             * Verifica se é seguro colocar naquela posição
             */
            if(this.eSeguro(tab, i, col)) {
                /**
                 * Insere a rainha naquela posição
                 */
                tab[i][col] = '1'

                /**
                 * Recursividade
                 */
                this.executar(tab, col+1)

                /**
                 * Remove a rainha caso o executar da anterior tenha dado errado (Backtracking)
                 */
                tab[i][col] = '0'
            }
        }
    }

    /**
     * Método que irá verificar se é Seguro colocar a Rainha em determinada posição no Tabuleiro
     * @param {string[][]} tab Tabuleiro que contem as Rainhas
     * @param {number} lin Número da Linha atual
     * @param {number} col Número da Coluna atual
     * @returns {boolean} Se for TRUE, significa que a posição é válida, caso contrário, não sera
     */
    private eSeguro(tab: string[][], lin: number, col: number): boolean {

        /**
         * Verifica se é seguro na linha
         */
        for (let i = 0; i < tab.length; i++) {
            if(tab[lin][i] === '1') {
                return false
            }
        }

        /**
         * Verifica se é seguro na coluna
         */
        for (let i = 0; i < tab.length; i++) {
            if(tab[i][col] === '1') {
                return false
            }
        }

        /**
         * Verifica se é seguro na diagonal principal
         * Parte de cima da diagonal principal
         */
        for(let i = lin, j = col; i >= 0 && j >= 0; i--, j--) {
            if(tab[i][j] === '1') {
                return false
            }
        }
        /**
         * Parte de baixo da diagonal principal
         */
        for(let i = lin, j = col; i < tab.length && j < tab.length; i++, j++) {
            if(tab[i][j] === '1') {
                return false
            }
        }

        /**
         * Verifica se é segura na diagonal segundária
         * Parte de cima da diagonal segundária
         */
        for(let i = lin, j = col; i >= 0 && j < tab.length; i--, j++) {
            if(tab[i][j] === '1') {
                return false
            }
        }
        /**
         * Parte de baixo da diagonal secundária
         */
        for (let i = lin, j = col; i < tab.length && j >= 0; i++, j--) {
            if(tab[i][j] === '1') {
                return false
            }
        }

        /**
         * Significa que a posição é segura
         */
        return true
    }

    /**
     * Retorna o tabuleiro em formato de String
     * @param tab Tabuleiro que cotem as Rainhas
     */
    private toString(tab: string[][]) {
        let resposta = ''
        for (let i = 0; i < tab.length; i++) {
            for (let j = 0; j < tab[i].length; j++) {
                if(tab[i][j] === '1') {
                    resposta += '☼'
                } else {
                    resposta += '_'
                }
            }
            resposta += '\n'
        }
        return resposta
    }
}