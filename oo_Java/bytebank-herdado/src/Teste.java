
public class Teste {

	public static void main(String[] args) {
		Funcionario2 f1 = new Funcionario2() ;
		f1.setSalario(3000.00);
		System.out.println(f1.getTipo());
		System.out.println(f1.getBonificacao());
		
		Funcionario2 f2 = new Funcionario2() ;
		f2.setTipo(1);
		f2.setSalario(5000.00);
		System.out.println(f2.getTipo());
		System.out.println(f2.getBonificacao());
	}
	
}
