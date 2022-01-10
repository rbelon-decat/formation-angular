import { Component } from '@angular/core';
import { environment } from 'environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.shop_name;
}

/*
 * <|> Création d'un projet Angular e-commerce <|>
 * Création de la BDD json-server : 1 tableau de produits avec des attributs "id", "title", "photos" (String), "disponibilité", "prix", "description"
 * Création d'une navigation avec Bootstrap : page d'accueil + page produit
  * Faire le routing
 * Faire un service pour les produits
 * Récupérer tous les produits de la BDD
 */
