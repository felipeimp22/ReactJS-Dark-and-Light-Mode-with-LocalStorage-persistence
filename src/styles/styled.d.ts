/**
 * Type script nao consegue automaticamente injetar as porpriedades que styled component
 * vai ter. exemplo os temas.
 *
 * Esse arquivo serve para configurar e informar isso para o typescript esse arquivo é chamado
 * de arquivo de definição de tipos, definições de tipos globais que vao ser acessiveis pela nossa
 * aplicação.
 */
import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            text: string;
        }
    }
}