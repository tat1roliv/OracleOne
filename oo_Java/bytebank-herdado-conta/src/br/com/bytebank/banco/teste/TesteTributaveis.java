package br.com.bytebank.banco.modelo;

import br.com.bytebank.banco.modelo.*;

public class TesteTributaveis { 

    public static void main(String[] args) {
        modelo.ContaCorrente cc = new modelo.ContaCorrente(222, 333);
        cc.deposita(100.0);

        modelo.SeguroDeVida seguro = new modelo.SeguroDeVida();

        modelo.CalculadorDeImposto calc = new modelo.CalculadorDeImposto();
        calc.registra(cc);
        calc.registra(seguro);

        System.out.println(calc.getTotalImposto());        
    }
    
}
/*
FQN (Full Qualified Name) = Nome Pacote . Nome Simples da Classe
*/