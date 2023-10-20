
export default class ValidaCpf{
    constructor(cpfEnviado){
       Object.defineProperty(this, 'cpfLimpo', {
          writable: false,
          enumerable: false,
          value : cpfEnviado.replace(/\D+/g, '')
       })
    }
    eSequencia(){
       return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo;
    }
  static geraDigito(cpfParcial){
       let total = 0;
       let reverso = cpfParcial.length + 1;
       
       for(let numero of cpfParcial){
          total += reverso * Number(numero);
          reverso--;
       }
       const Digito = 11 - (total % 11)
       return Digito <= 9 ? String(Digito) : '0'
    }
   geraNovoCpf(){
       const cpfParcial = this.cpfLimpo.slice(0, -2)
       const Digito1 = this.geraDigito(cpfParcial);
       const Digito2 = this.geraDigito(cpfParcial + Digito1);
       this.novoCpf = cpfParcial + Digito1 + Digito2;
    }
    Valida(){
       if(!this.cpfLimpo) return false;
       if(this.cpfLimpo.length != 11) return false;
       if(typeof this.cpfLimpo !== 'string') return false;
       if(this.eSequencia()) return false;
       this.geraNovoCpf();
      
       return this.novoCpf == this.cpfLimpo;
    }
 }
 console.log('até aqui')