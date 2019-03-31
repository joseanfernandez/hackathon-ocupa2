import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { BotComponent } from './components/bot/bot.component';
import { LogComponent } from './components/log/log.component';

const routes: Routes = [
  { path: '', component: RankingComponent },
  // { path: 'ranking', component: RankingComponent},
  { path: 'admin', component: BotComponent},
  // { path: 'log', component: LogComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
