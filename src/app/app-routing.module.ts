import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundComponent } from './background/background.component';
import { CommunityComponent } from './community/community.component';
import { EventsComponent } from './events/events.component';
import { ModelsComponent } from './models/models.component';
import { TestrideComponent } from './testride/testride.component';

const routes: Routes = [{ path: 'background', component: BackgroundComponent }, { path: 'models', component: ModelsComponent }
  , { path: 'events', component: EventsComponent },
{ path: 'community', component: CommunityComponent },
{ path: 'testride', component: TestrideComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
