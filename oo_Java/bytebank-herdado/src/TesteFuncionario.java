
public class TesteFuncionario {

	public static void main(String[] args) {
		
		Funcionario nico = new Funcionario();
		nico.setNome("Nico XXX");
		nico.setSalario(2600.00);
		nico.setCpf("123.456.789-44");
		
		System.out.println(nico.getNome());
		System.out.println(nico.getBonificacao());
		
		//nico.salario = 3000;
		
	}
	
}
