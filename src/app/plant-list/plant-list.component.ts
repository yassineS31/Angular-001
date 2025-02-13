import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Plantservice } from '../services/plant.service';

interface Plant {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css',
  providers: [Plantservice]
})
export class PlantListComponent {
  plants: Plant[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private Plantservice: Plantservice) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.Plantservice.fetchPlantList()
      .then((responseapi) => {
         console.log(responseapi);
        this.plants = responseapi.data.map((plant: any) => ({
          id: plant.id,
          name: plant.scientific_name, // Utilisation du nom scientifique car common_name est souvent null
          image: plant.image_url, // Image temporaire
        }));
        this.isLoading = false;
       
      })

  }
}
