package br.com.bytebank.banco.modelo;

public class GuardadorReferencias {
	
	private Object[] referencias;
	private int posicaolivre;
	
	public GuardadorReferencias() {
		this.referencias = new Object[10];
		this.posicaolivre = 0;
	}

	public void adiciona(Conta ref) {
		this.referencias[this.posicaolivre] = ref;
		this.posicaolivre++;
		
	}

	public int getQuantElementos() {
		return this.posicaolivre;
	}

	public Object getReferencia(int pos) {
		return this.referencias[pos];
	}

}
