
public class TestaConversao {

	public static void main(String[] args) {
		double salario = 1270.50; //bigdecimo
		int valor = (int) salario;  //casting
		
		System.out.println(valor);
		
		//tipos primitivos (n) 
		
		//int-> 32bits
		//double-> 32bits
		//float-> 99.99f;
		//long ->64 bits
		
		long numeroGrande = 2547863L;//long
		System.out.println(numeroGrande);
		
		//short -> 16 bits
		short numeroP = 23309;
		System.out.println(numeroP);
		
		//byte -> 8bits
		byte b = 127;
		System.out.println(b);
		
		double valor1 = 0.2;
		double valor2 = 0.1;
		double tot = valor1 + valor2;
		System.out.println(tot);

	}

}
