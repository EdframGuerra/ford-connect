import { Component, OnInit } from '@angular/core';
// Importa o tipo 'Modal' do Bootstrap para controle programático do modal
declare var bootstrap: any;

// Definição da classe Car (adaptada do seu desafio JavaScript)
export class Car {
  constructor(
    public nome: string,
    public preco: string,
    public alturaCacamba: number,
    public alturaVeiculo: number,
    public alturaSolo: number,
    public capacidadeCarga: number,
    public motor: number,
    public potencia: number,
    public volumeCacamba: number,
    public roda: string,
    public image: string // O nome do arquivo da imagem (ex: 'ranger.png')
  ) {}
}

@Component({
  selector: 'app-vehicle-compare-table',
  standalone:false,
  templateUrl: './vehicle.compare.table.html',
  styleUrls: ['./vehicle.compare.table.css']
})
export class VehicleCompareTable implements OnInit {
  // Lista de todos os veículos disponíveis para seleção
  allVehicles: Car[] = [];
  // Array para armazenar os carros selecionados para comparação (máximo 2)
  carArr: Car[] = [];
  // Propriedades para o conteúdo do modal
  modalTitle: string = '';
  modalMessage: string = '';

  // PROPRIEDADES PARA O FEEDBACK DA MENSAGEM
  message: string = '';
  messageType: string = 'alert-info';

  private comparisonModal: any; // Referência ao objeto modal do Bootstrap

  constructor() { }

  ngOnInit(): void {
    // Popula a lista de todos os veículos (dados mockados para demonstração)
    // Extensão das imagens alterada de .jpg para .png
    this.allVehicles = [
      new Car('Ford Ranger', 'R$ 200.000,00', 511, 1821, 232, 1234, 2.2, 160, 1420, 'Aço 16', 'ranger.png'),
      new Car('Ford Mustang', 'R$ 500.000,00', 0, 1394, 130, 0, 5.0, 483, 0, 'Liga Leve 19', 'mustang.png'),
      new Car('Ford Bronco Sport', 'R$ 250.000,00', 0, 1780, 223, 0, 2.0, 240, 0, 'Liga Leve 17', 'broncoSport.png'),
      new Car('Ford Territory', 'R$ 180.000,00', 0, 1674, 190, 0, 1.5, 150, 0, 'Liga Leve 18', 'territory.png')
    ];
    // Inicializa a mensagem de feedback
    this.updateMessage();

    // Inicializa o modal do Bootstrap
    // Garante que o DOM esteja carregado e que 'bootstrap' esteja disponível
    setTimeout(() => {
      const modalElement = document.getElementById('comparisonMessageModal');
      // Acessa 'bootstrap' através do objeto global 'window' para maior robustez
      // E verifica se 'bootstrap' e 'modalElement' existem antes de tentar inicializar
      if (modalElement && (window as any).bootstrap) {
        this.comparisonModal = new (window as any).bootstrap.Modal(modalElement);
      } else {
        console.warn("Bootstrap Modal não pôde ser inicializado. Verifique se o Bootstrap JS está carregado e o elemento do modal existe.");
      }
    }, 100); // Um pequeno atraso para garantir que o Bootstrap JS esteja totalmente carregado
  }

  /**
   * Verifica se um veículo está atualmente selecionado para comparação.
   * Usado para manter o estado do checkbox.
   * @param vehicle O objeto Car a ser verificado.
   * @returns True se o veículo estiver em carArr, False caso contrário.
   */
  isVehicleSelected(vehicle: Car): boolean {
    return this.carArr.some(c => c.nome === vehicle.nome);
  }

  /**
   * Adiciona ou remove um veículo do array de comparação, aplicando a regra de 2 veículos.
   * Exibe mensagens no modal se as regras forem violadas.
   * @param event O evento de mudança do checkbox.
   * @param vehicle O objeto Car associado ao checkbox.
   */
  toggleVehicleForComparison(event: any, vehicle: Car): void {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Se o checkbox foi marcado
      if (this.carArr.length < 2) {
        this.carArr.push(vehicle);
      } else {
        // Já existem 2 carros selecionados, impede a seleção e desmarca o checkbox
        event.target.checked = false;
        this.showModal('Limite de Seleção Atingido', 'Só é possível exibir comparação entre 2 veículos.');
      }
    } else {
      // Se o checkbox foi desmarcado, remove o veículo do array
      this.carArr = this.carArr.filter(c => c.nome !== vehicle.nome);
    }
    this.updateMessage(); // Chamado para atualizar a mensagem após a seleção
  }

  /**
   * Atualiza a mensagem de feedback para o usuário com base no número de veículos selecionados.
   */
  updateMessage(): void {
    if (this.carArr.length === 0) {
      this.message = 'Selecione 2 veículos para comparação.';
      this.messageType = 'alert-info';
    } else if (this.carArr.length === 1) {
      this.message = 'Selecione mais 1 veículo para comparar.';
      this.messageType = 'alert-info';
    } else if (this.carArr.length === 2) {
      this.message = 'Dois veículos selecionados. A tabela de comparação está abaixo.';
      this.messageType = 'alert-success';
    }
  }

  /**
   * Exibe o modal com a mensagem e título fornecidos.
   * @param title Título do modal.
   * @param message Mensagem a ser exibida no modal.
   */
  showModal(title: string, message: string): void {
    this.modalTitle = title;
    this.modalMessage = message;
    if (this.comparisonModal) {
      this.comparisonModal.show();
    } else {
      console.warn(`Modal não inicializado: ${title} - ${message}`);
    }
  }

  /**
   * Limpa a seleção de carros para comparação.
   */
  clearSelection(): void {
    this.carArr = [];
    this.updateMessage(); // Chamado para atualizar a mensagem
    console.log('Seleção de veículos limpa.');
    // Os checkboxes serão desmarcados automaticamente via [checked] binding.
  }
}
