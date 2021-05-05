
public class TesteReferencias {
	
	public static void main(String[] args) {
		
		Gerente gerente1 = new Gerente();
		gerente1.setNome("maria");
		gerente1.setSalario(5000.00);
		
		EditorVideo ev1 = new EditorVideo();
		ev1.setSalario(2500.00);
		
		Designer d = new Designer();
		d.setSalario(3000.00);
				
		ControleBonificacao controle = new ControleBonificacao();
		controle.registra(gerente1);
		controle.registra(ev1);
		controle.registra(d);
		
		System.out.println(controle.getSoma());
	
	}
	

}
