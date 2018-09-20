import { Component } from '@angular/core';

import { ScoresPage } from '../scores/scores';
import { TournamentsPage } from '../tournaments/tournaments';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScoresPage;
  tab3Root = GamesPage;
  tab4Root = TournamentsPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
