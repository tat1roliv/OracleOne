package br.com.bytebank.banco.teste.util;

import java.util.ArrayList;
import java.util.List;

public class TesteOutroWrapper {

	 public static void main(String[] args) {

         Integer idadeRef = Integer.valueOf(29); //autoboxing
         System.out.println(idadeRef.intValue()); //unboxing

         Double dRef = Double.valueOf(3.2);//autoboxing
         System.out.println(dRef.doubleValue());//unboxing

         Boolean bRef = Boolean.FALSE;
         System.out.println(bRef.booleanValue());

         Number refNumero = Integer.valueOf(29);

         List<Number> lista = new ArrayList<>();
         lista.add(10);
         lista.add(32.6);
         lista.add(25.6f);
         
         Integer valorRef = Integer.valueOf(33); // delegando a criação para método valueOf
         int valorPri = valorRef.intValue(); //desembrulhando, pegando o valor primitivo do objeto wrapper

         System.out.println(valorPri); //33
         
         Integer iParseado1 = Integer.valueOf("42"); //parseando e devolvendo referencia
         int iParseado2 = Integer.parseInt("44");  //parseando e devolvendo primitivo

         System.out.println(iParseado1); //42
         System.out.println(iParseado2); //44
         
         System.out.println(Integer.MAX_VALUE); // 2^31 - 1
         System.out.println(Integer.MIN_VALUE); //-2^31

         System.out.println(Integer.SIZE); // 32 bits
         System.out.println(Integer.BYTES); //4 Bytes
 }
}

