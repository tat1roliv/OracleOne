
public class TesteReferencias {
	
	public static void main(String[] args) {
		
		Funcionario gerente1 = new Gerente();
		gerente1.setNome("maria");
		gerente1.setSalario(5000.00);
		
		Funcionario fun1 = new Funcionario();
		fun1.setSalario(2000.00);
		
		Funcionario ev1 = new EditorVideo();
		ev1.setSalario(2500.00);
			
	
		ControleBonificacao controle = new ControleBonificacao();
		controle.registra(gerente1);
		controle.registra(fun1);
		controle.registra(ev1);
		
		System.out.println(controle.getSoma());
	
	}
	

}
