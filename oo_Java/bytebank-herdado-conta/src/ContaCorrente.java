public class ContaCorrente extends Conta {

        public ContaCorrente(int agencia, int numero) {
            super(agencia, numero);
        }
        
       @Override
    public boolean saca(double valor) {	   
	    double valorASacar = valor + 0.20;//tarifa de saque para esta conta
	    return super.saca(valorASacar);
    } 
             
}