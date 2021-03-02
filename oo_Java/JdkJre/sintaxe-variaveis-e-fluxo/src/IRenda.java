
public class IRenda {

	public static void main(String[] args) {
		double salario = 3300.0;
		double calcDesconto = 0;
		double salarioLiq = 0;
				
		if (salario >= 1900.0 && salario <= 2800.0) {
			
			calcDesconto = (salario * 7.5/100);
			if (calcDesconto > 142) {
				calcDesconto = 142;
			}
			salarioLiq = salario - calcDesconto;
			System.out.println("O desconto foi de R$ " + calcDesconto + ", salário líquido de R$ " + salarioLiq);
		}
		if (salario >= 1900.1 && salario <= 3751.0){
			
			calcDesconto =  (salario * 15/100);
			if (calcDesconto > 350) {
				calcDesconto = 350;
			} 
			salarioLiq = salario - calcDesconto;
			System.out.println("O desconto foi de R$ " + calcDesconto + ", salário líquido de R$ " + salarioLiq);
		}
		if (salario >= 3751.01 && salario <= 4664.00){
			calcDesconto = (salario * 22.5/100);
				if (calcDesconto > 636) {
					calcDesconto = 636;
				} 
			salarioLiq = salario - calcDesconto;
			System.out.println("O desconto foi de R$ " + calcDesconto + ", salário líquido de R$ " + salarioLiq);
		}

	}

}
