import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.startBackgroundImageRotation();
  }

  startBackgroundImageRotation() {
    const images = [
      '../../../assets/food1.jpg',
      '../../../assets/food2.jpg',
      '../../../assets/food3.jpg'
    ];

    let currentImageIndex = 0;
    const heroElement = document.querySelector('.hero') as HTMLElement;

    // Imposta l'immagine iniziale subito all'avvio
    heroElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;

    function changeBackgroundImage() {
      // Applica la classe fade-out per iniziare la dissolvenza
      heroElement.classList.add('fade-out');

      // Dopo 0.755 secondi (il tempo della transizione CSS), cambia l'immagine e rimuovi la classe
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        heroElement.classList.remove('fade-out');
      }, 700); // corrisponde alla durata della transizione CSS
    }

    // Avvia il cambio d'immagine ogni 5 secondi, iniziando dopo il primo ciclo (5s)
    setInterval(changeBackgroundImage, 5000);
  }
}
