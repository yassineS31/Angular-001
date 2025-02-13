import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TPEVALComponent } from './tp-eval/tp-eval.component';
import { BlogControlCenterComponent } from './blog-control-center/blog-control-center.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Plantservice } from './services/plant.service';
import { PlantListComponent } from './plant-list/plant-list.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tp1', component: ParentComponent },
    { path: 'lessontextinterpolation', component: LessonTextInterpolationComponent },
    { path: 'listfriends', component: ListFriendsComponent },
    { path: 'onefriend', component: OneFriendComponent },
    { path: 'tp2',component: DataBindingComponent},
    { path: 'tpeval',component:TPEVALComponent},
    { path: 'blog',component:BlogControlCenterComponent},
    { path: 'pokemonlist',component:PokemonListComponent},
    { path: 'plantlist',component:PlantListComponent},

];
